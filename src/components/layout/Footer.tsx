import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Youtube } from 'lucide-react';
import logo from '@/assets/healthcompiler-logo.webp';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'HC Insights', href: '/solutions/employer-analytics' },
  { label: 'HC Growth', href: '/solutions/marketing-automation' },
  { label: 'Health Analytics', href: '/solutions/health-outcomes' },
  { label: 'Patient Engagement', href: '/solutions/patient-engagement' },
  { label: 'Integrations', href: '/integration' },
];

const resourcesLinks = [
  { label: 'APEX', href: '/resources/apex' },
  { label: 'Blogs', href: '/resources/blogs' },
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Mail, href: 'mailto:info@healthcompiler.com', label: 'Email' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border/50">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Left Column - Company Info */}
          <div className="md:col-span-6 lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="HealthCompiler" className="h-10" />
            </Link>
            
            <div className="space-y-1 text-sm text-muted-foreground mb-4">
              <p className="font-semibold text-foreground">+1 415 657 8241</p>
              <p>Health Compiler Inc.</p>
              <p>2261 Market Street #4632</p>
              <p>San Francisco, CA 94114</p>
            </div>

            <p className="text-sm text-muted-foreground mb-2">
              All Rights Reserved | Health Compiler Inc. © {new Date().getFullYear()}
            </p>
            
            <p className="text-sm text-muted-foreground mb-4">
              Made with <span className="text-red-500">❤️</span> in San Francisco
            </p>

            {/* Legal Links */}
            <div className="flex gap-8 mb-6">
              <Link 
                to="/privacy" 
                className="text-sm text-foreground underline hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-sm text-foreground underline hover:text-accent transition-colors"
              >
                Terms of service
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-foreground hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center gap-4">
              <div className="bg-card border border-border rounded-full p-2 w-14 h-14 flex items-center justify-center shadow-soft">
                <div className="text-center">
                  <div className="text-[8px] font-bold text-foreground leading-none">HIPAA</div>
                  <div className="text-[6px] text-muted-foreground">COMPLIANT</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-full p-2 w-14 h-14 flex items-center justify-center shadow-soft">
                <div className="text-center">
                  <div className="text-[7px] font-bold text-foreground leading-none">AICPA</div>
                  <div className="text-[8px] font-bold text-blue-600">SOC 2</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-md px-3 py-2 flex items-center gap-1 shadow-soft">
                <div className="text-[8px] font-bold text-foreground leading-tight">
                  FREE MARKET<br/>
                  <span className="text-[6px] font-normal text-muted-foreground">MEDICAL ASSOCIATION</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="font-display font-semibold text-foreground text-lg mb-6 tracking-wide">
              QUICK LINKS
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-foreground text-lg mb-6 tracking-wide">
              RESOURCES
            </h4>
            <ul className="space-y-4">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
