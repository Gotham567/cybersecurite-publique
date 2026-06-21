import { motion } from "framer-motion";
import { Shield, FileText, CheckCircle2, ArrowRight, Phone, AlertTriangle, Calendar, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const obligations = [
  "Gouvernance de la sécurité des SI",
  "Gestion des risques cyber",
  "Sécurité de la chaîne d'approvisionnement",
  "Sécurité des réseaux et des systèmes",
  "Gestion des incidents et déclaration en 72h",
  "Continuité des activités (PCA/PRA)",
  "Cryptographie et chiffrement",
  "Contrôle des accès et authentification forte",
  "Formation et sensibilisation du personnel",
  "Politique de divulgation des vulnérabilités",
];

const steps = [
  { num: "01", icon: Search, title: "Diagnostic NIS2", desc: "Évaluation de votre niveau de maturité actuel face aux 10 domaines NIS2. Identification des écarts critiques.", time: "48h" },
  { num: "02", icon: FileText, title: "Plan de conformité", desc: "Feuille de route priorisée avec budget estimé. Décision des mesures à implémenter par ordre de criticité.", time: "Semaine 2" },
  { num: "03", icon: Settings, title: "Implémentation", desc: "Déploiement des mesures techniques et organisationnelles. Documentation PSSI, procédures, contrats fournisseurs.", time: "M2–M5" },
  { num: "04", icon: Shield, title: "Déclaration ANSSI", desc: "Accompagnement pour la déclaration sur le portail MonEspaceNIS2. Suivi de la conformité continue.", time: "M6" },
];

import { Search } from "lucide-react";

const sanctions = [
  { entity: "Entités essentielles", examples: "CHU, grandes collectivités", amount: "10 M€", pct: "ou 2% du budget", color: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.25)", textColor: "#f87171" },
  { entity: "Entités importantes", examples: "Hôpitaux locaux, intercommunalités", amount: "7 M€", pct: "ou 1,4% du budget", color: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.22)", textColor: "#fb923c" },
  { entity: "Déclaration d'incident", examples: "Tous les organismes concernés", amount: "72h max", pct: "délai de notification", color: "rgba(234,179,8,0.08)", border: "rgba(234,179,8,0.2)", textColor: "#fbbf24" },
];

export default function Nis2() {
  return (
    <>
      <SEOHead
        title="Conformité NIS2 Secteur Public — Collectivités et Hôpitaux"
        description="Accompagnement conformité NIS2 pour collectivités et établissements de santé. Diagnostic, plan d'action, déclaration ANSSI. Expert NIS2 certifié. Délai octobre 2026."
        canonical="/services/nis2"
      />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(249,115,22,0.08) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-6 relative z-10">

          {/* Alert banner */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-3 rounded-xl px-5 py-3 mb-8"
            style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.25)" }}>
            <div className="dot-red" />
            <AlertTriangle className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300 font-medium">Délai de conformité : 17 octobre 2026 — moins de 4 mois</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="section-tag mb-6"><FileText className="w-3 h-3" /> Conformité NIS2</div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
              Mise en conformité{" "}
              <span className="text-gradient">directive NIS2</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-9 leading-relaxed max-w-3xl">
              La directive NIS2 s'applique à toutes les collectivités importantes et aux établissements de santé.
              Nos experts vous accompagnent de l'évaluation initiale jusqu'à la déclaration ANSSI, dans les délais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Diagnostic NIS2 gratuit <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Obligations + Sanctions */}
      <section className="py-20 px-6">
        <div className="divider-glow mb-20" />
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Obligations */}
            <motion.div {...fade()}>
              <div className="section-tag mb-6"><Calendar className="w-3 h-3" /> Obligations</div>
              <h2 className="font-heading text-3xl font-black text-foreground mb-7 tracking-tight">
                Les 10 domaines de conformité NIS2
              </h2>
              <ul className="space-y-3">
                {obligations.map((o, i) => (
                  <motion.li key={i} {...fade(i * 0.04)} className="check-item">
                    <div className="check-icon">
                      <CheckCircle2 className="w-3 h-3" style={{ color: "hsl(213 94% 65%)" }} />
                    </div>
                    <span className="text-sm text-foreground/85">{o}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Sanctions */}
            <motion.div {...fade(0.15)} className="space-y-4">
              <div className="section-tag mb-6"
                style={{ borderColor: "rgba(239,68,68,0.28)", background: "rgba(239,68,68,0.07)", color: "rgb(252,165,165)" }}>
                <AlertTriangle className="w-3 h-3" /> Sanctions
              </div>
              <h2 className="font-heading text-3xl font-black text-foreground mb-7 tracking-tight">
                Risques en cas de non-conformité
              </h2>
              {sanctions.map((s, i) => (
                <div key={i} className="rounded-2xl p-6"
                  style={{ background: s.color, border: `1px solid ${s.border}` }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-heading font-bold text-foreground text-sm">{s.entity}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{s.examples}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-heading font-black text-2xl leading-none" style={{ color: s.textColor }}>{s.amount}</div>
                      <div className="text-xs mt-1" style={{ color: s.textColor, opacity: 0.7 }}>{s.pct}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="divider-glow mb-20" />
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Shield className="w-3 h-3" /> Méthode</div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Notre accompagnement NIS2 en 4 phases
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
                    backdropFilter: "blur(16px)"
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

      {/* CTA */}
      <section className="py-16 pb-28 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fade()}>
            <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(249,115,22,0.08), hsl(224 50% 7%), rgba(239,68,68,0.05))",
                border: "1px solid rgba(249,115,22,0.2)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)"
              }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)" }} />
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="dot-red" />
                  <span className="text-xs font-mono uppercase tracking-widest text-orange-400/70">Délai : 17 octobre 2026</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  Êtes-vous prêt pour octobre 2026 ?
                </h2>
                <p className="max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: "hsl(30 50% 72%)" }}>
                  Diagnostic NIS2 gratuit en 48h. Obtenez votre score de conformité et les 3 actions prioritaires à mener.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-primary text-base px-8 py-4">Diagnostic gratuit <ArrowRight className="w-4 h-4" /></Link>
                  <a href="tel:+33100000000" className="btn-secondary text-base px-8 py-4"
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
