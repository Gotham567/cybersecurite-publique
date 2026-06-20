import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle2, ArrowRight, Building2, Users, FileText, Lock, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const risks = [
  { icon: AlertTriangle, title: "Ransomware", desc: "Les collectivités sont la 1ère cible des rançongiciels en France. Une attaque paralyse en moyenne 3 semaines les services municipaux." },
  { icon: Lock, title: "Vol de données citoyens", desc: "Fichiers d'état civil, données fiscales, dossiers sociaux : des millions de données sensibles exposées à chaque fuite." },
  { icon: Users, title: "Phishing ciblé", desc: "Les agents publics reçoivent 4x plus d'emails malveillants que la moyenne. Formations obligatoires NIS2." },
  { icon: FileText, title: "Non-conformité NIS2", desc: "Depuis octobre 2024, les entités publiques importantes risquent jusqu'à 10M€ d'amende ou 2% du budget." },
];

const services = [
  { title: "Audit de sécurité SI municipal", desc: "Cartographie complète de votre SI, identification des vulnérabilités critiques, rapport de conformité ANSSI.", href: "/services/audit" },
  { title: "Mise en conformité NIS2", desc: "Plan d'action personnalisé, mise en place des 18 mesures obligatoires, accompagnement jusqu'à la déclaration ANSSI.", href: "/services/nis2" },
  { title: "Pentest infrastructure", desc: "Tests d'intrusion sur vos réseaux, portail citoyens, messagerie et équipements IoT municipaux.", href: "/services/pentest" },
  { title: "Formation des agents", desc: "Sensibilisation sur-mesure pour élus, DSI et agents. Exercices de phishing, modules e-learning RGPD.", href: "/services/formation" },
  { title: "Plan de continuité (PCA/PRA)", desc: "Définition des actifs critiques, procédures de sauvegarde, tests de reprise. Opérationnel en 72h.", href: "/services/cert" },
  { title: "CERT dédié secteur public", desc: "Surveillance 24/7, détection d'incidents, réponse immédiate. SLA garanti contractuellement.", href: "/services/cert" },
];

const attacks = [
  { entity: "Ville de Caen", date: "2022", impact: "Réseau informatique paralysé, 700 postes bloqués, 3 semaines de rétablissement" },
  { entity: "Département Seine-Saint-Denis", date: "2023", impact: "Données de 400 000 habitants exposées, CNIL saisie, amende en cours" },
  { entity: "Mairie de Sartrouville", date: "2023", impact: "Rançon de 1,2M€ exigée, services en ligne coupés 6 semaines" },
  { entity: "CA Grand Châtellerault", date: "2024", impact: "Ransomware LockBit, sauvegarde corrompue, reconstruction totale du SI" },
];

