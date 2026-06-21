import { motion } from "framer-motion";
import { Shield, ArrowRight, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const articles = [
  {
    slug: "/actualites/nis2-collectivites-guide-complet",
    title: "NIS2 pour les collectivités : guide complet 2026",
    desc: "Quelles collectivités sont concernées, quelles obligations, quelles sanctions ? Le guide pratique complet pour comprendre et agir avant octobre 2026.",
    date: "15 juin 2026",
    readTime: "12 min",
    category: "NIS2",
    featured: true,
  },
  {
    slug: "/actualites/cyberattaques-hopitaux-france-bilan",
    title: "Bilan 2025 des cyberattaques contre les hôpitaux français",
    desc: "CH Corbeil, CHU Rennes, AP-HP... Analyse complète des cyberattaques qui ont frappé le secteur hospitalier français avec les leçons à en tirer.",
    date: "8 juin 2026",
    readTime: "10 min",
    category: "Santé",
    featured: false,
  },
  {
    slug: "/actualites/audit-ssi-collectivite-territoriale",
    title: "Comment réaliser un audit SSI pour une collectivité territoriale",
    desc: "Méthodologie pas à pas pour auditer le Système d'Information d'une mairie ou communauté de communes. Référentiels ANSSI, livrables attendus.",
    date: "1 juin 2026",
    readTime: "15 min",
    category: "Audit",
    featured: false,
  },
  {
    slug: "/actualites/certification-hds-hopital-guide",
    title: "Certification HDS pour les hôpitaux : tout comprendre",
    desc: "La certification Hébergeur de Données de Santé est obligatoire. Voici comment s'y préparer, les critères d'audit et les erreurs à éviter.",
    date: "25 mai 2026",
    readTime: "11 min",
    category: "Santé",
    featured: false,
  },
  {
    slug: "/actualites/plan-continuite-activite-sante",
    title: "Plan de Continuité d'Activité (PCA) en milieu hospitalier",
    desc: "Comment construire un PCA robuste pour garantir la continuité des soins en cas de cyberattaque ? Méthode, modèles et retours d'expérience.",
    date: "18 mai 2026",
    readTime: "13 min",
    category: "Santé",
    featured: false,
  },
  {
    slug: "/actualites/sensibilisation-agents-publics-cybersecurite",
    title: "Sensibilisation des agents publics à la cybersécurité",
    desc: "90% des cyberattaques passent par l'humain. Comment former efficacement vos agents à détecter les menaces sans les noyer sous la théorie.",
    date: "10 mai 2026",
    readTime: "9 min",
    category: "Formation",
    featured: false,
  },
  {
    slug: "/actualites/ransomware-collectivites-comment-se-proteger",
    title: "Ransomware et collectivités : comment se protéger efficacement",
    desc: "Les rançongiciels paralysent des mairies chaque semaine. Comprendre comment ils fonctionnent et les 12 mesures concrètes pour s'en protéger.",
    date: "2 mai 2026",
    readTime: "14 min",
    category: "Menaces",
    featured: false,
  },
  {
    slug: "/actualites/securite-reseaux-industriels-scada-ot",
    title: "Sécurité des réseaux industriels SCADA et OT : enjeux 2026",
    desc: "La convergence IT/OT expose les infrastructures critiques à des risques sans précédent. Comment sécuriser vos automates, SCADA et réseaux industriels.",
    date: "22 avril 2026",
    readTime: "16 min",
    category: "OT/SCADA",
    featured: false,
  },
  {
    slug: "/actualites/gouvernance-cyber-secteur-public-guide",
    title: "Gouvernance cybersécurité dans le secteur public : guide du DSI",
    desc: "Comment mettre en place une gouvernance cyber efficace dans une collectivité ou un hôpital ? RSSI, PSSI, comité de sécurité : les clés pour réussir.",
    date: "14 avril 2026",
    readTime: "12 min",
    category: "Gouvernance",
    featured: false,
  },
  {
    slug: "/actualites/passi-qualification-anssi-prestataires",
    title: "PASSI ANSSI : pourquoi choisir un prestataire qualifié",
    desc: "La qualification PASSI est le gage de qualité des audits de sécurité. Comprendre ce qu'elle implique et comment la vérifier avant de choisir votre prestataire.",
    date: "5 avril 2026",
    readTime: "8 min",
    category: "Réglementation",
    featured: false,
  },
];

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  NIS2: { bg: "hsl(213 94% 58% / 0.1)", border: "hsl(213 94% 58% / 0.22)", text: "hsl(213 94% 70%)" },
  Santé: { bg: "hsl(158 64% 44% / 0.1)", border: "hsl(158 64% 44% / 0.22)", text: "hsl(158 64% 62%)" },
  Audit: { bg: "hsl(270 70% 60% / 0.1)", border: "hsl(270 70% 60% / 0.22)", text: "hsl(270 70% 72%)" },
  Formation: { bg: "hsl(213 94% 58% / 0.08)", border: "hsl(213 94% 58% / 0.2)", text: "hsl(213 94% 70%)" },
  Menaces: { bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.22)", text: "#fca5a5" },
  "OT/SCADA": { bg: "hsl(270 70% 60% / 0.1)", border: "hsl(270 70% 60% / 0.22)", text: "hsl(270 70% 72%)" },
  Gouvernance: { bg: "hsl(158 64% 44% / 0.08)", border: "hsl(158 64% 44% / 0.2)", text: "hsl(158 64% 62%)" },
  Réglementation: { bg: "rgba(249,115,22,0.09)", border: "rgba(249,115,22,0.2)", text: "#fb923c" },
};

