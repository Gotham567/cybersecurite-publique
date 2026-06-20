import { motion } from "framer-motion";
import { Shield, Heart, AlertTriangle, CheckCircle2, ArrowRight, Lock, FileText, Phone, Database } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const risks = [
  { icon: AlertTriangle, title: "Ransomware sur SIH", desc: "Un ransomware sur un Système d'Information Hospitalier peut bloquer les urgences, blocs opératoires et imagerie médicale, mettant des vies en danger." },
  { icon: Database, title: "Vol de données de santé", desc: "Les données de santé se revendent 350€/dossier sur le darkweb — 50x plus qu'une carte bancaire. Les hôpitaux français ont subi 30+ violations en 2023." },
  { icon: Lock, title: "Équipements biomédicaux non sécurisés", desc: "Scanners, IRM, pompes à perfusion connectées : des milliers d'appareils médicaux tournent sous Windows XP sans correctifs de sécurité." },
  { icon: FileText, title: "Non-conformité HDS/RGPD", desc: "L'hébergement de données de santé exige la certification HDS. Les manquements RGPD peuvent coûter jusqu'à 20M€ ou 4% du CA annuel." },
];

const hospitals = [
  { name: "CH Corbeil-Essonnes", date: "Août 2022", detail: "Ransomware RAGNAR LOCKER, 1M€ exigé, dossiers patients publiés sur darkweb, transferts de patients, 3 mois de récupération" },
  { name: "CHU Rennes", date: "Juin 2023", detail: "Attaque sophistiquée, 8 To de données exfiltrés, 2 500 agents impactés, coût estimé 3M€" },
  { name: "AP-HP Paris", date: "2022–2024", detail: "3 incidents majeurs consécutifs, 1,4M de patients concernés, enquête CNIL ouverte" },
  { name: "Centre Hospitalier Arles", date: "Mars 2023", detail: "SI paralysé 6 semaines, retour au papier total, coût de remédiation supérieur à 500k€" },
];

const services = [
  { title: "Audit cybersécurité SIH", desc: "Évaluation complète de votre Système d'Information Hospitalier selon le référentiel ANSSI HOP'EN et les recommandations Cyberveille Santé.", href: "/services/audit" },
  { title: "Certification HDS", desc: "Accompagnement de A à Z pour l'obtention et le maintien de la certification Hébergeur de Données de Santé. Audit préparatoire inclus.", href: "/services/audit" },
  { title: "Sécurité dispositifs médicaux", desc: "Inventaire et sécurisation des équipements biomédicaux connectés. Segmentation réseau, mises à jour, monitoring.", href: "/services/pentest" },
  { title: "Conformité NIS2 santé", desc: "Les CHU, CHR et GHT sont des entités essentielles NIS2. Plan de conformité clé-en-main avec déclaration ANSSI.", href: "/services/nis2" },
  { title: "Formation équipes médicales", desc: "Sensibilisation adaptée aux soignants et personnels administratifs. Formats courts (15 min), disponibles 24/7.", href: "/services/formation" },
  { title: "Réponse aux incidents", desc: "Cellule de crise 24/7 dédiée santé. Intervention en moins de 4h sur site. Rétablissement prioritaire des fonctions vitales.", href: "/services/cert" },
];

