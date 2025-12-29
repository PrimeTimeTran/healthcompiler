import { useEffect, useState } from 'react'
import { Layout } from '@/components/layout/Layout'

import Hero from '../../blocks/Hero'
import RichText from '../../blocks/RichText'
import ImageBlock from '../../blocks/ImageBlock'

export const revalidate = 60

export default function Page({ params }) {
  const [blocks, setBlocks] = useState([])
  useEffect(() => {
    async function getData() {
      const { slug } = await params
      const pageSlug = slug ?? 'home-page'

      const res = await fetch(
        `http://localhost:8080/api/pages/render/${pageSlug}`,
        {
          headers: {
            Authorization: `Bearer 3729639169d357ee7b052d041c4815eb1bccec3f00f43197910a160b44adc6aa412b6d17bc7c208e1a5385351a57a19322d56c5877e8178508ec90724e12f234ea1c7859ede88cda23efd6129bfcd34b6a02bb02adaac61ac1206ac824149ea43e93e678883b4c228adf220efa71f82ae5aee60e177be7d2ff17afdb736b1db4`,
          },
        }
      )
      const page = await res.json()
      const blocks = page.templateJson.content || []
      console.log({ blocks })
      setBlocks(blocks)
    }
    getData()
  }, [])

  return (
    <Layout>
      {blocks.map((block: any, index: number) => {
        switch (block.type) {
          case 'RichText':
            return (
              <RichText
                key={index}
                {...block.props}
              />
            )
          case 'ImageBlock':
            return (
              <ImageBlock
                key={index}
                {...block.props}
              />
            )
          case 'Hero':
            return (
              <Hero
                key={index}
                {...block.props}
              />
            )
          default:
            return null
        }
      })}
    </Layout>
  )
}
