'use client'

import { useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'

declare global {
  interface Window {
    hbspt: any
  }
}

const Form = () => {
  useEffect(() => {
    // Prevent double-loading
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: 'na1',
        portalId: '21742361',
        formId: 'fbb5aa2a-9d1c-470d-a4ca-75d935ae3015',
        target: '#hubspot-form',
      })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/embed/v2.js'
    script.async = true

    script.onload = () => {
      window.hbspt.forms.create({
        region: 'na1',
        portalId: '21742361',
        formId: 'fbb5aa2a-9d1c-470d-a4ca-75d935ae3015',
        target: '#hubspot-form',
      })
    }

    document.body.appendChild(script)
  }, [])

  return (
    <Layout>
      <div className='flex justify-center  w-full min-h-[400px]'>
        <div id='hubspot-form' />
      </div>
    </Layout>
  )
}

export default Form
