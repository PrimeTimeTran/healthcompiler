import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Plug,
  Users,
  ChevronRight,
} from 'lucide-react'
import logo from '@/assets/healthcompiler-logo.webp'

interface PlatformCard {
  title: string
  description: string
  href: string
  icon: React.ElementType
  bgColor: string
}

const platformCards: PlatformCard[] = [
  {
    title: 'Infera',
    description:
      'Healthcare-native AI powering intelligent automation and insights',
    href: '/platform/infera',
    icon: Brain,
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Integrations',
    description: 'Connect and unify data from any healthcare system seamlessly',
    href: '/platform/integration',
    icon: Plug,
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Forward Deployed Engineering',
    description: 'Dedicated engineering teams embedded with your organization',
    href: '/platform/fde',
    icon: Users,
    bgColor: 'bg-green-50',
  },
]

interface SubMenuItem {
  label: string
  href: string
}

interface SubMenuCategory {
  category: string
  items: SubMenuItem[]
}

const solutionsCategories: SubMenuCategory[] = [
  {
    category: 'Analytics',
    items: [
      { label: 'Employer Analytics', href: '/who-we-serve/employer-analytics' },
      { label: 'Health Outcomes', href: '/solutions/health-outcomes' },
      { label: 'Surveys', href: '/solutions/surveys' },
    ],
  },
  {
    category: 'AI-Powered Tools',
    items: [
      { label: 'AI Receptionist', href: '/solutions/ai-receptionist' },
      { label: 'AI Call Triaging', href: '/solutions/ai-call-triaging' },
      {
        label: 'Marketing Automation',
        href: '/solutions/marketing-automation',
      },
      { label: 'Patient Engagement', href: '/solutions/patient-engagement' },
    ],
  },
  {
    category: 'Value-Based Care',
    items: [
      { label: 'HCC Suspecting', href: '/solutions/hcc-suspecting' },
      { label: 'HEDIS', href: '/solutions/hedis' },
      { label: 'MIPS', href: '/solutions/mips' },
    ],
  },
]

const whoWeServeCategories: SubMenuCategory[] = [
  {
    category: 'Primary Care',
    items: [
      {
        label: 'Direct Primary Care',
        href: '/who-we-serve/direct-primary-care',
      },
      {
        label: 'DPC Networks',
        href: '/who-we-serve/direct-primary-care-networks',
      },
      { label: 'Concierge', href: '/solutions/concierge' },
      {
        label: 'Managed Service Orgs',
        href: '/solutions/managed-service-orgs',
      },
    ],
  },
  {
    category: 'Specialty Care',
    items: [
      { label: 'Functional Medicine', href: '/solutions/functional-medicine' },
      { label: 'Urgent Care', href: '/solutions/urgent-care' },
      { label: 'Pediatrics', href: '/solutions/pediatrics' },
      { label: 'Medical Weight Loss', href: '/medical-weight-loss' },
    ],
  },
  {
    category: 'Care Purchasers',
    items: [
      { label: "TPA's & Health Plans", href: '/solutions/tpa-health-plans' },
      { label: 'Brokers & Advisors', href: '/solutions/brokers-advisors' },
      { label: 'Employers', href: '/solutions/employers' },
      { label: 'Captives', href: '/solutions/captives' },
    ],
  },
  {
    category: 'Value Based Care',
    items: [
      {
        label: 'Independent Primary Care',
        href: '/solutions/independent-primary-care',
      },
      { label: 'ACOs', href: '/solutions/acos' },
      { label: 'CINs', href: '/solutions/cins' },
      { label: 'Payors', href: '/solutions/payors' },
    ],
  },
]

const guideSubItems: SubMenuItem[] = [
  {
    label: 'Direct Primary Care (DPC)',
    href: '/resources/guide/direct-primary-care',
  },
  {
    label: 'Direct Speciality Care',
    href: '/resources/guide/direct-speciality-care',
  },
  {
    label: 'Self-Funded Health Plans',
    href: '/resources/guide/self-funded-health-plans',
  },
]

