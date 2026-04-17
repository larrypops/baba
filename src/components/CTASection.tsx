'use client';

import { motion } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Besoin d’un électricien à Douala ?
              </h2>
              <p className="text-lg text-slate-300 mb-0">
                Un simple appel suffit pour résoudre votre problème ou lancer votre projet. Notre équipe est prête à intervenir.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <motion.a
                whileHover={{ y: -4 }}
                href="tel:+237671897536"
                className="flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-orange/20"
              >
                <Phone className="w-5 h-5 fill-current" />
                +237 671 89 75 36
              </motion.a>
              <motion.a
                whileHover={{ y: -4 }}
                href="https://wa.me/237671897536"
                className="flex items-center justify-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-xl font-bold transition-all"
              >
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                WhatsApp
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
