import { motion } from "framer-motion";
import { AlertOctagon, CheckCircle2, ArrowRight, Phone, Clock, Zap, Radio, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const phases = [
  { num: "01", icon: Radio, title: "Détection", time: "Permanent", timeColor: "hsl(213 94% 65%)", desc: "SOC 24/7 avec corrélation d'événements (SIEM). Alertes en temps réel sur comportements anormaux et IOC." },
  { num: "02", icon: Clock, title: "Qualification", time: "< 30 min", timeColor: "hsl(158 64% 55%)", desc: "Analyse de l'alerte par nos experts CERT. Confirmation de l'incident, évaluation de la criticité, activation de la cellule de crise." },
  { num: "03", icon: Shield, title: "Confinement", time: "< 2h", timeColor: "hsl(234 179 8 / 0.8)", desc: "Isolation des systèmes compromis, coupure de l'accès attaquant, préservation des preuves numériques (forensique)." },
  { num: "04", icon: Zap, title: "Remédiation", time: "Variable", timeColor: "hsl(213 94% 65%)", desc: "Nettoyage des systèmes, reconstruction si nécessaire, patch des vulnérabilités exploitées, durcissement." },
  { num: "05", icon: AlertOctagon, title: "Rétablissement", time: "Priorité vie", timeColor: "hsl(158 64% 55%)", desc: "Remise en service par ordre de criticité (fonctions vitales en premier pour les hôpitaux). Test de bon fonctionnement." },
  { num: "06", icon: CheckCircle2, title: "Retour d'expérience", time: "J+30", timeColor: "hsl(213 94% 65%)", desc: "Rapport complet sur l'incident, chronologie, cause racine, mesures correctives. Déclaration ANSSI/CNIL si obligatoire." },
];

const socFeatures = [
  "Surveillance 24/7/365",
  "SIEM + EDR managé",
  "Threat intelligence en temps réel",
  "Rapport mensuel RSSI",
  "SLA garanti contractuellement",
];

export default function Cert() {
  return (
    <>
      <SEOHead
        title="CERT & Réponse aux Incidents Cyber — Secteur Public 24/7"
        description="CERT dédié secteur public et santé. SOC 24/7, réponse aux incidents en moins de 4h, gestion de crise ransomware, déclaration ANSSI. Intervention immédiate."
        canonical="/services/cert"
      />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(239,68,68,0.1) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="dot-red" />
              <div className="section-tag"
                style={{ borderColor: "rgba(239,68,68,0.28)", background: "rgba(239,68,68,0.07)", color: "rgb(252,165,165)" }}>
                <AlertOctagon className="w-3 h-3" /> CERT &amp; incidents
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
              CERT & réponse aux incidents{" "}
              <span className="text-red-gradient">24h/7j</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-9 leading-relaxed max-w-3xl">
              En cas de cyberattaque, chaque minute compte. Notre CERT dédié au secteur public intervient
              en moins de 4 heures sur site. SOC 24/7, gestion de crise, forensique numérique et déclaration réglementaire.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+33100000000" className="btn-primary"
                style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", boxShadow: "0 4px 20px rgba(239,68,68,0.45), 0 1px 0 rgba(255,255,255,0.2) inset" }}>
                <Phone className="w-4 h-4" /> Urgence cyber 24/7
              </a>
              <Link to="/contact" className="btn-secondary">Nous contacter <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {[
              { val: "24/7", label: "SOC opérationnel", color: "hsl(213 94% 58%)" },
              { val: "< 4h", label: "Intervention sur site", color: "#f87171" },
              { val: "72h", label: "Déclaration ANSSI facilitée", color: "hsl(213 94% 58%)" },
              { val: "100%", label: "Incidents résolus", color: "hsl(158 64% 55%)" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.1 }}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "hsl(224 42% 7% / 0.85)",
                  border: "1px solid rgba(239,68,68,0.15)",
                  backdropFilter: "blur(16px)"
                }}>
                <div className="font-heading font-black text-2xl leading-none mb-2" style={{ color: s.color }}>{s.val}</div>
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
            <div className="section-tag mx-auto mb-4"><Clock className="w-3 h-3" /> Process CERT</div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Notre process de réponse aux incidents
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {phases.map((p, i) => (
              <motion.div key={i} {...fade(i * 0.08)}>
                <div className="relative rounded-2xl p-7 h-full"
                  style={{
                    background: "hsl(224 42% 7% / 0.85)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(16px)"
                  }}>
                  <div className="step-num absolute top-4 right-4">{p.num}</div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
                        <p.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-xs font-mono px-2 py-1 rounded"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", color: "hsl(213 94% 65%)" }}>
                        {p.time}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOC + Emergency */}
      <section className="py-20 px-6 pb-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-6">

            {/* SOC */}
            <motion.div {...fade()}>
              <div className="relative rounded-2xl p-8 h-full overflow-hidden"
                style={{
                  background: "hsl(224 42% 7% / 0.9)",
                  border: "1px solid hsl(213 94% 58% / 0.18)",
                  backdropFilter: "blur(20px)"
                }}>
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(213 94% 65% / 0.4), transparent)" }} />
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "hsl(213 94% 58% / 0.12)", border: "1px solid hsl(213 94% 58% / 0.25)" }}>
                  <Radio className="w-6 h-6" style={{ color: "hsl(213 94% 68%)" }} />
                </div>
                <h3 className="font-heading text-xl font-black text-foreground mb-4">SOC 24/7 en abonnement</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Surveillance continue de vos systèmes sans avoir à recruter une équipe interne.
                  SIEM managé, corrélation d'événements, threat intelligence, tableaux de bord RSSI.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {socFeatures.map((item, i) => (
                    <li key={i} className="check-item">
                      <div className="check-icon">
                        <CheckCircle2 className="w-3 h-3" style={{ color: "hsl(213 94% 65%)" }} />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-secondary w-full justify-center">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Emergency */}
            <motion.div {...fade(0.12)}>
              <div className="relative rounded-2xl p-8 h-full overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(220,38,38,0.06))",
                  border: "1px solid rgba(239,68,68,0.25)",
                  backdropFilter: "blur(20px)"
                }}>
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.5), transparent)" }} />
                <div className="absolute top-6 right-6">
                  <div className="dot-red" />
                </div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)" }}>
                  <Zap className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="font-heading text-xl font-black text-foreground mb-4">Intervention d'urgence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Vous êtes victime d'une cyberattaque en ce moment ? Notre équipe CERT est disponible immédiatement.
                </p>
                <div className="space-y-2 mb-7 text-sm text-red-300/80">
                  {["Isolez les machines du réseau (câbles)", "Ne coupez pas l'alimentation (preuves)", "Ne payez aucune rançon", "Appelez immédiatement"].map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                        style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171" }}>
                        {i + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
                <a href="tel:+33100000000" className="btn-primary w-full justify-center"
                  style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", boxShadow: "0 4px 20px rgba(239,68,68,0.4)" }}>
                  <Phone className="w-4 h-4" /> Urgence : 01 00 00 00 00
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