const getCatStyle = (cat: string) => categoryColors[cat] || categoryColors.NIS2;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Actualités cybersécurité secteur public",
  "url": "https://cybersecurite-publique.fr/actualites",
  "description": "Articles experts sur la cybersécurité des collectivités locales, hôpitaux et organismes publics.",
};

export default function Actualites() {
  const featured = articles.find(a => a.featured)!;
  const rest = articles.filter(a => !a.featured);

  return (
    <>
      <SEOHead
        title="Actualités Cybersécurité Secteur Public — Blog Experts"
        description="Articles experts sur la cybersécurité des collectivités et hôpitaux. NIS2, ransomware, audit SI, HDS, formation agents. Mis à jour régulièrement par nos experts PASSI."
        canonical="/actualites"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, hsl(213 94% 58% / 0.1) 0%, transparent 65%)" }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-tag mx-auto mb-6"><BookOpen className="w-3 h-3" /> Blog expert</div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-5 tracking-tight">
              Actualités cybersécurité{" "}
              <span className="text-gradient">secteur public</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Décryptages, guides pratiques et analyses de nos experts sur la cybersécurité des collectivités et des établissements de santé.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured article */}
      <section className="px-6 pb-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()}>
            <Link to={featured.slug} className="group block">
              <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(213 94% 9% / 0.95), hsl(224 42% 7% / 0.98))",
                  border: "1px solid hsl(213 94% 58% / 0.2)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)"
                }}>
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(213 94% 65% / 0.5), transparent)" }} />
                <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full blur-[80px] pointer-events-none"
                  style={{ background: "hsl(213 94% 58% / 0.06)" }} />

                <div className="relative z-10 md:max-w-2xl">
                  <div className="flex items-center gap-3 mb-5">
                    {(() => { const c = getCatStyle(featured.category); return (
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}>
                        {featured.category}
                      </span>
                    ); })()}
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {featured.readTime}
                    </span>
                    <span className="text-xs text-muted-foreground">{featured.date}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                      style={{ background: "hsl(213 94% 58% / 0.08)", border: "1px solid hsl(213 94% 58% / 0.18)", color: "hsl(213 94% 65%)" }}>
                      À la une
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-black text-foreground mb-4 leading-snug group-hover:text-primary transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featured.desc}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Lire l'article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 pb-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="divider-glow mb-12" />
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading text-2xl font-black text-foreground tracking-tight">Tous les articles</h2>
            <div className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-primary/50" />
              <span className="text-xs text-muted-foreground font-mono">{rest.length} articles</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((a, i) => {
              const catStyle = getCatStyle(a.category);
              return (
                <motion.article key={i} {...fade(i * 0.05)}>
                  <Link to={a.slug} className="group block h-full">
                    <div className="card-premium h-full p-6">
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
                            style={{ background: catStyle.bg, border: `1px solid ${catStyle.border}`, color: catStyle.text }}>
                            {a.category}
                          </span>
                          <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {a.readTime}
                          </span>
                        </div>
                        <h2 className="font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200 leading-snug flex-1">
                          {a.title}
                        </h2>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">{a.desc}</p>
                        <div className="flex items-center justify-between mt-auto pt-4"
                          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                          <span className="text-xs text-muted-foreground">{a.date}</span>
                          <div className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ color: "hsl(213 94% 65%)" }}>
                            Lire <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
