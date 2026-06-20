import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield, Hospital, Building2, Factory, ArrowRight, CheckCircle2,
  AlertTriangle, Lock, Users, Clock, Award, FileCheck,
  Zap, BookOpen, Phone, Star, ChevronRight, Target, Eye
} from "lucide-react";
import SEOHead from "@/components/SEOHead";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const stats = [
  { value: "3 800+", label: "Collectivités attaquées en 2024", icon: AlertTriangle, color: "from-red-500/20 to-red-600/10", iconColor: "text-red-400", border: "border-red-500/20" },
  { value: "380M€", label: "Coût moyen d'une attaque hôpital", icon: Hospital, color: "from-orange-500/20 to-orange-600/10", iconColor: "text-orange-400", border: "border-orange-500/20" },
  { value: "72h", label: "Délai max de notification NIS2", icon: Clock, color: "from-yellow-500/20 to-yellow-600/10", iconColor: "text-yellow-400", border: "border-yellow-500/20" },
  { value: "100%", label: "Des organismes publics concernés", icon: Shield, color: "from-primary/20 to-primary/10", iconColor: "text-primary", border: "border-primary/20" },
];

const sectors = [
  {
    icon: Building2,
    title: "Collectivités locales",
    desc: "Mairies, régions, départements, intercommunalités. Mise en conformité NIS2, audit ANSSI, plan de continuité d'activité.",
    href: "/cybersecurite-collectivites",
    tags: ["NIS2", "ANSSI", "RGPD"],
    accent: "blue",
    gradient: "from-blue-500/10 via-blue-600/5 to-transparent",
    iconBg: "bg-blue-500/15 border-blue-500/25",
    iconColor: "text-blue-400",
  },
  {
    icon: Hospital,
    title: "Secteur santé",
    desc: "Hôpitaux, cliniques, EHPAD, GHT, GIP e-santé. Certification HDS, conformité RGPD données de santé, protection SIH.",
    href: "/cybersecurite-sante",
    tags: ["HDS", "NIS2", "RGPD Santé"],
    accent: "green",
    gradient: "from-emerald-500/10 via-emerald-600/5 to-transparent",
    iconBg: "bg-emerald-500/15 border-emerald-500/25",
    iconColor: "text-emerald-400",
  },
  {
    icon: Factory,
    title: "Industrie & OT",
    desc: "Opérateurs d'importance vitale (OIV), opérateurs de services essentiels. Sécurité OT/ICS, IEC 62443, LPM.",
    href: "/cybersecurite-industrie",
    tags: ["OIV", "OT/ICS", "LPM"],
    accent: "blue",
    gradient: "from-violet-500/10 via-violet-600/5 to-transparent",
    iconBg: "bg-violet-500/15 border-violet-500/25",
    iconColor: "text-violet-400",
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

const certifs = [
  { label: "PASSI ANSSI", icon: "🛡️" },
  { label: "ISO 27001", icon: "✓" },
  { label: "HDS Certified", icon: "⚕️" },
  { label: "Expert NIS2", icon: "📋" },
  { label: "QUALIOPI", icon: "🎓" },
];

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
        {/* Background orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-60 left-0 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Floating shield */}
        <div className="absolute top-28 right-16 hidden xl:block animate-float opacity-20">
          <div className="w-24 h-24 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center">
            <Shield className="w-12 h-12 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-20 left-10 hidden xl:block animate-float-delayed opacity-15">
          <div className="w-16 h-16 rounded-xl border border-secondary/30 bg-secondary/10 flex items-center justify-center">
            <Lock className="w-8 h-8 text-secondary" />
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="section-tag mb-7">
                  <Shield className="w-3 h-3" /> Spécialiste Secteur Public &amp; Santé
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] mb-7 tracking-tight"
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
                Les organismes publics sont la cible n°1 des cyberattaques. Audit PASSI, conformité NIS2 &amp; HDS, pentest, CERT 24/7 — nous sécurisons vos systèmes et intervenons en 4h en cas d'incident.
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
                  <span key={c.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "hsl(215 20% 65%)" }}
                  >
                    <CheckCircle2 className="w-3 h-3 text-secondary" /> {c.label}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className={`relative rounded-2xl p-6 overflow-hidden border ${s.border}`}
                  style={{ background: `linear-gradient(135deg, hsl(222 40% 10% / 0.9), hsl(222 40% 8% / 0.9))`, backdropFilter: "blur(12px)" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-60`} />
                  <div className="relative z-10">
                    <s.icon className={`w-6 h-6 ${s.iconColor} mb-4`} />
                    <div className="num-big mb-2">{s.value}</div>
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
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.08), rgba(234,88,12,0.05))", borderTop: "1px solid rgba(239,68,68,0.2)", borderBottom: "1px solid rgba(239,68,68,0.2)" }} />
        <div className="relative container mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2 text-red-400">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <AlertTriangle className="w-4 h-4" />
              <strong className="text-red-300">ALERTE NIS2</strong>
            </div>
            <span className="text-red-300/80">Les collectivités et hôpitaux doivent être conformes avant le</span>
            <span className="font-bold text-red-300 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/25">17 octobre 2026</span>
            <Link to="/services/nis2" className="text-red-300 underline underline-offset-2 hover:text-red-200 transition-colors font-medium">
              Vérifier votre conformité →
            </Link>
          </div>
        </div>
      </div>

      {/* ── SECTEURS ── */}
      <section className="py-28 px-6">
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
                  <div className="relative rounded-2xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:-translate-y-2"
                    style={{
                      background: "linear-gradient(135deg, hsl(222 40% 9% / 0.95), hsl(222 40% 7% / 0.95))",
                      border: "1px solid rgba(255,255,255,0.06)",
                      backdropFilter: "blur(16px)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)"
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    {/* Border glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ boxShadow: `inset 0 0 0 1px hsl(214 100% 60% / 0.2)` }} />

                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl ${s.iconBg} border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                        <s.icon className={`w-7 h-7 ${s.iconColor}`} />
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

      {/* ── ATTAQUES ── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, hsl(222 47% 5% / 0.5), transparent)" }} />
        <div className="absolute inset-0 bg-red-950/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <div className="section-tag mx-auto mb-5" style={{ borderColor: "rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.08)", color: "rgb(252,165,165)" }}>
              <AlertTriangle className="w-3 h-3" /> Pourquoi agir maintenant
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-5 tracking-tight">
              Les organismes publics sont{" "}
              <span style={{ background: "linear-gradient(135deg, #f87171, #ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                la cible n°1
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ransomwares, vols de données, espionnage — les attaques contre le secteur public ont explosé. Quelques exemples récents.
            </p>
          </motion.div>

          <motion.div {...fade(0.15)} className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(239,68,68,0.15)", background: "hsl(222 40% 8% / 0.8)", backdropFilter: "blur(12px)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(239,68,68,0.06)", borderBottom: "1px solid rgba(239,68,68,0.12)" }}>
                  {["Organisme", "Type d'attaque", "Impact", "Année"].map(h => (
                    <th key={h} className="text-left px-6 py-4 font-heading font-semibold text-xs uppercase tracking-wider"
                      style={{ color: "rgb(252,165,165,0.7)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attacks.map((a, i) => (
                  <motion.tr key={i} {...fade(i * 0.07)}
                    className="border-b border-white/5 hover:bg-white/3 transition-colors group"
                    style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                    <td className="px-6 py-5 font-semibold text-foreground">{a.org}</td>
                    <td className="px-6 py-5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium"
                        style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", color: "#fca5a5" }}>
                        {a.type}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-muted-foreground">{a.impact}</td>
                    <td className="px-6 py-5 font-mono text-muted-foreground">{a.year}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div {...fade(0.3)} className="text-center mt-8">
            <Link to="/actualites/cyberattaques-hopitaux-france-bilan" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              Voir le bilan complet des cyberattaques <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28 px-6">
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
                  <div className="relative rounded-2xl p-6 h-full overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5"
                    style={{
                      background: "linear-gradient(135deg, hsl(222 40% 9% / 0.9), hsl(222 40% 7% / 0.9))",
                      border: "1px solid rgba(255,255,255,0.05)",
                      backdropFilter: "blur(12px)"
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ boxShadow: "inset 0 0 0 1px hsl(214 100% 60% / 0.15)" }} />

                    <div className="relative z-10">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                        style={{ background: "linear-gradient(135deg, hsl(214 100% 60% / 0.15), hsl(214 100% 60% / 0.08))", border: "1px solid hsl(214 100% 60% / 0.2)" }}>
                        <s.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors duration-200">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-primary/70 mt-4 group-hover:text-primary transition-colors">
                        En savoir plus <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.3)} className="text-center mt-10">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Demander un devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, hsl(214 100% 60% / 0.03), transparent)" }} />
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
                    background: "linear-gradient(135deg, hsl(222 40% 9% / 0.95), hsl(222 40% 8% / 0.95))",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)"
                  }}>
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-8 right-8 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(214 100% 60% / 0.4), transparent)" }} />

                  <div className="flex gap-1 mb-5">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed mb-7 flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="pt-5 border-t border-white/5">
                    <div className="font-heading font-bold text-foreground text-sm">{t.author}</div>
                    <div className="text-xs text-primary/70 mt-1 font-mono">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fade()} className="flex items-end justify-between mb-14">
            <div>
              <div className="section-tag mb-5">Ressources experts</div>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground tracking-tight">
                Guides <span className="text-gradient">secteur public</span>
              </h2>
            </div>
            <Link to="/actualites"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
              Tous les articles
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <motion.div key={i} {...fade(i * 0.1)}>
                <Link to={a.slug} className="group block h-full">
                  <div className="relative rounded-2xl p-7 h-full overflow-hidden transition-all duration-300 group-hover:-translate-y-2"
                    style={{
                      background: "linear-gradient(135deg, hsl(222 40% 9% / 0.9), hsl(222 40% 7% / 0.9))",
                      border: "1px solid rgba(255,255,255,0.05)",
                      backdropFilter: "blur(12px)"
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ boxShadow: "inset 0 0 0 1px hsl(214 100% 60% / 0.12)" }} />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
                          style={{ background: "hsl(160 70% 45% / 0.12)", border: "1px solid hsl(160 70% 45% / 0.2)", color: "hsl(160 70% 62%)" }}>
                          {a.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{a.readTime}</span>
                      </div>
                      <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-4 leading-snug text-base">
                        {a.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{a.date}</span>
                        <div className="flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fade()}>
            <div className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(214 100% 14%), hsl(222 47% 8%), hsl(214 80% 12%))",
                border: "1px solid hsl(214 100% 60% / 0.2)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px hsl(214 100% 60% / 0.08), inset 0 1px 0 rgba(255,255,255,0.08)"
              }}>

              {/* Background effects */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/8 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(214 100% 60% / 0.5), transparent)" }} />

              <div className="relative z-10">
                <div className="section-tag mx-auto mb-6" style={{ borderColor: "hsl(214 100% 60% / 0.3)", background: "hsl(214 100% 60% / 0.1)", color: "hsl(214 100% 78%)" }}>
                  <Phone className="w-3 h-3" /> Contact
                </div>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                  Parlons de votre <span className="text-gradient">sécurité</span>
                </h2>
                <p className="text-lg text-blue-200/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Audit gratuit sous 48h. Nos experts connaissent les contraintes du secteur public : budget, marchés publics, ANSSI, NIS2. Premier échange sans engagement.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact" className="btn-primary text-base px-9 py-4" style={{ fontSize: "1rem" }}>
                    Audit gratuit <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="tel:+33100000000" className="btn-secondary text-base px-9 py-4"
                    style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}>
                    <Phone className="w-5 h-5" /> 01 00 00 00 00
                  </a>
                </div>
                <p className="text-xs text-blue-300/40 mt-8">Réponse garantie sous 24h · Devis gratuit · Sans engagement</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
