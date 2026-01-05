import { Layout } from '@/components/layout/Layout'

const Developer = () => {
  return (
    <Layout>
      <div className='p-12'>
        <div>
          <h1>Strapi Url</h1>
          {import.meta.env.VITE_STRAPI_URL}
        </div>

        <div>
          <h1>Strapi API Token</h1>
          {import.meta.env.VITE_STRAPI_API_TOKEN}
        </div>
      </div>
    </Layout>
  )
}

export default Developer
