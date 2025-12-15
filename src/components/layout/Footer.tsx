import { Link } from 'react-router-dom';
import logo from '@/assets/healthcompiler-logo.webp';

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  solutions: [
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Solutions', href: '/solutions' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border/50">
      <div className="container-tight mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="HealthCompiler" className="h-8" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Healthcare data platforms built for modern healthcare teams. Analytics, automation, and secure data architecture.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HealthCompiler. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft"></span>
              HIPAA-Aligned • Secure by Design
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
