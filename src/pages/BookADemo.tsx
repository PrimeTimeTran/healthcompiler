import { Layout } from '@/components/layout/Layout'

const BookADemo = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center w-screen h-screen bg-background'>
        <iframe
          src='https://meetings.hubspot.com/mehulagarwal/demo-meeting'
          className='w-full max-w-4xl h-full'
          style={{ border: 'none' }}
          title='Book a Demo'
        />
      </div>
    </Layout>
  )
}

export default BookADemo