const heroStats = [
  { val: "30+", label: "hôpitaux français victimes en 2023" },
  { val: "350€", label: "prix d'un dossier médical volé" },
  { val: "4h", label: "délai d'intervention CERT santé" },
  { val: "100%", label: "CHU concernés par NIS2" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cybersécurité secteur santé — Hôpitaux et établissements de soins",
  "provider": { "@type": "Organization", "name": "CybersécuritéPublique.fr" },
  "description": "Experts cybersécurité pour hôpitaux, CHU, EHPAD et cliniques. Certification HDS, conformité NIS2, audit SIH, sécurité biomédicale.",
};

export default function Sante() {
  return (
    <>
      <SEOHead
        title="Cybersécurité Hôpitaux & Santé — HDS, NIS2, Audit SIH"
        description="Expert cybersécurité pour hôpitaux, CHU, GHT, EHPAD. Certification HDS, conformité NIS2, audit de sécurité SIH, protection données de santé. Intervention 24/7."
        canonical="/cybersecurite-sante"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 30% 20%, hsl(158 64% 44% / 0.1) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="dot-live" />
              <div className="section-tag"
                style={{ borderColor: "hsl(158 64% 44% / 0.28)", background: "hsl(158 64% 44% / 0.08)", color: "hsl(158 64% 65%)" }}>
                <Heart className="w-3 h-3" /> Secteur santé
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
              Cybersécurité pour les{" "}
              <span className="text-gradient-green">hôpitaux</span>{" "}et établissements de santé
            </h1>
            <p className="text-xl text-muted-foreground mb-9 leading-relaxed max-w-3xl">
              Une cyberattaque sur un hôpital, c'est des vies en danger. Nos experts certifiés HDS
              et qualifiés PASSI protègent votre SIH, vos données patients et vos équipements biomédicaux.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Audit SIH gratuit <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+33100000000" className="btn-secondary">
                <Phone className="w-4 h-4" /> Urgence cyber 24/7
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {heroStats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.1 }}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "hsl(224 42% 7% / 0.85)",
                  border: "1px solid hsl(158 64% 44% / 0.14)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)"
                }}>
                <div className="font-heading font-black text-2xl leading-none mb-2"
                  style={{ background: "linear-gradient(135deg, hsl(158 64% 62%), hsl(142 60% 68%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.val}
                </div>
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
              <AlertTriangle className="w-3 h-3" /> Menaces spécifiques
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Pourquoi les hôpitaux sont des cibles prioritaires
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La pression d'urgence, les systèmes vieillissants et la sensibilité des données font du secteur santé la 2e cible mondiale des cybercriminels.
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

      {/* Hospital incidents */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Shield className="w-3 h-3" /> Cas réels</div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Hôpitaux français victimes de cyberattaques
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {hospitals.map((h, i) => (
              <motion.div key={i} {...fade(i * 0.1)}>
                <div className="rounded-2xl p-6 h-full"
                  style={{
                    background: "hsl(224 42% 7% / 0.85)",
                    border: "1px solid rgba(239,68,68,0.15)",
                    borderLeft: "3px solid rgba(239,68,68,0.4)",
                    backdropFilter: "blur(16px)"
                  }}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-foreground">{h.name}</h3>
                    <span className="text-xs font-mono text-muted-foreground px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      {h.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="divider-glow mb-20" />
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"
              style={{ borderColor: "hsl(158 64% 44% / 0.25)", background: "hsl(158 64% 44% / 0.08)", color: "hsl(158 64% 62%)" }}>
              <CheckCircle2 className="w-3 h-3" /> Services santé
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Notre offre cybersécurité pour la santé
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={i} {...fade(i * 0.08)}>
                <Link to={s.href} className="group block h-full">
                  <div className="card-premium h-full p-6">
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                        style={{ background: "hsl(158 64% 44% / 0.12)", border: "1px solid hsl(158 64% 44% / 0.25)" }}>
                        <Heart className="w-5 h-5" style={{ color: "hsl(158 64% 60%)" }} />
                      </div>
                      <h3 className="font-heading font-bold text-foreground mb-2 transition-colors" style={{ color: "inherit" }}
                        onMouseOver={e => (e.currentTarget.style.color = "hsl(158 64% 60%)")}
                        onMouseOut={e => (e.currentTarget.style.color = "inherit")}>{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                      <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "hsl(158 64% 60%)" }}>
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
                background: "linear-gradient(135deg, hsl(158 50% 8%), hsl(224 50% 7%), hsl(158 40% 8%))",
                border: "1px solid hsl(158 64% 44% / 0.22)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)"
              }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, hsl(158 64% 55% / 0.5), transparent)" }} />
              <div className="relative z-10">
                <div className="section-tag mx-auto mb-6"
                  style={{ borderColor: "hsl(158 64% 44% / 0.3)", background: "hsl(158 64% 44% / 0.1)", color: "hsl(158 64% 68%)" }}>
                  <Heart className="w-3 h-3" /> Santé &amp; urgences
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  Protégez vos patients et votre SIH dès aujourd'hui
                </h2>
                <p className="max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: "hsl(158 30% 70%)" }}>
                  Audit de sécurité complet de votre Système d'Information Hospitalier en 5 jours.
                  Rapport de conformité HDS et plan de remédiation prioritaire inclus.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-primary text-base">
                    Audit SIH gratuit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+33100000000" className="btn-secondary text-base"
                    style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}>
                    <Phone className="w-4 h-4" /> Urgence cyber 24/7
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
