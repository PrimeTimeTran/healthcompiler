import { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Scroll to top on route change with smooth transition
  useEffect(() => {
    setIsTransitioning(true)
    window.scrollTo({ top: 0, behavior: 'instant' })

    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 50)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main
        className={`flex-1 pt-16 md:pt-20 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className='page-enter'>{children}</div>
      </main>
      <Footer />
    </div>
  )
}
