import { Layout } from '@/components/layout/Layout'
import { useEffect, useState } from 'react'

export default function Careers() {
  const [careers, setCareers] = useState([])
  useEffect(() => {
    async function getCareers() {
      const data = await fetch('http://localhost:8080/api/jobs', {
        headers: {
          Authorization: `Bearer 3729639169d357ee7b052d041c4815eb1bccec3f00f43197910a160b44adc6aa412b6d17bc7c208e1a5385351a57a19322d56c5877e8178508ec90724e12f234ea1c7859ede88cda23efd6129bfcd34b6a02bb02adaac61ac1206ac824149ea43e93e678883b4c228adf220efa71f82ae5aee60e177be7d2ff17afdb736b1db4`,
        },
      })
      const json = await data.json()
      setCareers(json.data)
    }
    getCareers()
  }, [])

  return (
    <Layout>
      <div className='m-64'>
        <h1>Careers</h1>
        {careers.map((c) => {
          return (
            <div>
              <h1>{c.title}</h1>
              <p>{c.company}</p>
              <p>{c.salaryRange}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
