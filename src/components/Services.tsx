'use client';

import { motion } from 'motion/react';
import { Zap, Sun, Shield, Settings } from 'lucide-react';

const services = [
  {
    title: "Électricité générale",
    description: "Installation électrique complète, mise aux normes, dépannage rapide et maintenance pour particuliers et professionnels.",
    icon: Zap,
    color: "bg-blue-500",
  },
  {
    title: "Énergie solaire",
    description: "Installation de panneaux solaires photovoltaïques, systèmes autonomes avec batteries et maintenance périodique.",
    icon: Sun,
    color: "bg-brand-orange",
  },
  {
    title: "Systèmes de sécurité",
    description: "Installation de caméras de surveillance IP, systèmes de contrôle d'accès et sécurisation électronique des bâtiments.",
    icon: Shield,
    color: "bg-indigo-600",
  },
  {
    title: "Groupe électrogène",
    description: "Installation, mise en service, entretien et dépannage de groupes électrogènes toutes puissances.",
    icon: Settings,
    color: "bg-slate-600",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">
              Des solutions complètes pour vos installations
            </h2>
            <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-orange/20"
            >
              <div className={`w-14 h-14 ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/10`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display text-brand-dark group-hover:text-brand-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
