'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/header-logo.jpg"
              alt="Logo BABA CONCEPT"
              width={150}
              height={45}
              className="h-10 w-auto rounded-md bg-white/95 p-1 shadow-sm"
              priority
            />
            <span className={cn(
              "text-xl font-display font-bold tracking-tight text-white", // Default to white for transparency
              scrolled || pathname !== '/' ? "text-brand-dark" : "text-white"
            )}>
              BABA <span className="text-brand-orange">CONCEPT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-orange uppercase tracking-wider',
                  pathname === link.href 
                    ? 'text-brand-orange' 
                    : (!scrolled && pathname === '/' ? 'text-white' : 'text-slate-600')
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+237671897536"
              className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20"
            >
              Appeler Directement
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu className={!scrolled && pathname === '/' ? "text-white" : ""} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-3 py-4 text-base font-medium rounded-md',
                    pathname === link.href ? 'text-brand-orange bg-orange-50' : 'text-slate-600 hover:text-brand-orange hover:bg-slate-50'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:+237671897536"
                  className="block w-full text-center bg-brand-blue text-white py-4 rounded-xl font-bold"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
