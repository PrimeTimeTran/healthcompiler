import fs from 'fs'
import path from 'path'

const PAGES_DIR = path.join(process.cwd(), 'src/pages')
const OUTPUT = path.join(process.cwd(), 'public/llms.txt')
const EXCLUDE = ['notfound', 'form', 'index', 'design-kit']

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
  .map((p) => {
    const title = p.title ?? titleFromRoute(p.route)
    return `${p.route} - ${title}`
  })
  .join('\n')}
`.trim()

fs.writeFileSync(OUTPUT, content)

console.log(`✅ llms.txt generated with ${pages.length} routes`)
