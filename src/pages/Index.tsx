import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield, Hospital, Building2, Factory, ArrowRight, CheckCircle2,
  AlertTriangle, Lock, Users, Clock, Award, FileCheck,
  Zap, BookOpen, Phone, Star, ChevronRight, Target, Eye,
  TrendingUp, Search, Settings, BarChart3, HeartHandshake, BadgeCheck
} from "lucide-react";
import SEOHead from "@/components/SEOHead";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const stats = [
  { value: "3 800+", label: "Collectivités attaquées en 2024", icon: AlertTriangle, color: "rgba(239,68,68,0.12)", iconColor: "#f87171", border: "rgba(239,68,68,0.2)" },
  { value: "380M€", label: "Coût moyen d'une attaque hôpital", icon: Hospital, color: "rgba(249,115,22,0.1)", iconColor: "#fb923c", border: "rgba(249,115,22,0.2)" },
  { value: "72h", label: "Délai max de notification NIS2", icon: Clock, color: "rgba(234,179,8,0.1)", iconColor: "#facc15", border: "rgba(234,179,8,0.2)" },
  { value: "100%", label: "Des organismes publics concernés", icon: Shield, color: "hsl(213 94% 58% / 0.12)", iconColor: "hsl(213 94% 70%)", border: "hsl(213 94% 58% / 0.22)" },
];

const trustMetrics = [
  { value: "200+", label: "Missions réalisées", icon: BadgeCheck },
  { value: "50+", label: "Clients secteur public", icon: Users },
  { value: "4h", label: "Délai d'intervention CERT", icon: Zap },
  { value: "15 ans", label: "D'expérience sectorielle", icon: Award },
  { value: "PASSI", label: "Qualifié ANSSI", icon: Shield },
  { value: "NIS2", label: "Expert certifié", icon: FileCheck },
];

const sectors = [
  {
    icon: Building2,
    title: "Collectivités locales",
    desc: "Mairies, régions, départements, intercommunalités. Mise en conformité NIS2, audit ANSSI, plan de continuité d'activité.",
    href: "/cybersecurite-collectivites",
    tags: ["NIS2", "ANSSI", "RGPD"],
    iconBg: "hsl(213 94% 58% / 0.12)",
    iconBorder: "hsl(213 94% 58% / 0.25)",
    iconColor: "hsl(213 94% 70%)",
  },
  {
    icon: Hospital,
    title: "Secteur santé",
    desc: "Hôpitaux, cliniques, EHPAD, GHT, GIP e-santé. Certification HDS, conformité RGPD données de santé, protection SIH.",
    href: "/cybersecurite-sante",
    tags: ["HDS", "NIS2", "RGPD Santé"],
    iconBg: "hsl(158 64% 44% / 0.12)",
    iconBorder: "hsl(158 64% 44% / 0.28)",
    iconColor: "hsl(158 64% 62%)",
  },
  {
    icon: Factory,
    title: "Industrie & OT",
    desc: "Opérateurs d'importance vitale (OIV), opérateurs de services essentiels. Sécurité OT/ICS, IEC 62443, LPM.",
    href: "/cybersecurite-industrie",
    tags: ["OIV", "OT/ICS", "LPM"],
    iconBg: "hsl(270 70% 60% / 0.12)",
    iconBorder: "hsl(270 70% 60% / 0.25)",
    iconColor: "hsl(270 70% 72%)",
  },
];

const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnostic",
    desc: "Audit de maturité cyber complet — infrastructure, processus, humain. Rapport CVSS avec priorisation des vulnérabilités.",
    duration: "Sous 10 jours",
  },
  {
    num: "02",
    icon: Settings,
    title: "Plan d'action",
    desc: "Feuille de route budgétée et priorisée. Compatible marchés publics, FONDS cyber ANSSI et dispositifs régionaux.",
    duration: "Semaine 2",
  },
  {
    num: "03",
    icon: Shield,
    title: "Implémentation",
    desc: "Déploiement des mesures techniques et organisationnelles. Formation des équipes, mise en conformité NIS2/HDS.",
    duration: "M2 → M6",
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Monitoring",
    desc: "Supervision continue, tests d'intrusion annuels, CERT 24/7. Tableaux de bord et rapports dirigeants trimestriels.",
    duration: "En continu",
  },
];

