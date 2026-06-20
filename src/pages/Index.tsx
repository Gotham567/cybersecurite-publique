import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield, Hospital, Building2, Factory, ArrowRight, CheckCircle2,
  AlertTriangle, Lock, Users, Clock, Award, FileCheck, ChevronRight,
  Zap, BookOpen, Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const stats = [
  { value: "3 800+", label: "Collectivités attaquées en 2024", icon: AlertTriangle, color: "text-red-400" },
  { value: "380M€", label: "Coût moyen d'une attaque hôpital", icon: Hospital, color: "text-orange-400" },
  { value: "72h", label: "Délai de notification NIS2", icon: Clock, color: "text-yellow-400" },
  { value: "100%", label: "Des organismes publics concernés NIS2", icon: Shield, color: "text-primary" },
];

const sectors = [
  {
    icon: Building2,
    title: "Collectivités locales",
    desc: "Mairies, régions, départements, intercommunalités. Mise en conformité NIS2, audit ANSSI, plan de continuité d'activité.",
    href: "/cybersecurite-collectivites",
    tag: "NIS2 · ANSSI · RGPD",
    color: "primary",
  },
  {
    icon: Hospital,
    title: "Secteur santé",
    desc: "Hôpitaux, cliniques, EHPAD, GHT, GIP e-santé. Certification HDS, conformité RGPD données de santé, protection SI de santé.",
    href: "/cybersecurite-sante",
    tag: "HDS · NIS2 · RGPD Santé",
    color: "secondary",
  },
  {
    icon: Factory,
    title: "Industrie & OT",
    desc: "Opérateurs d'importance vitale (OIV), opérateurs de services essentiels (OSE). Sécurité OT/ICS, IEC 62443, LPM.",
    href: "/cybersecurite-industrie",
    tag: "OIV · OT/ICS · LPM",
    color: "primary",
  },
];

const services = [
  { icon: FileCheck, title: "Audit de sécurité", desc: "Diagnostic complet de vos systèmes selon le guide ANSSI et les bonnes pratiques sectorielles." },
  { icon: Zap, title: "Test d'intrusion (pentest)", desc: "Simulation d'attaque réelle pour identifier vos vulnérabilités avant les attaquants." },
  { icon: Shield, title: "Conformité NIS2 & HDS", desc: "Accompagnement complet pour répondre aux obligations légales de votre secteur." },
  { icon: Users, title: "Formation des agents", desc: "Sensibilisation et formation cybersécurité adaptée aux agents publics et personnels soignants." },
  { icon: Clock, title: "CERT & réponse aux incidents", desc: "Disponible 24/7 en cas d'attaque. Confinement, investigation, reprise d'activité." },
  { icon: BookOpen, title: "Accompagnement appels d'offres", desc: "Aide à la rédaction de vos marchés publics cybersécurité et dossiers de candidature." },
];

const attacks = [
  { org: "CH de Corbeil-Essonnes", type: "Ransomware", impact: "Paralysie totale 3 mois", year: "2022" },
  { org: "CHU de Rennes", type: "Cyberattaque", impact: "SI partiellement chiffré", year: "2023" },
  { org: "Ville de Caen", type: "Ransomware", impact: "Services numériques 2 semaines", year: "2023" },
  { org: "Hôpitaux de Paris (AP-HP)", type: "Fuite données", impact: "1,5M de dossiers volés", year: "2021" },
  { org: "Département Seine-Saint-Denis", type: "Cyberattaque", impact: "Services perturbés 1 mois", year: "2024" },
];

const testimonials = [
  {
    quote: "Grâce à leur audit, nous avons obtenu la certification HDS et répondu avec succès à notre premier appel d'offres BOAMP cybersécurité.",
    author: "DSI, GIP e-Santé régional",
    role: "Secteur santé — 2024",
  },
  {
    quote: "L'équipe a accompagné notre mise en conformité NIS2 de A à Z. En 3 mois, nous avions un plan d'action concret et priorisé.",
    author: "Responsable informatique",
    role: "Communauté de communes, 45 000 hab.",
  },
  {
    quote: "Suite à un ransomware, leur CERT a confiné l'attaque en 4h et restauré nos services en 72h. Professionnalisme exemplaire.",
    author: "DGA chargé du numérique",
    role: "Ville de 120 000 habitants",
  },
];

