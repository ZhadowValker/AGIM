import React from 'react';
import { Link } from 'react-router-dom';
import { BRANDING } from "@/config/branding";
import { Headphones, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/listen-live', label: 'Listen Live' },
    { path: '/prayer-tower', label: 'Prayer Tower' },
    { path: '/testimonies', label: 'Testimonies' },
    { path: '/live-programs', label: 'Events' },
    { path: '/podcasts', label: 'Podcasts' },
    { path: '/bible-quiz', label: 'Bible Quiz' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-indigo-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-2.5 rounded-xl">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">{BRANDING.shortName}</span>
                <span className="text-sm text-gray-400">{BRANDING.tagline}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating minds and spirits through Love of Christ, mindfulness, and truth. Broadcasting clarity and hope 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-bold text-lg mb-4 block">Quick Links</span>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span className="font-bold text-lg mb-4 block">Contact Us</span>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>12th High Street, Brookeville, MD 20832</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 shrink-0" />
                <span>(703) 577-2569</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 shrink-0" />
                <span>info@agimusa.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <span className="font-bold text-lg mb-4 block">Follow Us</span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-br hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Tune in to our channels on all major platforms.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
           {BRANDING.copyright} | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;