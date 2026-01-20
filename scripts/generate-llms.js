import fs from 'fs'
import path from 'path'

const PAGES_DIR = path.join(process.cwd(), 'src/pages')
const OUTPUT = path.join(process.cwd(), 'public/llms.txt')
const EXCLUDE = ['notfound', 'form', 'index', 'design-kit', 'not-found']

function isLikelyDescription(text) {
  if (!text) return false

  // Too short
  if (text.length < 40) return false

  // Looks like a name (2–3 capitalized words)
  if (/^[A-Z][a-z]+(\s[A-Z][a-z]+){1,2}$/.test(text)) {
    return false
  }

  // No verbs (very rough heuristic)
  if (
    !/\b(is|are|provides|offers|helps|supports|enables|delivers)\b/i.test(text)
  ) {
    return false
  }

  return true
}

function extractDescriptionFallback(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const metaMatch = content.match(
    /<meta\s+name=["']description["']\s+content=["'](.+?)["']/i
  )
  if (metaMatch) return metaMatch[1]
  const h1Match = content.match(/<h1[^>]*>(.+?)<\/h1>/i)
  if (h1Match) return stripTags(h1Match[1])
  const pMatch = content.match(/<p[^>]*>(.+?)<\/p>/i)
  if (pMatch) return stripTags(pMatch[1])

  return null
}

function stripTags(text) {
  return text
    .replace(/<[^>]*>/g, '') // remove HTML
    .replace(/\{[^}]*\}/g, '') // remove JSX expressions
    .replace(/\s+/g, ' ')
    .trim()
}

function descriptionFromRoute(route) {
  return titleFromRoute(route)
}

function titleFromRoute(route) {
  return (
    route
      .split('/')
      .pop()
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase()) || ''
  )
}

function toRoute(filePath) {
  return (
    '/' +
    filePath
      .replace(/\.(jsx|tsx)$/, '')
      .replace(/\/index$/i, '')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/_/g, '-')
      .toLowerCase()
  )
}

function resolvePageMeta(page) {
  const title = page.title ?? titleFromRoute(page.route)

  if (page.description) {
    return { title, description: page.description }
  }
  const extracted = extractDescriptionFallback(page.filePath)
  if (isLikelyDescription(extracted)) {
    return { title, description: extracted }
  }
  return {
    title,
    description: title,
  }
}

function extractMeta(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')

  const match = content.match(/export const llms\s*=\s*{([\s\S]*?)}/)
  if (!match) return null

  const title = match[1].match(/title:\s*['"`](.+?)['"`]/)?.[1]
  const description = match[1].match(/description:\s*['"`](.+?)['"`]/)?.[1]

  return { title, description }
}

function walk(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  let pages = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      pages = pages.concat(walk(fullPath, path.join(base, entry.name)))
    }

    if (entry.isFile() && /\.(jsx|tsx)$/.test(entry.name)) {
      const relativePath = path.join(base, entry.name).replace(/\\/g, '/')
      const route = toRoute(relativePath)
      const meta = extractMeta(fullPath)

      pages.push({
        route,
        filePath: fullPath,
        title: meta?.title ?? null,
        description: meta?.description ?? null,
      })
    }
  }

  return pages
}
let pages = walk(PAGES_DIR)
  .filter((p) => !EXCLUDE.some((e) => p.route.includes(e)))
  .sort((a, b) => a.route.localeCompare(b.route))

const content = `
# Site: Health Compiler
# Description: Empower your DPC practice with AI-driven analytics & tailored solutions. Enhance patient engagement & optimize care strategies today!
# Language: en
# Last-Updated: ${new Date().toISOString().split('T')[0]}

## Public Pages
${pages
  .map((page) => {
    const { title, description } = resolvePageMeta(page)
    return `${page.route} - ${title}\n  ${description}`
  })
  .join('\n\n')}
`.trim()

fs.writeFileSync(OUTPUT, content)

console.log(`✅ llms.txt generated with ${pages.length} routes`)