const certifs = ["PASSI ANSSI", "ISO 27001", "HDS", "Quali'OPSS", "Expert NIS2", "RGPD DPO"];

const articles = [
  { slug: "nis2-collectivites-guide", title: "NIS2 pour les collectivités : obligations et plan d'action 2026", category: "NIS2", date: "15 juin 2026" },
  { slug: "ransomware-hopital-prevention", title: "Ransomware hospitalier : comment s'en protéger efficacement", category: "Santé", date: "10 juin 2026" },
  { slug: "audit-securite-mairie-guide", title: "Audit cybersécurité d'une mairie : méthodologie ANSSI", category: "Collectivités", date: "5 juin 2026" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cybersécurité pour collectivités, hôpitaux et secteur public"
        description="Spécialistes cybersécurité pour collectivités locales et secteur santé. Audit, pentest, conformité NIS2/HDS, formation agents. Qualifiés PASSI. Devis gratuit."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CybersécuritéPublique.fr",
          "url": "https://cybersecurite-publique.fr",
          "description": "Cybersécurité pour collectivités locales et secteur santé — audit, pentest, NIS2, HDS",
          "areaServed": "FR",
          "knowsAbout": ["NIS2", "HDS", "Cybersécurité collectivités", "Cybersécurité santé", "ANSSI"],
        }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div {...fade(0)}>
                <span className="section-tag mb-6">
                  <Shield className="w-3 h-3" /> Spécialiste Secteur Public & Santé
                </span>
              </motion.div>

              <motion.h1 {...fade(0.1)} className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Cybersécurité pour{" "}
                <span className="text-gradient">collectivités</span>{" "}
                et{" "}
                <span className="text-gradient-green">secteur santé</span>
              </motion.h1>

              <motion.p {...fade(0.2)} className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Les mairies, hôpitaux et organismes publics sont les cibles prioritaires des cyberattaques. Nous sécurisons vos systèmes, vous accompagnons dans la conformité NIS2 et HDS, et intervenons en 4h en cas d'incident.
              </motion.p>

              <motion.div {...fade(0.3)} className="flex flex-wrap gap-4 mb-10">
                <Link to="/contact" className="btn-primary">
                  Audit gratuit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/cybersecurite-collectivites" className="btn-secondary">
                  Nos secteurs
                </Link>
              </motion.div>

              <motion.div {...fade(0.4)} className="flex flex-wrap gap-3">
                {certifs.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border/60 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3 h-3 text-secondary" /> {c}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div key={s.label} {...fade(0.1 + i * 0.08)}
                  className="glass glass-hover rounded-xl p-5">
                  <s.icon className={`w-6 h-6 ${s.color} mb-3`} />
                  <div className="font-heading font-bold text-2xl text-foreground mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground leading-snug">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ALERTE ── */}
      <section className="py-6 bg-red-950/20 border-y border-red-900/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-red-300">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
            <span><strong>NIS2 en vigueur :</strong> les collectivités et hôpitaux ont jusqu'au 17 octobre 2026 pour se mettre en conformité.</span>
            <Link to="/services/nis2" className="underline underline-offset-2 hover:text-red-200 transition-colors whitespace-nowrap">
              Vérifier votre conformité →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTEURS ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="section-tag mb-4">Nos secteurs d'expertise</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Une expertise <span className="text-gradient">sectorielle</span> unique
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chaque secteur a ses réglementations, ses contraintes et ses menaces. Nous maîtrisons les spécificités de chacun.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {sectors.map((s, i) => (
              <motion.div key={s.title} {...fade(i * 0.1)}>
                <Link to={s.href} className="group block glass glass-hover rounded-xl p-8 h-full">
                  <div className={`w-12 h-12 rounded-xl ${s.color === "secondary" ? "bg-secondary/15 border-secondary/30" : "bg-primary/15 border-primary/30"} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                    <s.icon className={`w-6 h-6 ${s.color === "secondary" ? "text-secondary" : "text-primary"}`} />
                  </div>
                  <span className={`text-xs font-mono ${s.color === "secondary" ? "text-secondary" : "text-primary"} mb-3 block`}>{s.tag}</span>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ATTAQUES RÉCENTES ── */}
      <section className="py-24 px-6 bg-card/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-12">
            <span className="section-tag mb-4">
              <AlertTriangle className="w-3 h-3" /> Pourquoi agir maintenant
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Les organismes publics sont <span className="text-red-400">la cible n°1</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ransomwares, vols de données, espionnage — les attaques contre le secteur public explosent. Voici quelques exemples récents.
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-xl border border-border/60">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/30 border-b border-border/60">
                  <th className="text-left px-5 py-3.5 font-heading font-semibold text-foreground text-xs uppercase tracking-wider">Organisme</th>
                  <th className="text-left px-5 py-3.5 font-heading font-semibold text-foreground text-xs uppercase tracking-wider">Type</th>
                  <th className="text-left px-5 py-3.5 font-heading font-semibold text-foreground text-xs uppercase tracking-wider">Impact</th>
                  <th className="text-left px-5 py-3.5 font-heading font-semibold text-foreground text-xs uppercase tracking-wider">Année</th>
                </tr>
              </thead>
              <tbody>
                {attacks.map((a, i) => (
                  <motion.tr key={i} {...fade(i * 0.06)}
                    className="border-b border-border/40 hover:bg-muted/20 transition-colors">
                    <td className="px-5 py-4 font-medium text-foreground">{a.org}</td>
                    <td className="px-5 py-4"><span className="px-2.5 py-1 rounded-full bg-red-950/40 border border-red-900/40 text-red-400 text-xs font-mono">{a.type}</span></td>
                    <td className="px-5 py-4 text-muted-foreground">{a.impact}</td>
                    <td className="px-5 py-4 text-muted-foreground font-mono">{a.year}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="section-tag mb-4">Nos prestations</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Un accompagnement <span className="text-gradient">complet</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              De l'audit initial à la réponse aux incidents, nous couvrons l'intégralité de vos besoins cybersécurité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={s.title} {...fade(i * 0.08)} className="glass glass-hover rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.3)} className="text-center mt-10">
            <Link to="/contact" className="btn-primary">
              Demander un devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-24 px-6 bg-card/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="section-tag mb-4"><Award className="w-3 h-3" /> Références</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ils nous font <span className="text-gradient">confiance</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fade(i * 0.1)} className="glass glass-hover rounded-xl p-7 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                  "{t.quote}"
                </blockquote>
                <div>
                  <div className="font-heading font-semibold text-foreground text-sm">{t.author}</div>
                  <div className="text-xs text-primary mt-0.5 font-mono">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="flex items-end justify-between mb-12">
            <div>
              <span className="section-tag mb-4 block w-fit">Ressources</span>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Guides <span className="text-gradient">secteur public</span>
              </h2>
            </div>
            <Link to="/actualites" className="hidden md:flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
              Tous les articles <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <motion.div key={i} {...fade(i * 0.1)}>
                <Link to={`/actualites/${a.slug}`} className="group glass glass-hover rounded-xl p-6 block h-full">
                  <span className="text-xs font-mono text-secondary mb-3 block">{a.category}</span>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">{a.title}</h3>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                    <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6 bg-card/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fade()}>
            <span className="section-tag mb-6 mx-auto">
              <Phone className="w-3 h-3" /> Contact
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Parlons de votre <span className="text-gradient">sécurité</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Audit gratuit sous 48h. Nos experts connaissent les contraintes du secteur public : budget, marchés publics, ANSSI, NIS2. Premier échange sans engagement.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-8 py-4 text-base">
                Audit gratuit <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+33100000000" className="btn-secondary px-8 py-4 text-base">
                <Phone className="w-5 h-5" /> 01 00 00 00 00
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
