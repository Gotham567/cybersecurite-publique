import { motion } from "framer-motion";
import { Shield, Heart, AlertTriangle, CheckCircle, ArrowRight, Lock, FileText, Phone, Database } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

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
  { name: "Centre Hospitalier Arles", date: "Mars 2023", detail: "SI paralysé 6 semaines, retour au papier total, coût de remédiation >500k€" },
];

const services = [
  { title: "Audit cybersécurité SIH", desc: "Évaluation complète de votre Système d'Information Hospitalier selon le référentiel ANSSI HOP'EN et les recommandations Cyberveille Santé.", href: "/services/audit" },
  { title: "Certification HDS", desc: "Accompagnement de A à Z pour l'obtention et le maintien de la certification Hébergeur de Données de Santé. Audit préparatoire inclus.", href: "/services/audit" },
  { title: "Sécurité dispositifs médicaux", desc: "Inventaire et sécurisation des équipements biomédicaux connectés. Segmentation réseau, mises à jour, monitoring.", href: "/services/pentest" },
  { title: "Conformité NIS2 santé", desc: "Les CHU, CHR et GHT sont des entités essentielles NIS2. Plan de conformité clé-en-main avec déclaration ANSSI.", href: "/services/nis2" },
  { title: "Formation équipes médicales", desc: "Sensibilisation adaptée aux soignants et personnels administratifs. Formats courts (15 min), disponibles 24/7.", href: "/services/formation" },
  { title: "Réponse aux incidents", desc: "Cellule de crise 24/7 dédiée santé. Intervention en moins de 4h sur site. Rétablissement prioritaire des fonctions vitales.", href: "/services/cert" },
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
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="section-tag mb-6">
              <Heart className="w-3.5 h-3.5" /> Secteur santé
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Cybersécurité pour les <span className="text-gradient">hôpitaux et établissements de santé</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
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
            {[
              { val: "30+", label: "hôpitaux français victimes en 2023" },
              { val: "350€", label: "prix d'un dossier médical volé" },
              { val: "4h", label: "délai d'intervention CERT santé" },
              { val: "100%", label: "CHU concernés par NIS2" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
                className="glass rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-secondary font-heading">{s.val}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><AlertTriangle className="w-3.5 h-3.5" /> Menaces spécifiques</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi les hôpitaux sont des cibles prioritaires
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La pression d'urgence, les systèmes vieillissants et la sensibilité des données font du secteur santé la 2e cible mondiale des cybercriminels.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {risks.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 flex gap-5">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center shrink-0">
                  <r.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital incidents */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Shield className="w-3.5 h-3.5" /> Cas réels</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hôpitaux français victimes de cyberattaques
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {hospitals.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 border-l-2 border-destructive/40">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-bold text-foreground">{h.name}</h3>
                  <span className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded">{h.date}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><CheckCircle className="w-3.5 h-3.5" /> Services santé</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre offre cybersécurité pour la santé
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={s.href} className="glass rounded-xl p-6 h-full flex flex-col group hover:border-secondary/40 transition-all block">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-all">
                    <Heart className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <div className="flex items-center gap-1 text-secondary text-sm font-medium mt-4">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass rounded-2xl p-10 md:p-14 text-center border-secondary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
            <div className="relative">
              <div className="section-tag mx-auto mb-6"><Heart className="w-3.5 h-3.5" /> Santé & urgences</div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Protégez vos patients et votre SIH dès aujourd'hui
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Audit de sécurité complet de votre Système d'Information Hospitalier en 5 jours.
                Rapport de conformité HDS et plan de remédiation prioritaire inclus.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary text-base">
                  Audit SIH gratuit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+33100000000" className="btn-secondary text-base">
                  <Phone className="w-4 h-4" /> Urgence cyber 24/7
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
