import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle, ArrowRight, Building2, Users, FileText, Lock, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const risks = [
  { icon: AlertTriangle, title: "Ransomware", desc: "Les collectivités sont la 1ère cible des rançongiciels en France. Une attaque paralyse en moyenne 3 semaines les services municipaux." },
  { icon: Lock, title: "Vol de données citoyens", desc: "Fichiers d'état civil, données fiscales, dossiers sociaux : des millions de données sensibles exposées à chaque fuite." },
  { icon: Users, title: "Phishing ciblé", desc: "Les agents publics reçoivent 4x plus d'emails malveillants que la moyenne. Formations obligatoires NIS2." },
  { icon: FileText, title: "Non-conformité NIS2", desc: "Depuis octobre 2024, les entités publiques importantes risquent jusqu'à 10M€ d'amende ou 2% du budget." },
];

const services = [
  { title: "Audit de sécurité SI municipal", desc: "Cartographie complète de votre SI, identification des vulnérabilités critiques, rapport de conformité ANSSI.", href: "/services/audit" },
  { title: "Mise en conformité NIS2", desc: "Plan d'action personnalisé, mise en place des 18 mesures obligatoires, accompagnement jusqu'à la déclaration ANSSI.", href: "/services/nis2" },
  { title: "Pentest infrastructure", desc: "Tests d'intrusion sur vos réseaux, portail citoyens, messagerie et équipements IoT municipaux.", href: "/services/pentest" },
  { title: "Formation des agents", desc: "Sensibilisation sur-mesure pour élus, DSI et agents. Exercices de phishing, modules e-learning RGPD.", href: "/services/formation" },
  { title: "Plan de continuité (PCA/PRA)", desc: "Définition des actifs critiques, procédures de sauvegarde, tests de reprise. Opérationnel en 72h.", href: "/services/cert" },
  { title: "CERT dédié secteur public", desc: "Surveillance 24/7, détection d'incidents, réponse immédiate. SLA garanti contractuellement.", href: "/services/cert" },
];

const attacks = [
  { entity: "Ville de Caen", date: "2022", impact: "Réseau informatique paralysé, 700 postes bloqués, 3 semaines de rétablissement" },
  { entity: "Département Seine-Saint-Denis", date: "2023", impact: "Données de 400 000 habitants exposées, CNIL saisie, amende en cours" },
  { entity: "Mairie de Sartrouville", date: "2023", impact: "Rançon de 1,2M€ exigée, services en ligne coupés 6 semaines" },
  { entity: "Communauté d'agglomération Grand Châtellerault", date: "2024", impact: "Ransomware LockBit, sauvegarde corrompue, reconstruction totale du SI" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cybersécurité pour collectivités locales",
  "provider": { "@type": "Organization", "name": "CybersécuritéPublique.fr" },
  "description": "Expert cybersécurité pour mairies, communautés de communes, départements et régions. Conformité NIS2, audit SI, PASSI.",
  "areaServed": "France",
};

export default function Collectivites() {
  return (
    <>
      <SEOHead
        title="Cybersécurité Collectivités Locales — Mairies, Départements, Régions"
        description="Spécialistes cybersécurité pour collectivités territoriales. Audit SI, conformité NIS2, formation agents. Qualifiés PASSI ANSSI. Protégez vos services publics et données citoyens."
        canonical="/cybersecurite-collectivites"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="section-tag mb-6">
              <Building2 className="w-3.5 h-3.5" /> Collectivités territoriales
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Cybersécurité pour les <span className="text-gradient">collectivités locales</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              Mairies, intercommunalités, départements, régions : votre SI municipal est une cible prioritaire des cybercriminels.
              Nos experts qualifiés PASSI vous accompagnent de l'audit jusqu'à la conformité NIS2 complète.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Audit gratuit de votre SI <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+33100000000" className="btn-secondary">
                <Phone className="w-4 h-4" /> 01 00 00 00 00
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {[
              { val: "3 800+", label: "collectivités attaquées en 2023" },
              { val: "72h", label: "délai de déclaration NIS2" },
              { val: "10M€", label: "amende max non-conformité" },
              { val: "3 sem.", label: "durée moy. paralysie après ransomware" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
                className="glass rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-primary font-heading">{s.val}</div>
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
            <div className="section-tag mx-auto mb-4"><AlertTriangle className="w-3.5 h-3.5" /> Menaces</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Les cybermenaces qui ciblent les collectivités
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Le secteur public est la 1ère cible des cyberattaques en France depuis 2021.
              Comprendre les menaces est le premier pas pour s'en protéger.
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

      {/* Recent attacks */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Clock className="w-3.5 h-3.5" /> Incidents récents</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Collectivités françaises touchées
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full glass rounded-xl overflow-hidden">
              <thead>
                <tr className="border-b border-border/40 bg-primary/5">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Entité</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Année</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Impact</th>
                </tr>
              </thead>
              <tbody>
                {attacks.map((a, i) => (
                  <tr key={i} className={`border-b border-border/20 ${i % 2 === 0 ? "bg-muted/5" : ""}`}>
                    <td className="px-6 py-4 font-medium text-foreground text-sm">{a.entity}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{a.date}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{a.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Shield className="w-3.5 h-3.5" /> Nos services</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solutions cybersécurité dédiées aux collectivités
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={s.href} className="glass rounded-xl p-6 h-full flex flex-col group hover:border-primary/40 transition-all block">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4">
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
          <div className="glass rounded-2xl p-10 md:p-14 text-center border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="relative">
              <div className="section-tag mx-auto mb-6"><Phone className="w-3.5 h-3.5" /> Contact</div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Votre collectivité est-elle conforme NIS2 ?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Obtenez en 48h un diagnostic gratuit de votre niveau de maturité cybersécurité et un plan d'action prioritaire.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary text-base">
                  Diagnostic gratuit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+33100000000" className="btn-secondary text-base">
                  <Phone className="w-4 h-4" /> 01 00 00 00 00
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
