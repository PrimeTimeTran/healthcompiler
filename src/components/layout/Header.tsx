import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Brain, Plug, Users, ChevronRight } from 'lucide-react';
import logo from '@/assets/healthcompiler-logo.webp';

interface PlatformCard {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  bgColor: string;
}

const platformCards: PlatformCard[] = [
  {
    title: 'Infera',
    description: 'Healthcare-native AI powering intelligent automation and insights',
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
];

interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Platform', href: '/capabilities', hasMegaMenu: true },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Who We Serve', href: '/partners' },
  { label: 'Resources', href: '/resources' },
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={logo} alt="HealthCompiler" className="h-8 md:h-10" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.hasMegaMenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-foreground py-2 ${
                    location.pathname === item.href.split('?')[0]
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Platform Mega Menu */}
                {item.hasMegaMenu && openDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                    <div className="bg-background border border-border rounded-xl shadow-2xl animate-fade-in p-6 w-[800px]">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                        Explore Platform
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        {platformCards.map((card) => (
                          <Link
                            key={card.href}
                            to={card.href}
                            className="group/card block p-5 rounded-lg border border-border/50 hover:border-accent/50 hover:shadow-md transition-all"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="font-semibold text-foreground group-hover/card:text-accent transition-colors">
                                {card.title}
                              </h3>
                              <ChevronRight size={16} className="text-muted-foreground group-hover/card:text-accent transition-colors" />
                            </div>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                              {card.description}
                            </p>
                            <div className={`${card.bgColor} rounded-lg h-24 flex items-center justify-center`}>
                              <card.icon className="w-10 h-10 text-muted-foreground/60" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA - Right side */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              to="/login" 
              className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              Sign in
              <span className="text-accent">→</span>
            </Link>
            <Button variant="default" size="default" className="rounded-full px-5" asChild>
              <Link to="/contact">
                Book a demo
                <span className="ml-1.5">✦</span>
              </Link>
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
                  {item.hasMegaMenu ? (
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
                        <div className="pl-4 pb-2 animate-fade-in space-y-2">
                          {platformCards.map((card) => (
                            <Link
                              key={card.href}
                              to={card.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                              <span className="font-medium text-foreground">{card.title}</span>
                              <p className="text-xs mt-0.5">{card.description}</p>
                            </Link>
                          ))}
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
