import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'AI Solutions & Automation', href: '#' },
      { name: 'Rapid MVP Development', href: '#' },
      { name: 'SaaS & Web Apps', href: '#' },
      { name: 'Website Development', href: '#' },
      { name: 'Mobile App Development', href: '#' },
      { name: 'Digital Marketing', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Work', href: '/work' },
      { name: 'Case Studies', href: '/work' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'FAQ', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Refund Policy', href: '#' },
    ],
  };

  const offices = [
    {
      country: '🇮🇳 India',
      city: 'The Atomic, Near Technopark Phase 1, Kazhakootam, 695582, Trivandrum, Kerala.',
      phone: '+91 79070 21813',
      email: 'hello@qorb.tech',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/qorb-tech/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/qorb.tech?igsh=MXhtZjJxNGUxeW5lOA==', label: 'Instagram' },
    { icon: Mail, href: 'mailto:hello@qorb.tech', label: 'Email' },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground pt-20 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-primary-foreground/10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/footer-logo.png" alt="QORB" className="h-24 md:h-32 w-auto object-contain" />
            </Link>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Intelligent Solutions for Modern Businesses
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Offices</h4>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="text-sm">
                  <div className="font-semibold text-primary-foreground mb-1">{office.country}</div>
                  <div className="flex items-start gap-2 text-primary-foreground/60 mb-1">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{office.city}</span>
                  </div>
                  {office.phone && (
                    <div className="flex items-center gap-2 text-primary-foreground/60 mb-1">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-primary-foreground/60">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-primary-foreground transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          © 2026 Qorb Copyright. All rights reserved.

        </div>
      </div>
    </footer>
  );
};

export default Footer;
