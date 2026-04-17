'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, MapPin, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Électricité',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    alert("Merci ! Votre message a été envoyé à BABA CONCEPT.");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6">
            <span className="text-brand-orange">Contactez</span>-nous
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Besoin d’un service ou d’un dépannage ? Nous sommes disponibles pour répondre à vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="bg-orange-50 text-brand-orange w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Téléphone</h3>
              <p className="text-slate-600 mb-4">+237 671 89 75 36</p>
              <a href="tel:+237671897536" className="text-brand-orange font-bold hover:underline">Appeler maintenant</a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="bg-green-50 text-[#25D366] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
              <p className="text-slate-600 mb-4">Chat direct disponible</p>
              <a href="https://wa.me/237671897536" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">Ouvrir WhatsApp</a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="bg-blue-50 text-brand-blue w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Zone d’intervention</h3>
              <p className="text-slate-600">Douala et ses environs, Cameroun</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-display font-bold mb-8">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Nom complet</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                      placeholder="Votre nom"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Téléphone</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                      placeholder="Votre numéro"
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email (Optionnel)</label>
                    <input 
                      type="email" 
                      className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                      placeholder="Votre email"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Type de service</label>
                    <select 
                      className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all appearance-none"
                      value={formState.service}
                      onChange={e => setFormState({...formState, service: e.target.value})}
                    >
                      <option>Électricité</option>
                      <option>Solaire</option>
                      <option>Sécurité</option>
                      <option>Groupe électrogène</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Votre Message</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-brand-blue text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/20"
                >
                  <Send className="w-5 h-5" />
                  Envoyer la demande
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
