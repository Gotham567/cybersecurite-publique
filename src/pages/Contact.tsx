import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import SEOHead from "../components/SEOHead";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact CybersécuritéPublique.fr",
  "description": "Contactez nos experts cybersécurité pour collectivités et santé. Réponse sous 24h.",
  "url": "https://cybersecurite-publique.fr/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "CybersécuritéPublique.fr",
    "telephone": "+33100000000",
    "email": "contact@cybersecurite-publique.fr",
    "address": { "@type": "PostalAddress", "addressLocality": "Paris", "addressCountry": "FR" },
  },
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <SEOHead
        title="Contact — Audit et Devis Cybersécurité Gratuit"
        description="Contactez nos experts cybersécurité pour collectivités et hôpitaux. Devis gratuit, réponse sous 24h. Audit de sécurité, NIS2, pentest, formation agents."
        canonical="/contact"
        jsonLd={jsonLd}
      />

      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-tag mx-auto mb-6"><Shield className="w-3.5 h-3.5" /> Contact</div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Parlons de votre <span className="text-gradient">sécurité</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Audit gratuit, devis sous 24h. Nos experts répondent à toutes vos questions sur la cybersécurité publique.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Infos contact */}
            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">Téléphone</h3>
                <a href="tel:+33100000000" className="text-primary hover:underline text-sm">01 00 00 00 00</a>
                <p className="text-xs text-muted-foreground mt-1">Urgences cyber : 24h/24 — 7j/7</p>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
                <a href="mailto:contact@cybersecurite-publique.fr" className="text-primary hover:underline text-sm break-all">contact@cybersecurite-publique.fr</a>
                <p className="text-xs text-muted-foreground mt-1">Réponse garantie sous 24h ouvrées</p>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">Localisation</h3>
                <p className="text-sm text-muted-foreground">Paris, France</p>
                <p className="text-xs text-muted-foreground mt-1">Interventions sur toute la France</p>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">Horaires</h3>
                <p className="text-sm text-muted-foreground">Lun–Ven : 9h – 18h</p>
                <p className="text-xs text-muted-foreground mt-1">Urgences cyber : 24/7</p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8">
                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Message envoyé !</h3>
                    <p className="text-muted-foreground">Nos experts vous répondent sous 24h ouvrées. En cas d'urgence, appelez le <a href="tel:+33100000000" className="text-primary hover:underline">01 00 00 00 00</a>.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Demande d'audit gratuit</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Nom & Prénom *</label>
                        <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                          className="w-full bg-muted/20 border border-border/60 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                          placeholder="Marie Dupont" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Organisation *</label>
                        <input required type="text" value={form.org} onChange={e => setForm({...form, org: e.target.value})}
                          className="w-full bg-muted/20 border border-border/60 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                          placeholder="Mairie de Lyon" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email professionnel *</label>
                        <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                          className="w-full bg-muted/20 border border-border/60 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                          placeholder="m.dupont@mairie-lyon.fr" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone</label>
                        <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                          className="w-full bg-muted/20 border border-border/60 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                          placeholder="+33 4 XX XX XX XX" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Sujet *</label>
                      <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                        className="w-full bg-muted/20 border border-border/60 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors">
                        <option value="">Sélectionner un sujet</option>
                        <option>Audit de sécurité SI</option>
                        <option>Conformité NIS2</option>
                        <option>Test d'intrusion (pentest)</option>
                        <option>Certification HDS</option>
                        <option>Formation agents</option>
                        <option>Réponse à incident en cours</option>
                        <option>SOC / surveillance 24/7</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                        className="w-full bg-muted/20 border border-border/60 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                        placeholder="Décrivez votre besoin, le contexte de votre organisation, vos contraintes (délai, budget)..." />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      En soumettant ce formulaire, vous acceptez notre <a href="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</a>. Vos données ne sont jamais revendues.
                    </p>
                    <button type="submit" className="btn-primary w-full justify-center text-base py-3">
                      <Send className="w-4 h-4" /> Envoyer ma demande
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
