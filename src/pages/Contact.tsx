import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import SEOHead from "../components/SEOHead";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const contactInfos = [
  {
    icon: Phone,
    title: "Téléphone",
    value: "01 00 00 00 00",
    sub: "Urgences cyber disponibles 24h/24 — 7j/7",
    href: "tel:+33100000000",
    color: "hsl(213 94% 58%)",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@cybersecurite-publique.fr",
    sub: "Réponse garantie sous 24h ouvrées",
    href: "mailto:contact@cybersecurite-publique.fr",
    color: "hsl(158 64% 55%)",
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Paris, France",
    sub: "Interventions sur toute la France",
    href: undefined,
    color: "hsl(213 94% 58%)",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun–Ven : 9h – 18h",
    sub: "Urgences cyber : 24/7",
    href: undefined,
    color: "hsl(213 94% 58%)",
  },
];

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

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, hsl(213 94% 58% / 0.12) 0%, transparent 65%)" }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="dot-live" />
              <div className="section-tag"><Shield className="w-3 h-3" /> Contact</div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-5 tracking-tight">
              Parlons de votre <span className="text-gradient">sécurité</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Audit gratuit, devis sous 24h. Nos experts répondent à toutes vos questions sur la cybersécurité publique.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* Main content */}
      <section className="py-16 pb-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Left — info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfos.map((info, i) => (
                <motion.div key={info.title} {...fade(i * 0.08)}>
                  <div className="glass glass-hover rounded-2xl p-6 flex gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${info.color}18`, border: `1px solid ${info.color}30` }}>
                      <info.icon className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">{info.title}</div>
                      {info.href ? (
                        <a href={info.href} className="font-semibold text-foreground text-sm hover:text-primary transition-colors break-all leading-tight block">
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-semibold text-foreground text-sm leading-tight">{info.value}</div>
                      )}
                      <div className="text-xs text-muted-foreground mt-1">{info.sub}</div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Urgency box */}
              <motion.div {...fade(0.36)}>
                <div className="relative rounded-2xl p-6 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(239,68,68,0.08), rgba(234,88,12,0.05))",
                    border: "1px solid rgba(239,68,68,0.2)"
                  }}>
                  <div className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.4), transparent)" }} />
                  <div className="flex items-start gap-3">
                    <div className="dot-red mt-1 shrink-0" />
                    <div>
                      <div className="font-heading font-bold text-red-300 text-sm mb-1">Cyberattaque en cours ?</div>
                      <p className="text-xs text-red-300/70 leading-relaxed mb-3">
                        Notre CERT intervient en moins de 4h. Appelez immédiatement, ne payez pas de rançon.
                      </p>
                      <a href="tel:+33100000000" className="inline-flex items-center gap-2 text-sm font-bold text-red-300 hover:text-red-200 transition-colors">
                        <Zap className="w-3.5 h-3.5" /> 01 00 00 00 00 — Urgence 24/7
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Garantees */}
              <motion.div {...fade(0.44)}>
                <div className="rounded-2xl p-5"
                  style={{ background: "hsl(224 42% 7% / 0.7)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground/60 mb-4">Nos engagements</div>
                  {["Réponse sous 24h ouvrées", "Devis 100% gratuit", "Sans engagement", "Confidentialité garantie"].map(g => (
                    <div key={g} className="check-item mb-2 last:mb-0">
                      <div className="check-icon">
                        <CheckCircle2 className="w-3 h-3" style={{ color: "hsl(158 64% 55%)" }} />
                      </div>
                      <span className="text-sm">{g}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div className="lg:col-span-3" {...fade(0.1)}>
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "hsl(224 42% 7% / 0.9)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)"
                }}>
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(213 94% 65% / 0.5), transparent)" }} />

                <div className="p-8">
                  {sent ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        style={{ background: "hsl(158 64% 44% / 0.15)", border: "1px solid hsl(158 64% 44% / 0.3)" }}>
                        <CheckCircle2 className="w-10 h-10" style={{ color: "hsl(158 64% 58%)" }} />
                      </div>
                      <h3 className="font-heading text-2xl font-black text-foreground mb-3">Message envoyé !</h3>
                      <p className="text-muted-foreground mb-6 max-w-sm mx-auto leading-relaxed">
                        Nos experts vous répondent sous 24h ouvrées. En cas d'urgence, appelez le{" "}
                        <a href="tel:+33100000000" className="text-primary hover:underline font-semibold">01 00 00 00 00</a>.
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono"
                        style={{ background: "hsl(158 64% 44% / 0.1)", border: "1px solid hsl(158 64% 44% / 0.2)", color: "hsl(158 64% 62%)" }}>
                        <div className="dot-live" style={{ width: "6px", height: "6px" }} /> Équipe notifiée
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="mb-7">
                        <h2 className="font-heading text-2xl font-black text-foreground">Demande d'audit gratuit</h2>
                        <p className="text-sm text-muted-foreground mt-1">Tous les champs marqués * sont obligatoires</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground/70 mb-2">Nom & Prénom *</label>
                          <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                            className="input-field" placeholder="Marie Dupont" />
                        </div>
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground/70 mb-2">Organisation *</label>
                          <input required type="text" value={form.org} onChange={e => setForm({...form, org: e.target.value})}
                            className="input-field" placeholder="Mairie de Lyon" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground/70 mb-2">Email professionnel *</label>
                          <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                            className="input-field" placeholder="m.dupont@mairie-lyon.fr" />
                        </div>
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground/70 mb-2">Téléphone</label>
                          <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                            className="input-field" placeholder="+33 4 XX XX XX XX" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground/70 mb-2">Sujet *</label>
                        <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                          className="input-field"
                          style={{ appearance: "none" }}>
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
                        <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground/70 mb-2">Message *</label>
                        <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                          className="input-field resize-none"
                          placeholder="Décrivez votre besoin, le contexte de votre organisation, vos contraintes..." />
                      </div>

                      <p className="text-xs text-muted-foreground/60">
                        En soumettant ce formulaire, vous acceptez notre{" "}
                        <a href="/politique-confidentialite" className="text-primary/70 hover:text-primary transition-colors underline underline-offset-2">
                          politique de confidentialité
                        </a>. Vos données ne sont jamais revendues.
                      </p>

                      <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                        <Send className="w-4 h-4" /> Envoyer ma demande
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
