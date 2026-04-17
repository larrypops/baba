'use client';

import { CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

const reasons = [
  "Intervention rapide à Douala",
  "Travail propre et soigné",
  "Équipements de qualité",
  "Expertise technique solide",
  "Accompagnement personnalisé",
  "Devis clairs et détaillés",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-4 block">Votre Confiance, Notre Priorité</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-8">
              Un service fiable et professionnel
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              BABA CONCEPT est une entreprise spécialisée en électricité générale, énergie solaire, sécurité et groupes électrogènes. 
              Nous intervenons rapidement à Douala et ses environs pour vous offrir des solutions fiables, durables et sécurisées.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-orange-50 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                  </div>
                  <span className="font-medium text-slate-700">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square bg-brand-blue rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/header.png"
                alt="Technicien BABA CONCEPT en intervention"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                    <p className="text-2xl font-bold mb-2">Notre Engagement</p>
                    <p className="text-6xl font-display font-black text-brand-orange">QUALITÉ</p>
                    <p className="text-4xl font-display font-bold mt-2 opacity-80">RAPIDITÉ — FIABILITÉ</p>
                </div>
              </div>
            </div>
            
            {/* Stats floating card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                    <div className="bg-brand-orange text-white p-3 rounded-xl">
                        <Zap className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-brand-dark">100%</p>
                        <p className="text-sm text-slate-500 font-medium whitespace-nowrap">Satisfaction Client</p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
