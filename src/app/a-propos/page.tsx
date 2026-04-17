'use client';

import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap, Award, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6">
            À Propos de <span className="text-brand-orange">BABA CONCEPT</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Spécialiste des solutions techniques à Douala pour particuliers et professionnels.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="relative aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/header.png"
                alt="Équipe BABA CONCEPT"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-orange rounded-3xl -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Qui sommes-nous ?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              BABA CONCEPT est une entreprise basée à Douala, spécialisée dans les solutions techniques pour les particuliers et les professionnels. Nous intervenons dans plusieurs domaines clés : <strong>Électricité, Énergie solaire, Sécurité et Groupes électrogènes</strong>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Avec une expérience terrain et une maîtrise technique, BABA CONCEPT garantit des installations sécurisées, des interventions efficaces et des solutions adaptées à chaque besoin.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <div className="bg-brand-orange text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Apporter des solutions fiables, durables et accessibles pour améliorer le confort, la sécurité et l’autonomie énergétique de nos clients.
            </p>
          </div>
          <div className="bg-brand-blue p-10 rounded-3xl text-white">
            <div className="bg-white/20 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
            <p className="text-blue-50 leading-relaxed text-lg">
              Devenir une référence en solutions techniques à Douala et dans toute la région, reconnue pour son excellence et son innovation.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-display font-bold text-center mb-16">Nos Valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Professionnalisme", icon: Award },
              { title: "Rapidité d’intervention", icon: Zap },
              { title: "Fiabilité", icon: ShieldCheck },
              { title: "Qualité du travail", icon: Award },
              { title: "Satisfaction client", icon: Users },
            ].map((value, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-orange-50 text-brand-orange p-3 rounded-xl">
                  <value.icon className="w-6 h-6" />
                </div>
                <span className="text-lg font-bold text-brand-dark">{value.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
