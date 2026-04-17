'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Phone, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/header.png"
          alt="Équipe BABA CONCEPT"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
              Expert Électricien à Douala
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Installation, dépannage & <span className="text-brand-orange">solutions techniques</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              BABA CONCEPT vous accompagne dans tous vos projets électriques, solaires et de sécurité avec professionnalisme, rapidité et fiabilité.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+237671897536"
                className="flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-orange/20 transition-all hover:bg-brand-orange/90"
              >
                <Phone className="w-5 h-5 fill-current" />
                Appeler maintenant
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/237671897536"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all hover:bg-slate-50"
              >
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