const resourcesCategories: SubMenuCategory[] = [
  {
    category: 'Learn',
    items: [
      { label: 'Guide', href: '' }, // Not clickable, has nested dropdown
      { label: 'Whitepaper', href: '/resources/whitepaper' },
      { label: 'Blogs', href: '/resources/blogs' },
      { label: 'FAQs', href: '/resources/faqs' },
    ],
  },
  {
    category: 'Community',
    items: [
      { label: 'Partners & Memberships', href: '/partners' },
      { label: 'News & Events', href: '/resources/news-events' },
    ],
  },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  )
  const [guideNestedOpen, setGuideNestedOpen] = useState(false)
  const location = useLocation()

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/30'>
      <div className='container mx-auto px-6 py-4'>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0'
          >
            <img
              rel='preload'
              src={logo}
              alt='HealthCompiler'
              className='h-8 md:h-10'
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className='hidden lg:flex items-center gap-10'>
            {/* Platform with Mega Menu */}
            <div
              className='relative group'
              onMouseEnter={() => handleMouseEnter('Platform')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to='/platform'
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-foreground py-2 ${
                  location.pathname.startsWith('/platform')
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                Platform
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    openDropdown === 'Platform' ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              {openDropdown === 'Platform' && (
                <div className='absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50'>
                  <div className='bg-background border border-border rounded-xl shadow-2xl animate-fade-in p-6 w-[800px]'>
                    <p className='text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4'>
                      Explore Platform
                    </p>
                    <div className='grid grid-cols-3 gap-4'>
                      {platformCards.map((card) => (
                        <Link
                          key={card.href}
                          to={card.href}
                          className='group/card block p-5 rounded-lg border border-border/50 hover:border-accent/50 hover:shadow-md transition-all bg-background'
                        >
                          <div className='flex items-start justify-between mb-3'>
                            <h3 className='font-semibold text-foreground group-hover/card:text-accent transition-colors'>
                              {card.title}
                            </h3>
                            <ChevronRight
                              size={16}
                              className='text-muted-foreground group-hover/card:text-accent transition-colors'
                            />
                          </div>
                          <p className='text-sm text-muted-foreground mb-4 leading-relaxed'>
                            {card.description}
                          </p>
                          <div
                            className={`${card.bgColor} rounded-lg h-24 flex items-center justify-center`}
                          >
                            <card.icon className='w-10 h-10 text-muted-foreground/60' />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className='relative group'
              onMouseEnter={() => handleMouseEnter('Solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to='/solutions'
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-foreground py-2 ${
                  location.pathname === '/solutions'
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                Solutions
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    openDropdown === 'Solutions' ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              {openDropdown === 'Solutions' && (
                <div className='absolute top-full left-0 pt-2 z-50'>
                  <div className='bg-background border border-border rounded-lg shadow-xl animate-fade-in w-[600px] p-6'>
                    <div className='grid grid-cols-3 gap-6'>
                      {solutionsCategories.map((category) => (
                        <div key={category.category}>
                          <h4 className='font-semibold text-foreground mb-3 text-sm'>
                            {category.category}
                          </h4>
                          <ul className='space-y-2'>
                            {category.items.map((item) => (
                              <li key={item.href}>
                                <span className='text-accent mr-2'>»</span>
                                <Link
                                  to={item.href}
                                  className='text-sm text-muted-foreground hover:text-accent transition-colors'
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Who We Serve Dropdown */}
            <div
              className='relative group'
              onMouseEnter={() => handleMouseEnter('Who We Serve')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to='/who-we-serve'
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-foreground py-2 ${
                  location.pathname === '/who-we-serve'
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                Who We Serve
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    openDropdown === 'Who We Serve' ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              {openDropdown === 'Who We Serve' && (
                <div className='absolute top-full left-0 pt-2 z-50'>
                  <div className='bg-background border border-border rounded-lg shadow-xl animate-fade-in w-[900px] p-6'>
                    <div className='grid grid-cols-4 gap-6'>
                      {whoWeServeCategories.map((category) => (
                        <div key={category.category}>
                          <h4 className='font-semibold text-foreground mb-3 text-sm'>
                            {category.category}
                          </h4>
                          <ul className='space-y-2'>
                            {category.items.map((item) => (
                              <li key={item.href}>
                                <span className='text-accent mr-2'>»</span>
                                <Link
                                  to={item.href}
                                  className='text-sm text-muted-foreground hover:text-accent transition-colors'
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className='relative group'
              onMouseEnter={() => handleMouseEnter('Resources')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to='/resources'
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-foreground py-2 ${
                  location.pathname === '/resources'
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                Resources
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    openDropdown === 'Resources' ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              {openDropdown === 'Resources' && (
                <div
                  className='absolute top-full right-0 pt-2 z-50'
                  onMouseLeave={() => setGuideNestedOpen(false)}
                >
                  <div className='bg-background border border-border rounded-lg shadow-xl animate-fade-in p-5'>
                    <div className='flex gap-10'>
                      {resourcesCategories.map((category) => (
                        <div
                          key={category.category}
                          className='min-w-[140px]'
                        >
                          <h4 className='font-semibold text-foreground mb-3 text-sm'>
                            {category.category}
                          </h4>
                          <ul className='space-y-2.5'>
                            {category.items.map((item) => (
                              <li
                                key={item.label}
                                className='relative'
                              >
                                {item.label === 'Guide' ? (
                                  <div
                                    className='relative'
                                    onMouseEnter={() =>
                                      setGuideNestedOpen(true)
                                    }
                                    onMouseLeave={(e) => {
                                      const relatedTarget =
                                        e.relatedTarget as HTMLElement
                                      if (
                                        !relatedTarget?.closest(
                                          '.guide-nested-dropdown'
                                        )
                                      ) {
                                        setGuideNestedOpen(false)
                                      }
                                    }}
                                  >
                                    <span className='flex items-center justify-between w-full text-sm text-muted-foreground hover:text-accent transition-colors whitespace-nowrap cursor-pointer'>
                                      <span className='flex items-center'>
                                        <span className='text-accent mr-2'>
                                          »
                                        </span>
                                        {item.label}
                                      </span>
                                      <ChevronRight
                                        size={12}
                                        className='ml-auto'
                                      />
                                    </span>
                                    {guideNestedOpen && (
                                      <div
                                        className='guide-nested-dropdown absolute left-full top-[-8px] ml-0 z-50'
                                        onMouseEnter={() =>
                                          setGuideNestedOpen(true)
                                        }
                                        onMouseLeave={() =>
                                          setGuideNestedOpen(false)
                                        }
                                      >
                                        <div className='bg-background border border-border rounded-lg shadow-xl p-3 min-w-[200px]'>
                                          <ul className='space-y-2'>
                                            {guideSubItems.map((subItem) => (
                                              <li key={subItem.href}>
                                                <span className='text-accent mr-2'>
                                                  »
                                                </span>
                                                <Link
                                                  to={subItem.href}
                                                  className='text-sm text-muted-foreground hover:text-accent transition-colors whitespace-nowrap'
                                                >
                                                  {subItem.label}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <>
                                    <span className='text-accent mr-2'>»</span>
                                    <Link
                                      to={item.href}
                                      className='text-sm text-muted-foreground hover:text-accent transition-colors whitespace-nowrap'
                                    >
                                      {item.label}
                                    </Link>
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* APEX (no dropdown) */}
            <Link
              to='/resources/apex'
              className={`text-[15px] font-medium transition-colors hover:text-foreground py-2 ${
                location.pathname === '/resources/apex'
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              APEX
            </Link>
          </div>

          {/* Desktop CTA - Right side */}
          <div className='hidden lg:flex items-center gap-6'>
            <a
              href='https://insights.healthcompiler.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5'
            >
              Sign in
              <span className='text-accent'>→</span>
            </a>
            <Button
              variant='gradient'
              size='default'
              className='rounded-full px-5'
              asChild
            >
              <Link to='/contact'>
                Request a Demo
                <span className='ml-1.5'>→</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden p-2 text-foreground'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in'>
            <div className='flex flex-col gap-2'>
              {/* Platform */}
              <div>
                <button
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === 'Platform' ? null : 'Platform'
                    )
                  }
                  className='flex items-center justify-between w-full py-2 text-base font-medium text-muted-foreground'
                >
                  Platform
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openMobileDropdown === 'Platform' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openMobileDropdown === 'Platform' && (
                  <div className='pl-4 pb-2 animate-fade-in space-y-2'>
                    {platformCards.map((card) => (
                      <Link
                        key={card.href}
                        to={card.href}
                        onClick={() => setIsMenuOpen(false)}
                        className='block py-2 text-sm text-muted-foreground hover:text-accent transition-colors'
                      >
                        <span className='font-medium text-foreground'>
                          {card.title}
                        </span>
                        <p className='text-xs mt-0.5'>{card.description}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions */}
              <div>
                <button
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === 'Solutions' ? null : 'Solutions'
                    )
                  }
                  className='flex items-center justify-between w-full py-2 text-base font-medium text-muted-foreground'
                >
                  Solutions
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openMobileDropdown === 'Solutions' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openMobileDropdown === 'Solutions' && (
                  <div className='pl-4 pb-2 animate-fade-in'>
                    {solutionsCategories.map((category) => (
                      <div
                        key={category.category}
                        className='mb-4'
                      >
                        <h4 className='font-semibold text-foreground mb-2 text-sm'>
                          {category.category}
                        </h4>
                        {category.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className='flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-accent transition-colors'
                          >
                            <span className='text-accent'>»</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Who We Serve */}
              <div>
                <button
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === 'Who We Serve'
                        ? null
                        : 'Who We Serve'
                    )
                  }
                  className='flex items-center justify-between w-full py-2 text-base font-medium text-muted-foreground'
                >
                  Who We Serve
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openMobileDropdown === 'Who We Serve' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openMobileDropdown === 'Who We Serve' && (
                  <div className='pl-4 pb-2 animate-fade-in'>
                    {whoWeServeCategories.map((category) => (
                      <div
                        key={category.category}
                        className='mb-4'
                      >
                        <h4 className='font-semibold text-foreground mb-2 text-sm'>
                          {category.category}
                        </h4>
                        {category.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className='flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-accent transition-colors'
                          >
                            <span className='text-accent'>»</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources */}
              <div>
                <button
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === 'Resources' ? null : 'Resources'
                    )
                  }
                  className='flex items-center justify-between w-full py-2 text-base font-medium text-muted-foreground'
                >
                  Resources
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openMobileDropdown === 'Resources' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openMobileDropdown === 'Resources' && (
                  <div className='pl-4 pb-2 animate-fade-in'>
                    {resourcesCategories.map((category) => (
                      <div
                        key={category.category}
                        className='mb-4'
                      >
                        <h4 className='font-semibold text-foreground mb-2 text-sm'>
                          {category.category}
                        </h4>
                        {category.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className='flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-accent transition-colors'
                          >
                            <span className='text-accent'>»</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* APEX */}
              <Link
                to='/resources/apex'
                onClick={() => setIsMenuOpen(false)}
                className='block py-2 text-base font-medium text-muted-foreground'
              >
                APEX
              </Link>

              <Button
                variant='gradient'
                size='default'
                className='mt-4'
                asChild
              >
                <Link
                  to='/contact'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request a Demo →
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