const heroStats = [
  { val: "3 800+", label: "collectivités attaquées en 2023" },
  { val: "72h", label: "délai de déclaration NIS2" },
  { val: "10M€", label: "amende max non-conformité" },
  { val: "3 sem.", label: "durée moy. paralysie après ransomware" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cybersécurité pour collectivités locales",
  "provider": { "@type": "Organization", "name": "CybersécuritéPublique.fr" },
  "description": "Expert cybersécurité pour mairies, communautés de communes, départements et régions. Conformité NIS2, audit SI, PASSI.",
  "areaServed": "France",
};

export default function Collectivites() {
  return (
    <>
      <SEOHead
        title="Cybersécurité Collectivités Locales — Mairies, Départements, Régions"
        description="Spécialistes cybersécurité pour collectivités territoriales. Audit SI, conformité NIS2, formation agents. Qualifiés PASSI ANSSI. Protégez vos services publics et données citoyens."
        canonical="/cybersecurite-collectivites"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 30% 20%, hsl(213 94% 58% / 0.1) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="dot-live" />
              <div className="section-tag">
                <Building2 className="w-3 h-3" /> Collectivités territoriales
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
              Cybersécurité pour les{" "}
              <span className="text-gradient">collectivités locales</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-9 leading-relaxed max-w-3xl">
              Mairies, intercommunalités, départements, régions : votre SI municipal est une cible prioritaire des cybercriminels.
              Nos experts qualifiés PASSI vous accompagnent de l'audit jusqu'à la conformité NIS2 complète.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Audit gratuit de votre SI <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+33100000000" className="btn-secondary">
                <Phone className="w-4 h-4" /> 01 00 00 00 00
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {heroStats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.1 }}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "hsl(224 42% 7% / 0.85)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)"
                }}>
                <div className="stat-number text-2xl mb-2">{s.val}</div>
                <div className="text-xs text-muted-foreground leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-20 px-6">
        <div className="divider-glow mb-20" />
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"
              style={{ borderColor: "rgba(239,68,68,0.28)", background: "rgba(239,68,68,0.07)", color: "rgb(252,165,165)" }}>
              <AlertTriangle className="w-3 h-3" /> Menaces
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Les cybermenaces qui ciblent les collectivités
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Le secteur public est la 1ère cible des cyberattaques en France depuis 2021.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {risks.map((r, i) => (
              <motion.div key={i} {...fade(i * 0.1)}>
                <div className="glass glass-hover rounded-2xl p-7 flex gap-5 h-full">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.22)" }}>
                    <r.icon className="w-5.5 h-5.5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent attacks */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Clock className="w-3 h-3" /> Incidents récents</div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Collectivités françaises touchées
            </h2>
          </motion.div>
          <motion.div {...fade(0.1)} className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(239,68,68,0.14)", background: "hsl(224 42% 7% / 0.85)", backdropFilter: "blur(16px)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(239,68,68,0.06)", borderBottom: "1px solid rgba(239,68,68,0.1)" }}>
                  {["Entité", "Année", "Impact"].map(h => (
                    <th key={h} className="text-left px-6 py-4 font-heading font-semibold text-xs uppercase tracking-wider"
                      style={{ color: "rgba(252,165,165,0.65)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attacks.map((a, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.035)" }}>
                    <td className="px-6 py-4 font-semibold text-foreground">{a.entity}</td>
                    <td className="px-6 py-4 font-mono text-muted-foreground text-xs">{a.date}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{a.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="divider-glow mb-20" />
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Shield className="w-3 h-3" /> Nos services</div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Solutions cybersécurité dédiées aux collectivités
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={i} {...fade(i * 0.08)}>
                <Link to={s.href} className="group block h-full">
                  <div className="card-premium h-full p-6">
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                        style={{ background: "hsl(213 94% 58% / 0.12)", border: "1px solid hsl(213 94% 58% / 0.25)" }}>
                        <CheckCircle2 className="w-5 h-5" style={{ color: "hsl(213 94% 68%)" }} />
                      </div>
                      <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                      <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "hsl(213 94% 65%)" }}>
                        En savoir plus <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 pb-28">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fade()}>
            <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(214 100% 10%), hsl(224 50% 7%), hsl(213 80% 10%))",
                border: "1px solid hsl(213 94% 58% / 0.22)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)"
              }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, hsl(213 94% 65% / 0.5), transparent)" }} />
              <div className="relative z-10">
                <div className="section-tag mx-auto mb-6"
                  style={{ borderColor: "hsl(213 94% 58% / 0.3)", background: "hsl(213 94% 58% / 0.1)", color: "hsl(213 94% 78%)" }}>
                  <Phone className="w-3 h-3" /> Contact
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  Votre collectivité est-elle conforme NIS2 ?
                </h2>
                <p className="max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: "hsl(213 50% 72%)" }}>
                  Obtenez en 48h un diagnostic gratuit de votre niveau de maturité cybersécurité et un plan d'action prioritaire.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-primary text-base">
                    Diagnostic gratuit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+33100000000" className="btn-secondary text-base"
                    style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}>
                    <Phone className="w-4 h-4" /> 01 00 00 00 00
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
