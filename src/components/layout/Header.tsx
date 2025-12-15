import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/healthcompiler-logo.webp';

interface SubMenuItem {
  label: string;
  href: string;
}

interface SubMenuCategory {
  category: string;
  items: SubMenuItem[];
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[] | SubMenuCategory[];
  isMultiColumn?: boolean;
}

const navItems: NavItem[] = [
  { 
    label: 'Platform', 
    href: '/capabilities?tab=platform',
    subItems: [
      { label: 'Forward Deployed Engineering (FDE)', href: '/platform/fde' },
      { label: 'Integration', href: '/platform/integration' },
    ]
  },
  { 
    label: 'Solutions', 
    href: '/solutions',
    isMultiColumn: true,
    subItems: [
      {
        category: 'Primary Care',
        items: [
          { label: 'Direct Primary Care', href: '/solutions/direct-primary-care' },
          { label: 'DPC Networks', href: '/solutions/dpc-networks' },
          { label: 'Concierge', href: '/solutions/concierge' },
          { label: 'Managed Service Orgs', href: '/solutions/managed-service-orgs' },
        ]
      },
      {
        category: 'Specialty Care',
        items: [
          { label: 'Functional Medicine', href: '/solutions/functional-medicine' },
          { label: 'Urgent Care', href: '/solutions/urgent-care' },
          { label: 'Pediatrics', href: '/solutions/pediatrics' },
          { label: 'Medical Weight Loss', href: '/solutions/medical-weight-loss' },
        ]
      },
      {
        category: 'Healthcare Purchasers',
        items: [
          { label: "TPA's & Health Plans", href: '/solutions/tpa-health-plans' },
          { label: 'Brokers & Advisors', href: '/solutions/brokers-advisors' },
          { label: 'Employers', href: '/solutions/employers' },
        ]
      }
    ] as SubMenuCategory[]
  },
  { 
    label: 'Resources', 
    href: '/resources',
    subItems: [
      { label: 'Apex', href: '/resources/apex' },
      { label: 'Blogs', href: '/resources/blogs' },
      { label: 'Partners & Memberships', href: '/resources/partners-memberships' },
      { label: 'Guide', href: '/resources/guide' },
      { label: 'Whitepaper', href: '/resources/whitepaper' },
      { label: 'News & Events', href: '/resources/news-events' },
      { label: 'FAQs', href: '/resources/faqs' },
    ]
  },
  { label: 'Partners', href: '/partners' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const isSubMenuCategory = (item: SubMenuItem | SubMenuCategory): item is SubMenuCategory => {
    return 'category' in item;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-tight mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="HealthCompiler" className="h-8 md:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent py-2 ${
                    location.pathname === item.href.split('?')[0]
                      ? 'text-accent'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && openDropdown === item.label && (
                  <div 
                    className={`absolute top-full left-0 pt-2 z-50`}
                  >
                    <div className={`bg-background border border-border rounded-lg shadow-xl animate-fade-in ${
                      item.isMultiColumn ? 'w-[600px] p-6' : 'min-w-[220px] py-2'
                    }`}>
                    {item.isMultiColumn ? (
                      <div className="grid grid-cols-3 gap-6">
                        {(item.subItems as SubMenuCategory[]).map((category) => (
                          <div key={category.category}>
                            <h4 className="font-semibold text-foreground mb-3 text-sm">{category.category}</h4>
                            <ul className="space-y-2">
                              {category.items.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    to={subItem.href}
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                                  >
                                    <span className="text-accent">»</span>
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      (item.subItems as SubMenuItem[]).map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-secondary/50 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))
                    )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="hero" size="default" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                        className={`flex items-center justify-between w-full py-2 text-base font-medium transition-colors ${
                          location.pathname === item.href.split('?')[0]
                            ? 'text-accent'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileDropdown === item.label && (
                        <div className="pl-4 pb-2 animate-fade-in">
                          {item.isMultiColumn ? (
                            (item.subItems as SubMenuCategory[]).map((category) => (
                              <div key={category.category} className="mb-4">
                                <h4 className="font-semibold text-foreground mb-2 text-sm">{category.category}</h4>
                                {category.items.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    to={subItem.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                                  >
                                    <span className="text-accent">»</span>
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            ))
                          ) : (
                            (item.subItems as SubMenuItem[]).map((subItem) => (
                              <Link
                                key={subItem.href}
                                to={subItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 text-base font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-accent'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button variant="hero" size="default" className="mt-4" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Book a Consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
