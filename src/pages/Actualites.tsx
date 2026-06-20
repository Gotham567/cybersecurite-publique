import { motion } from "framer-motion";
import { Shield, ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const articles = [
  {
    slug: "/actualites/nis2-collectivites-guide-complet",
    title: "NIS2 pour les collectivités : guide complet 2026",
    desc: "Quelles collectivités sont concernées, quelles obligations, quelles sanctions ? Le guide pratique complet pour comprendre et agir avant octobre 2026.",
    date: "15 juin 2026",
    readTime: "12 min",
    category: "NIS2",
    tag: "Collectivités",
  },
  {
    slug: "/actualites/cyberattaques-hopitaux-france-bilan",
    title: "Bilan 2025 des cyberattaques contre les hôpitaux français",
    desc: "CH Corbeil, CHU Rennes, AP-HP... Analyse complète des cyberattaques qui ont frappé le secteur hospitalier français avec les leçons à en tirer.",
    date: "8 juin 2026",
    readTime: "10 min",
    category: "Santé",
    tag: "Hôpitaux",
  },
  {
    slug: "/actualites/audit-ssi-collectivite-territoriale",
    title: "Comment réaliser un audit SSI pour une collectivité territoriale",
    desc: "Méthodologie pas à pas pour auditer le Système d'Information d'une mairie ou communauté de communes. Référentiels ANSSI, livrables attendus.",
    date: "1 juin 2026",
    readTime: "15 min",
    category: "Audit",
    tag: "Collectivités",
  },
  {
    slug: "/actualites/certification-hds-hopital-guide",
    title: "Certification HDS pour les hôpitaux : tout comprendre",
    desc: "La certification Hébergeur de Données de Santé est obligatoire. Voici comment s'y préparer, les critères d'audit et les erreurs à éviter.",
    date: "25 mai 2026",
    readTime: "11 min",
    category: "Santé",
    tag: "HDS",
  },
  {
    slug: "/actualites/plan-continuite-activite-sante",
    title: "Plan de Continuité d'Activité (PCA) en milieu hospitalier",
    desc: "Comment construire un PCA robuste pour garantir la continuité des soins en cas de cyberattaque ? Méthode, modèles et retours d'expérience.",
    date: "18 mai 2026",
    readTime: "13 min",
    category: "Santé",
    tag: "PCA/PRA",
  },
  {
    slug: "/actualites/sensibilisation-agents-publics-cybersecurite",
    title: "Sensibilisation des agents publics à la cybersécurité",
    desc: "90% des cyberattaques passent par l'humain. Comment former efficacement vos agents à détecter les menaces sans les noyer sous la théorie.",
    date: "10 mai 2026",
    readTime: "9 min",
    category: "Formation",
    tag: "Formation",
  },
  {
    slug: "/actualites/ransomware-collectivites-comment-se-proteger",
    title: "Ransomware et collectivités : comment se protéger efficacement",
    desc: "Les rançongiciels paralysent des mairies chaque semaine. Comprendre comment ils fonctionnent et les 12 mesures concrètes pour s'en protéger.",
    date: "2 mai 2026",
    readTime: "14 min",
    category: "Menaces",
    tag: "Ransomware",
  },
  {
    slug: "/actualites/securite-reseaux-industriels-scada-ot",
    title: "Sécurité des réseaux industriels SCADA et OT : enjeux 2026",
    desc: "La convergence IT/OT expose les infrastructures critiques à des risques sans précédent. Comment sécuriser vos automates, SCADA et réseaux industriels.",
    date: "22 avril 2026",
    readTime: "16 min",
    category: "OT/SCADA",
    tag: "Industrie",
  },
  {
    slug: "/actualites/gouvernance-cyber-secteur-public-guide",
    title: "Gouvernance cybersécurité dans le secteur public : guide du DSI",
    desc: "Comment mettre en place une gouvernance cyber efficace dans une collectivité ou un hôpital ? RSSI, PSSI, comité de sécurité : les clés pour réussir.",
    date: "14 avril 2026",
    readTime: "12 min",
    category: "Gouvernance",
    tag: "DSI",
  },
  {
    slug: "/actualites/passi-qualification-anssi-prestataires",
    title: "PASSI ANSSI : pourquoi choisir un prestataire qualifié",
    desc: "La qualification PASSI est le gage de qualité des audits de sécurité. Comprendre ce qu'elle implique et comment la vérifier avant de choisir votre prestataire.",
    date: "5 avril 2026",
    readTime: "8 min",
    category: "Réglementation",
    tag: "ANSSI",
  },
];

const categories = ["Tous", "NIS2", "Santé", "Collectivités", "Audit", "Menaces", "Formation", "OT/SCADA"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Actualités cybersécurité secteur public",
  "url": "https://cybersecurite-publique.fr/actualites",
  "description": "Articles experts sur la cybersécurité des collectivités locales, hôpitaux et organismes publics.",
};

export default function Actualites() {
  return (
    <>
      <SEOHead
        title="Actualités Cybersécurité Secteur Public — Blog Experts"
        description="Articles experts sur la cybersécurité des collectivités et hôpitaux. NIS2, ransomware, audit SI, HDS, formation agents. Mis à jour régulièrement par nos experts PASSI."
        canonical="/actualites"
        jsonLd={jsonLd}
      />

      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-tag mx-auto mb-6"><Shield className="w-3.5 h-3.5" /> Blog expert</div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Actualités cybersécurité <span className="text-gradient">secteur public</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Décryptages, guides pratiques et analyses de nos experts sur la cybersécurité des collectivités et des établissements de santé.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} className="px-4 py-1.5 rounded-full text-xs font-mono border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors">
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link to={a.slug} className="glass rounded-xl p-6 h-full flex flex-col group hover:border-primary/40 transition-all block">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{a.category}</span>
                    <span className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {a.tag}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    {a.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{a.desc}</p>
                  <div className="flex items-center justify-between border-t border-border/20 pt-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                      <span>{a.date}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
