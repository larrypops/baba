import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/footer-logo.jpg"
                alt="Logo BABA CONCEPT"
                width={150}
                height={45}
                className="h-10 w-auto rounded-md bg-white p-1"
              />
              <span className="text-xl font-display font-bold tracking-tight">
                BABA <span className="text-brand-orange">CONCEPT</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Votre expert en solutions techniques à Douala. Électricité, Solaire, Sécurité et Groupes Électrogènes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-display uppercase tracking-wider text-brand-orange">Navigation</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="text-slate-400 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-display uppercase tracking-wider text-brand-orange">Nos Services</h3>
            <ul className="space-y-4">
              <li className="text-slate-400">Électricité Générale</li>
              <li className="text-slate-400">Énergie Solaire</li>
              <li className="text-slate-400">Systèmes de Sécurité</li>
              <li className="text-slate-400">Groupes Électrogènes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-display uppercase tracking-wider text-brand-orange">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span>+237 671 89 75 36</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <span>contact@babaconcept.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                <span>Douala, Cameroun</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} BABA CONCEPT. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
