import { motion } from "framer-motion";
import { Shield, Search, CheckCircle2, ArrowRight, Phone, FileText, Clock, Award, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const steps = [
  { num: "01", icon: Search, title: "Cadrage & collecte", desc: "Entretiens avec les équipes, inventaire du SI, définition du périmètre d'audit. Durée : 1 à 2 jours.", time: "J1–J2" },
  { num: "02", icon: FileText, title: "Analyse documentaire", desc: "Examen des politiques de sécurité, PSSI, contrats de prestataires, plans réseau. Identification des écarts.", time: "J3–J4" },
  { num: "03", icon: Shield, title: "Tests techniques", desc: "Scans de vulnérabilités, analyse des configurations, tests d'authentification, revue des droits d'accès.", time: "J5–J7" },
  { num: "04", icon: BarChart3, title: "Rapport & plan d'action", desc: "Rapport exécutif + technique, scoring CVSS, matrice de risques, plan de remédiation priorisé par criticité.", time: "J8–J10" },
];

const deliverables = [
  "Rapport exécutif (présentation CODIR)",
  "Rapport technique détaillé (équipes IT)",
  "Cartographie des vulnérabilités",
  "Matrice de risques (probabilité × impact)",
  "Plan de remédiation avec priorités",
  "Roadmap sécurité à 12 mois",
  "Attestation d'audit (appels d'offres)",
  "Suivi de la remédiation inclus",
];

const heroStats = [
  { val: "PASSI", label: "Qualifié ANSSI" },
  { val: "10j", label: "Délai de livraison" },
  { val: "200+", label: "Audits réalisés" },
  { val: "100%", label: "Clients satisfaits" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Audit de sécurité informatique",
  "provider": { "@type": "Organization", "name": "CybersécuritéPublique.fr" },
  "description": "Audit de sécurité SI pour collectivités et établissements de santé. Qualifié PASSI ANSSI. Rapport en 10 jours.",
};

export default function Audit() {
  return (
    <>
      <SEOHead
        title="Audit de Sécurité Informatique — Qualifié PASSI ANSSI"
        description="Audit de sécurité SI complet pour collectivités et secteur santé. Qualifié PASSI ANSSI, conformité NIS2. Rapport détaillé + plan d'action en 10 jours. Devis gratuit."
        canonical="/services/audit"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 30% 20%, hsl(213 94% 58% / 0.12) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="dot-live" />
              <div className="section-tag"><Search className="w-3 h-3" /> Audit & diagnostic</div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
              Audit de sécurité informatique{" "}
              <span className="text-gradient">qualifié PASSI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-9 leading-relaxed max-w-3xl">
              Identifiez vos vulnérabilités avant que les attaquants ne les exploitent. Nos auditeurs qualifiés PASSI ANSSI
              réalisent des audits complets avec rapport de conformité NIS2 en 10 jours ouvrés.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Devis gratuit en 24h <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </motion.div>

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

      {/* Process */}
      <section className="py-20 px-6">
        <div className="divider-glow mb-20" />
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Clock className="w-3 h-3" /> Notre méthode</div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Notre processus d'audit en 4 étapes
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            <div className="absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-px hidden lg:block"
              style={{ background: "linear-gradient(90deg, transparent, hsl(213 94% 58% / 0.25), hsl(213 94% 58% / 0.25), transparent)" }} />
            {steps.map((s, i) => (
              <motion.div key={i} {...fade(i * 0.1)}>
                <div className="relative rounded-2xl p-7 h-full"
                  style={{
                    background: "hsl(224 42% 7% / 0.85)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)"
                  }}>
                  <div className="step-num absolute top-4 right-4">{s.num}</div>
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: "hsl(213 94% 58% / 0.12)", border: "1px solid hsl(213 94% 58% / 0.25)" }}>
                      <s.icon className="w-5 h-5" style={{ color: "hsl(213 94% 68%)" }} />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full"
                      style={{ background: "hsl(213 94% 58% / 0.08)", border: "1px solid hsl(213 94% 58% / 0.18)", color: "hsl(213 94% 65%)" }}>
                      {s.time}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="section-tag mb-6"><FileText className="w-3 h-3" /> Livrables</div>
              <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-7 tracking-tight">
                Ce que vous recevez à la fin de l'audit
              </h2>
              <ul className="space-y-3">
                {deliverables.map((d, i) => (
                  <li key={i} className="check-item">
                    <div className="check-icon">
                      <CheckCircle2 className="w-3 h-3" style={{ color: "hsl(158 64% 55%)" }} />
                    </div>
                    <span className="text-sm text-foreground/85">{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="relative rounded-2xl p-8 overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, hsl(213 94% 8% / 0.9), hsl(224 42% 7% / 0.95))",
                  border: "1px solid hsl(213 94% 58% / 0.2)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)"
                }}>
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(213 94% 65% / 0.45), transparent)" }} />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "hsl(213 94% 58% / 0.12)", border: "1px solid hsl(213 94% 58% / 0.25)" }}>
                  <Award className="w-7 h-7" style={{ color: "hsl(213 94% 68%)" }} />
                </div>
                <h3 className="font-heading text-xl font-black text-foreground mb-4">Qualification PASSI ANSSI</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Le label PASSI (Prestataire d'Audit de la Sécurité des Systèmes d'Information) est la qualification la plus exigeante
                  délivrée par l'ANSSI pour les activités d'audit de sécurité. Elle garantit le sérieux et la compétence de nos auditeurs.
                </p>
                <p className="text-sm text-muted-foreground">
                  Nos rapports sont acceptés par les autorités de contrôle (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.
                </p>
                <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Démarrer mon audit <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 pb-28 px-6">
        <div className="divider-glow mb-16" />
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fade()}>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Prêt à connaître votre niveau de sécurité réel ?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Devis personnalisé gratuit en moins de 24h. Nos auditeurs PASSI sont disponibles immédiatement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">Devis gratuit <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary text-base px-8 py-4"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