const whyUs = [
  {
    icon: HeartHandshake,
    title: "100% secteur public",
    desc: "Nous travaillons exclusivement pour des collectivités, hôpitaux et organismes publics. Nous connaissons vos contraintes : budget contraint, marchés publics, agents non-techniques.",
  },
  {
    icon: BadgeCheck,
    title: "Qualifié PASSI ANSSI",
    desc: "Seuls les prestataires qualifiés PASSI peuvent réaliser des audits certifiés ANSSI. Notre qualification vous garantit une expertise reconnue au plus haut niveau.",
  },
  {
    icon: Zap,
    title: "CERT 24/7 en 4h",
    desc: "En cas d'incident, notre équipe CERT intervient en moins de 4h, 7j/7. Confinement immédiat, investigation forensique, reprise d'activité guidée.",
  },
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    desc: "Nos clients réduisent leur surface d'attaque de 73% en moyenne dès le premier audit. Nous fournissons des KPIs chiffrés et des tableaux de bord dirigeants.",
  },
];

const services = [
  { icon: Eye, title: "Audit de sécurité PASSI", desc: "Diagnostic complet selon le guide ANSSI. Rapport CVSS, plan d'action priorisé. Livré en 10 jours.", href: "/services/audit" },
  { icon: Target, title: "Test d'intrusion (pentest)", desc: "Simulation d'attaque réelle. Boîte noire, grise ou blanche. Rapport technique + exécutif.", href: "/services/pentest" },
  { icon: FileCheck, title: "Conformité NIS2 & HDS", desc: "Accompagnement complet. Diagnostic, plan d'action, déclaration ANSSI. Délai octobre 2026.", href: "/services/nis2" },
  { icon: Users, title: "Formation des agents", desc: "Phishing simulé, e-learning, présentiel. Certifié QUALIOPI. Résultats mesurables.", href: "/services/formation" },
  { icon: Zap, title: "CERT & réponse aux incidents", desc: "Disponible 24/7. Intervention en moins de 4h. Confinement, investigation, reprise d'activité.", href: "/services/cert" },
  { icon: BookOpen, title: "Appels d'offres cybersécurité", desc: "Aide à la rédaction de marchés publics cyber. Dossiers BOAMP, DC1/DC2, mémoire technique.", href: "/contact" },
];

const attacks = [
  { org: "CH de Corbeil-Essonnes", type: "Ransomware", impact: "Paralysie totale — 3 mois de reprise", year: "2022" },
  { org: "CHU de Rennes", type: "Cyberattaque", impact: "8 To de données exfiltrées", year: "2023" },
  { org: "Ville de Caen", type: "Ransomware", impact: "Services numériques coupés 2 semaines", year: "2023" },
  { org: "Hôpitaux de Paris (AP-HP)", type: "Fuite données", impact: "1,5 million de dossiers volés", year: "2021" },
  { org: "Département Seine-Saint-Denis", type: "Cyberattaque", impact: "Services perturbés pendant 1 mois", year: "2024" },
];

const testimonials = [
  {
    quote: "Grâce à leur audit PASSI, nous avons obtenu la certification HDS et répondu avec succès à notre premier appel d'offres BOAMP cybersécurité.",
    author: "DSI, GIP e-Santé régional",
    role: "Secteur santé · 2025",
    stars: 5,
  },
  {
    quote: "L'équipe a accompagné notre mise en conformité NIS2 de A à Z. En 3 mois, nous avions un plan d'action concret, priorisé et budgété.",
    author: "Responsable informatique",
    role: "Communauté de communes, 45 000 hab.",
    stars: 5,
  },
  {
    quote: "Suite à un ransomware, leur CERT a confiné l'attaque en 4h et restauré nos services critiques en 72h. Professionnalisme exemplaire.",
    author: "DGA chargé du numérique",
    role: "Ville de 120 000 habitants",
    stars: 5,
  },
];

