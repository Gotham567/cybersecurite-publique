import { motion } from "framer-motion";
import { Shield, Search, CheckCircle, ArrowRight, Phone, FileText, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const steps = [
  { num: "01", title: "Cadrage & collecte", desc: "Entretiens avec les équipes, inventaire du SI, définition du périmètre d'audit. Durée : 1 à 2 jours." },
  { num: "02", title: "Analyse documentaire", desc: "Examen des politiques de sécurité, PSSI, contrats de prestataires, plans réseau. Identification des écarts." },
  { num: "03", title: "Tests techniques", desc: "Scans de vulnérabilités, analyse des configurations, tests d'authentification, revue des droits d'accès." },
  { num: "04", title: "Rapport & plan d'action", desc: "Rapport exécutif + technique, scoring CVSS, matrice de risques, plan de remédiation priorisé par criticité." },
];

const deliverables = [
  "Rapport exécutif (présentation CODIR)",
  "Rapport technique détaillé (équipes IT)",
  "Cartographie des vulnérabilités",
  "Matrice de risques (probabilité × impact)",
  "Plan de remédiation avec priorités",
  "Roadmap sécurité à 12 mois",
  "Attestation d'audit (appels d'offres)",
  "Suivi de la remédiation inclus",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Audit de sécurité informatique",
  "provider": { "@type": "Organization", "name": "CybersécuritéPublique.fr" },
  "description": "Audit de sécurité SI pour collectivités et établissements de santé. Qualifié PASSI ANSSI. Rapport en 10 jours.",
};

export default function Audit() {
  return (
    <>
      <SEOHead
        title="Audit de Sécurité Informatique — Qualifié PASSI ANSSI"
        description="Audit de sécurité SI complet pour collectivités et secteur santé. Qualifié PASSI ANSSI, conformité NIS2. Rapport détaillé + plan d'action en 10 jours. Devis gratuit."
        canonical="/services/audit"
        jsonLd={jsonLd}
      />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="section-tag mb-6"><Search className="w-3.5 h-3.5" /> Audit & diagnostic</div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Audit de sécurité informatique <span className="text-gradient">qualifié PASSI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              Identifiez vos vulnérabilités avant que les attaquants ne les exploitent. Nos auditeurs qualifiés PASSI ANSSI
              réalisent des audits complets avec rapport de conformité NIS2 en 10 jours ouvrés.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Devis gratuit en 24h <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {[
              { val: "PASSI", label: "Qualifié ANSSI" },
              { val: "10j", label: "Délai de livraison" },
              { val: "200+", label: "Audits réalisés" },
              { val: "100%", label: "Clients satisfaits" },
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

      {/* Process */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Clock className="w-3.5 h-3.5" /> Notre méthode</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Notre processus d'audit en 4 étapes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6">
                <div className="text-4xl font-bold text-primary/20 font-heading mb-4">{s.num}</div>
                <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="section-tag mb-6"><FileText className="w-3.5 h-3.5" /> Livrables</div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ce que vous recevez à la fin de l'audit
              </h2>
              <ul className="space-y-3">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="glass rounded-2xl p-8 border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Qualification PASSI ANSSI</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Le label PASSI (Prestataire d'Audit de la Sécurité des Systèmes d'Information) est la qualification la plus exigeante
                délivrée par l'ANSSI pour les activités d'audit de sécurité. Elle garantit le sérieux et la compétence de nos auditeurs.
              </p>
              <p className="text-sm text-muted-foreground">
                Nos rapports sont acceptés par les autorités de contrôle (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prêt à connaître votre niveau de sécurité réel ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Devis personnalisé gratuit en moins de 24h. Nos auditeurs PASSI sont disponibles immédiatement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base">Devis gratuit <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:+33100000000" className="btn-secondary text-base"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
          </div>
        </div>
      </section>
    </>
  );
}
