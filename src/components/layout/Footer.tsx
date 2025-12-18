import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Youtube } from 'lucide-react';
import logo from '@/assets/healthcompiler-logo.webp';
import hipaaSoc2Badge from '@/assets/hipaa-soc2-badge.png';
import fmmaBadge from '@/assets/fmma-badge.png';
const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'HC Insights', href: '/solutions/employer-analytics' },
  { label: 'HC Growth', href: '/solutions/marketing-automation' },
  { label: 'Health Analytics', href: '/solutions/health-outcomes' },
  { label: 'Patient Engagement', href: '/solutions/patient-engagement' },
  { label: 'Integrations', href: '/platform/integration' },
];

const resourcesLinks = [
  { label: 'APEX', href: '/resources/apex' },
  { label: 'Blogs', href: '/resources/blogs' },
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

const contactLinks = [
  { label: 'Tech Support', href: 'mailto:support@healthcompiler.com' },
  { label: 'Customer Success', href: 'mailto:success@healthcompiler.com' },
  { label: 'Sales', href: 'mailto:info@healthcompiler.com' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/healthcompiler', label: 'LinkedIn', color: '#0A66C2' },
  { icon: Instagram, href: 'https://www.instagram.com/healthcompiler/', label: 'Instagram', color: '#E4405F' },
  { icon: Mail, href: 'mailto:info@healthcompiler.com', label: 'Email', color: '#000000' },
  { icon: Youtube, href: 'https://www.youtube.com/@healthcompiler', label: 'YouTube', color: '#FF0000' },
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
            <div className="flex gap-3 mb-6">
              <Link 
                to="/privacy" 
                className="px-5 py-2.5 text-sm font-medium text-muted-foreground bg-muted/50 border border-border/40 rounded-full hover:bg-muted hover:text-foreground hover:border-border transition-all duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="px-5 py-2.5 text-sm font-medium text-muted-foreground bg-muted/50 border border-border/40 rounded-full hover:bg-muted hover:text-foreground hover:border-border transition-all duration-200"
              >
                Terms of Service
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
                  className="w-10 h-10 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" style={{ color: social.color }} />
                </a>
              ))}
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center gap-8">
              <img 
                src={hipaaSoc2Badge} 
                alt="HIPAA Compliant and AICPA SOC 2" 
                className="h-20 w-auto object-contain"
              />
              <img 
                src={fmmaBadge} 
                alt="Free Market Medical Association" 
                className="h-20 w-auto object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
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
          <div className="md:col-span-2">
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

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="font-display font-semibold text-foreground text-lg mb-6 tracking-wide">
              REACH OUT
            </h4>
            <ul className="space-y-4">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