const certifs = ["PASSI ANSSI", "ISO 27001", "HDS", "Expert NIS2", "QUALIOPI"];

const articles = [
  {
    slug: "/actualites/nis2-collectivites-guide-complet",
    title: "NIS2 pour les collectivités : obligations et plan d'action 2026",
    category: "NIS2",
    date: "15 juin 2026",
    readTime: "12 min",
  },
  {
    slug: "/actualites/cyberattaques-hopitaux-france-bilan",
    title: "Bilan 2025-2026 : les cyberattaques contre les hôpitaux français",
    category: "Santé",
    date: "8 juin 2026",
    readTime: "10 min",
  },
  {
    slug: "/actualites/ransomware-collectivites-comment-se-proteger",
    title: "Ransomware : les 12 mesures anti-rançongiciel pour les collectivités",
    category: "Menaces",
    date: "2 mai 2026",
    readTime: "14 min",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background relative">
      <SEOHead
        title="Cybersécurité pour collectivités, hôpitaux et secteur public"
        description="Spécialistes cybersécurité pour collectivités locales et secteur santé. Audit PASSI, pentest, conformité NIS2/HDS, formation agents. Devis gratuit sous 24h."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CybersécuritéPublique.fr",
          "url": "https://cybersecurite-publique.fr",
          "description": "Cybersécurité pour collectivités locales et secteur santé — audit PASSI, pentest, NIS2, HDS",
          "areaServed": "FR",
          "knowsAbout": ["NIS2", "HDS", "Cybersécurité collectivités", "Cybersécurité santé", "ANSSI PASSI"],
        }}
      />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-28 right-16 hidden xl:block animate-float opacity-25">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: "hsl(213 94% 58% / 0.1)", border: "1px solid hsl(213 94% 58% / 0.25)", backdropFilter: "blur(8px)" }}>
            <Shield className="w-10 h-10" style={{ color: "hsl(213 94% 65%)" }} />
          </div>
        </div>
        <div className="absolute bottom-24 left-12 hidden xl:block animate-float-2 opacity-20">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ background: "hsl(158 64% 44% / 0.1)", border: "1px solid hsl(158 64% 44% / 0.25)", backdropFilter: "blur(8px)" }}>
            <Lock className="w-7 h-7" style={{ color: "hsl(158 64% 62%)" }} />
          </div>
        </div>
        <div className="absolute top-60 right-1/4 hidden 2xl:block animate-float opacity-15">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: "hsl(270 70% 60% / 0.1)", border: "1px solid hsl(270 70% 60% / 0.2)" }}>
            <AlertTriangle className="w-5 h-5" style={{ color: "hsl(270 70% 72%)" }} />
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="flex items-center gap-3 mb-7">
                  <div className="dot-live" />
                  <span className="section-tag">
                    <Shield className="w-3 h-3" /> Spécialiste Secteur Public &amp; Santé
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-5xl md:text-6xl xl:text-[4.25rem] font-black leading-[1.05] mb-7 tracking-tight"
              >
                Cyber&shy;sécurité pour{" "}
                <span className="text-gradient">collectivités</span>
                {" "}&amp;{" "}
                <span className="text-gradient-green">hôpitaux</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed mb-9 max-w-xl"
              >
                Les organismes publics sont la cible n°1 des cyberattaques. Audit PASSI qualifié ANSSI, conformité NIS2 &amp; HDS, pentest, CERT 24/7 — nous sécurisons vos systèmes et intervenons en 4h en cas d'incident.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Link to="/contact" className="btn-primary text-base px-7 py-3.5">
                  Audit gratuit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+33100000000" className="btn-secondary text-base px-7 py-3.5">
                  <Phone className="w-4 h-4" /> 01 00 00 00 00
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-2"
              >
                {certifs.map((c) => (
                  <span key={c}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-mono"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "hsl(215 20% 62%)" }}
                  >
                    <CheckCircle2 className="w-3 h-3" style={{ color: "hsl(158 64% 55%)" }} /> {c}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="relative rounded-2xl p-6 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, hsl(224 42% 8% / 0.95), hsl(224 42% 6% / 0.95))",
                    border: `1px solid ${s.border}`,
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)"
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl" style={{ background: s.color, opacity: 0.5 }} />
                  <div className="relative z-10">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${s.color}`, border: `1px solid ${s.border}` }}>
                      <s.icon className="w-4.5 h-4.5" style={{ color: s.iconColor }} />
                    </div>
                    <div className="stat-number text-3xl mb-2">{s.value}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ALERTE NIS2 ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.07), rgba(234,88,12,0.04))", borderTop: "1px solid rgba(239,68,68,0.18)", borderBottom: "1px solid rgba(239,68,68,0.18)" }} />
        <div className="relative container mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="dot-red" />
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <strong className="text-red-300 font-heading">ALERTE NIS2</strong>
            </div>
            <span className="text-red-300/75">Les collectivités et hôpitaux doivent être conformes avant le</span>
            <span className="font-bold text-red-300 font-mono px-2 py-0.5 rounded border"
              style={{ background: "rgba(239,68,68,0.12)", borderColor: "rgba(239,68,68,0.25)" }}>
              17 octobre 2026
            </span>
            <Link to="/services/nis2" className="text-red-300 underline underline-offset-2 hover:text-red-200 transition-colors font-medium">
              Vérifier votre conformité →
            </Link>
          </div>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="divider-glow mb-0" />
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fade()} className="text-center mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60">Nos chiffres clés</p>
          </motion.div>
          <motion.div {...fade(0.1)} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustMetrics.map((m, i) => (
              <motion.div key={m.label} {...fade(i * 0.06)}
                className="text-center rounded-2xl py-6 px-4"
                style={{
                  background: "hsl(224 42% 7% / 0.7)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)"
                }}>
                <m.icon className="w-5 h-5 mx-auto mb-3" style={{ color: "hsl(213 94% 65%)" }} />
                <div className="stat-number text-2xl mb-1">{m.value}</div>
                <div className="text-xs text-muted-foreground leading-tight">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="divider-glow mt-16" />
      </section>

      {/* ── SECTEURS ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fade()} className="text-center mb-16">
            <div className="section-tag mx-auto mb-5">Nos secteurs d'expertise</div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-5 tracking-tight">
              Une expertise <span className="text-gradient">sectorielle</span> unique
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Chaque secteur a ses réglementations, ses menaces et ses contraintes budgétaires. Nous maîtrisons les spécificités de chacun.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {sectors.map((s, i) => (
              <motion.div key={s.title} {...fade(i * 0.12)}>
                <Link to={s.href} className="group block h-full">
                  <div className="card-premium h-full p-8">
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: s.iconBg, border: `1px solid ${s.iconBorder}` }}>
                        <s.icon className="w-7 h-7" style={{ color: s.iconColor }} />
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {s.tags.map(tag => (
                          <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded border"
                            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", color: "hsl(215 20% 60%)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        En savoir plus
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSUS ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, hsl(224 42% 6% / 0.5), transparent)" }} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <div className="section-tag mx-auto mb-5">
              <Settings className="w-3 h-3" /> Notre méthode
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-5 tracking-tight">
              De l'audit à la <span className="text-gradient">protection totale</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Une approche structurée en 4 phases, adaptée aux contraintes du secteur public, pour une sécurité durable et mesurable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-px hidden lg:block"
              style={{ background: "linear-gradient(90deg, transparent, hsl(213 94% 58% / 0.3), hsl(213 94% 58% / 0.3), transparent)" }} />

            {processSteps.map((step, i) => (
              <motion.div key={step.num} {...fade(i * 0.13)}>
                <div className="relative rounded-2xl p-8 h-full"
                  style={{
                    background: "hsl(224 42% 7% / 0.85)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)"
                  }}>
                  {/* Step number background */}
                  <div className="step-num absolute top-4 right-5 select-none">{step.num}</div>

                  <div className="relative z-10">
                    {/* Icon circle */}
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: "hsl(213 94% 58% / 0.12)",
                        border: "1px solid hsl(213 94% 58% / 0.25)",
                        boxShadow: "0 0 20px hsl(213 94% 58% / 0.1)"
                      }}>
                      <step.icon className="w-5.5 h-5.5" style={{ color: "hsl(213 94% 70%)" }} />
                    </div>

                    <h3 className="font-heading font-bold text-foreground text-lg mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.desc}</p>
                    <span className="inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-full"
                      style={{ background: "hsl(213 94% 58% / 0.08)", border: "1px solid hsl(213 94% 58% / 0.18)", color: "hsl(213 94% 65%)" }}>
                      {step.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.35)} className="text-center mt-12">
            <Link to="/contact" className="btn-primary px-8 py-3.5">
              Démarrer mon diagnostic <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── ATTAQUES ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-950/[0.04]" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <div className="section-tag mx-auto mb-5"
              style={{ borderColor: "rgba(239,68,68,0.28)", background: "rgba(239,68,68,0.07)", color: "rgb(252,165,165)" }}>
              <AlertTriangle className="w-3 h-3" /> Pourquoi agir maintenant
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-5 tracking-tight">
              Les organismes publics sont{" "}
              <span className="text-red-gradient">la cible n°1</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ransomwares, vols de données, espionnage — les attaques contre le secteur public ont explosé. Quelques exemples récents.
            </p>
          </motion.div>

          <motion.div {...fade(0.15)} className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(239,68,68,0.14)", background: "hsl(224 42% 7% / 0.85)", backdropFilter: "blur(16px)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(239,68,68,0.06)", borderBottom: "1px solid rgba(239,68,68,0.1)" }}>
                  {["Organisme", "Type d'attaque", "Impact", "Année"].map(h => (
                    <th key={h} className="text-left px-6 py-4 font-heading font-semibold text-xs uppercase tracking-wider"
                      style={{ color: "rgba(252,165,165,0.65)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attacks.map((a, i) => (
                  <motion.tr key={i} {...fade(i * 0.07)}
                    className="transition-colors group"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.035)" }}>
                    <td className="px-6 py-5 font-semibold text-foreground">{a.org}</td>
                    <td className="px-6 py-5">
                      <span className="badge-red">{a.type}</span>
                    </td>
                    <td className="px-6 py-5 text-muted-foreground">{a.impact}</td>
                    <td className="px-6 py-5 font-mono text-muted-foreground text-xs">{a.year}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div {...fade(0.3)} className="text-center mt-8">
            <Link to="/actualites/cyberattaques-hopitaux-france-bilan"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              Voir le bilan complet des cyberattaques <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── POURQUOI NOUS ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, hsl(213 94% 58% / 0.025), transparent)" }} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <div className="section-tag mx-auto mb-5">
              <BadgeCheck className="w-3 h-3" /> Pourquoi nous choisir
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-5 tracking-tight">
              L'expertise <span className="text-gradient">qui fait la différence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Pas un généraliste de la cybersécurité — un spécialiste du secteur public qui connaît vos enjeux, vos contraintes et vos interlocuteurs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyUs.map((item, i) => (
              <motion.div key={item.title} {...fade(i * 0.1)}>
                <div className="glass glass-hover rounded-2xl p-8 h-full flex gap-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: "linear-gradient(135deg, hsl(213 94% 58% / 0.15), hsl(213 94% 58% / 0.08))",
                      border: "1px solid hsl(213 94% 58% / 0.25)"
                    }}>
                    <item.icon className="w-6 h-6" style={{ color: "hsl(213 94% 68%)" }} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6">
        <div className="divider-glow mb-24" />
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fade()} className="text-center mb-16">
            <div className="section-tag mx-auto mb-5">Nos prestations</div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-5 tracking-tight">
              Un accompagnement <span className="text-gradient">complet</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              De l'audit initial à la réponse aux incidents, nous couvrons l'intégralité de vos besoins cybersécurité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={s.title} {...fade(i * 0.08)}>
                <Link to={s.href} className="group block h-full">
                  <div className="card-premium h-full p-6">
                    <div className="relative z-10">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: "linear-gradient(135deg, hsl(213 94% 58% / 0.14), hsl(213 94% 58% / 0.07))",
                          border: "1px solid hsl(213 94% 58% / 0.22)"
                        }}>
                        <s.icon className="w-5 h-5" style={{ color: "hsl(213 94% 68%)" }} />
                      </div>
                      <h3 className="font-heading font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors duration-200">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                      <div className="flex items-center gap-1.5 text-xs font-medium mt-auto"
                        style={{ color: "hsl(213 94% 65%)" }}>
                        En savoir plus <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.3)} className="text-center mt-12">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Demander un devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, hsl(213 94% 58% / 0.04) 0%, transparent 70%)" }} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <div className="section-tag mx-auto mb-5"><Award className="w-3 h-3" /> Références clients</div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
              Ils nous font <span className="text-gradient">confiance</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fade(i * 0.12)}>
                <div className="relative rounded-2xl p-8 h-full flex flex-col"
                  style={{
                    background: "linear-gradient(145deg, hsl(224 42% 8% / 0.9), hsl(224 42% 6% / 0.95))",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 4px 28px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"
                  }}>
                  <div className="absolute top-0 left-8 right-8 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, hsl(213 94% 60% / 0.45), transparent)" }} />

                  <div className="flex gap-1 mb-5">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed mb-7 flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="font-heading font-bold text-foreground text-sm">{t.author}</div>
                    <div className="text-xs mt-1 font-mono" style={{ color: "hsl(213 94% 60%)" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fade()} className="flex items-end justify-between mb-14">
            <div>
              <div className="section-tag mb-5">Ressources experts</div>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground tracking-tight">
                Guides <span className="text-gradient">secteur public</span>
              </h2>
            </div>
            <Link to="/actualites"
              className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors group btn-ghost">
              Tous les articles
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <motion.div key={i} {...fade(i * 0.1)}>
                <Link to={a.slug} className="group block h-full">
                  <div className="card-premium h-full p-7">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="badge-green">{a.category}</span>
                        <span className="text-xs text-muted-foreground font-mono">{a.readTime}</span>
                      </div>
                      <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-4 leading-snug text-base">
                        {a.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{a.date}</span>
                        <div className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: "hsl(213 94% 65%)" }}>
                          Lire <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6 pb-32">
        <div className="divider-glow mb-24" />
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fade()}>
            <div className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(214 100% 10%), hsl(224 50% 7%), hsl(213 80% 10%))",
                border: "1px solid hsl(213 94% 58% / 0.22)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px hsl(213 94% 58% / 0.06), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}>

              {/* Orbs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full blur-[90px] pointer-events-none"
                style={{ background: "hsl(213 94% 58% / 0.1)" }} />
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[70px] pointer-events-none"
                style={{ background: "hsl(158 64% 44% / 0.06)" }} />

              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, hsl(213 94% 65% / 0.55), transparent)" }} />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="dot-live" />
                  <div className="section-tag"
                    style={{ borderColor: "hsl(213 94% 58% / 0.3)", background: "hsl(213 94% 58% / 0.1)", color: "hsl(213 94% 78%)" }}>
                    <Phone className="w-3 h-3" /> Contact
                  </div>
                </div>

                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                  Parlons de votre <span className="text-gradient">sécurité</span>
                </h2>
                <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
                  style={{ color: "hsl(213 50% 72%)" }}>
                  Audit gratuit sous 48h. Nos experts connaissent les contraintes du secteur public : budget, marchés publics, ANSSI, NIS2. Premier échange sans engagement.
                </p>

                {/* Checklist */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
                  {["Réponse sous 24h", "Devis gratuit", "Sans engagement", "Disponible 24/7"].map(item => (
                    <div key={item} className="check-item" style={{ color: "hsl(213 30% 70%)" }}>
                      <div className="check-icon">
                        <CheckCircle2 className="w-3 h-3" style={{ color: "hsl(158 64% 55%)" }} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact" className="btn-primary text-base px-9 py-4">
                    Audit gratuit <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="tel:+33100000000" className="btn-secondary text-base px-9 py-4"
                    style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}>
                    <Phone className="w-5 h-5" /> 01 00 00 00 00
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
