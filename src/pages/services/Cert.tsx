import { motion } from "framer-motion";
import { Shield, AlertOctagon, CheckCircle, ArrowRight, Phone, Clock, Zap, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const phases = [
  { num: "01", title: "Détection", time: "Permanent", desc: "SOC 24/7 avec corrélation d'événements (SIEM). Alertes en temps réel sur comportements anormaux, nouvelles vulnérabilités et IOC." },
  { num: "02", title: "Qualification", time: "< 30 min", desc: "Analyse de l'alerte par nos experts CERT. Confirmation de l'incident, évaluation de la criticité, activation de la cellule de crise si nécessaire." },
  { num: "03", title: "Confinement", time: "< 2h", desc: "Isolation des systèmes compromis, coupure de l'accès attaquant, préservation des preuves numériques (forensique)." },
  { num: "04", title: "Remédiation", time: "Variable", desc: "Nettoyage des systèmes, reconstruction si nécessaire, patch des vulnérabilités exploitées, durcissement des configurations." },
  { num: "05", title: "Rétablissement", time: "Priorité vie", desc: "Remise en service par ordre de criticité (fonctions vitales en premier pour les hôpitaux). Test de bon fonctionnement." },
  { num: "06", title: "Retour d'expérience", time: "J+30", desc: "Rapport complet sur l'incident, chronologie, cause racine, mesures correctives. Déclaration ANSSI/CNIL si obligatoire." },
];

export default function Cert() {
  return (
    <>
      <SEOHead
        title="CERT & Réponse aux Incidents Cyber — Secteur Public 24/7"
        description="CERT dédié secteur public et santé. SOC 24/7, réponse aux incidents en moins de 4h, gestion de crise ransomware, déclaration ANSSI. Intervention immédiate."
        canonical="/services/cert"
      />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-transparent to-primary/5" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="section-tag mb-6"><AlertOctagon className="w-3.5 h-3.5" /> CERT & incidents</div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              CERT & réponse aux incidents <span className="text-gradient">24h/7j</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              En cas de cyberattaque, chaque minute compte. Notre CERT dédié au secteur public intervient
              en moins de 4 heures sur site. SOC 24/7, gestion de crise, forensique numérique et déclaration réglementaire.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+33100000000" className="btn-primary">
                <Phone className="w-4 h-4" /> Urgence cyber 24/7
              </a>
              <Link to="/contact" className="btn-secondary">Nous contacter <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {[
              { val: "24/7", label: "SOC opérationnel" },
              { val: "< 4h", label: "Intervention sur site" },
              { val: "72h", label: "Déclaration ANSSI facilitée" },
              { val: "100%", label: "Incidents résolus" },
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

      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Clock className="w-3.5 h-3.5" /> Process CERT</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Notre process de réponse aux incidents</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-primary/20 font-heading">{p.num}</div>
                  <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">{p.time}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 border-primary/20">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Radio className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">SOC 24/7 en abonnement</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Surveillance continue de vos systèmes sans avoir à recruter une équipe interne.
                SIEM managé, corrélation d'événements, threat intelligence, tableaux de bord RSSI.
              </p>
              <ul className="space-y-2">
                {["Surveillance 24/7/365", "SIEM + EDR managé", "Threat intelligence en temps réel", "Rapport mensuel RSSI", "SLA garanti contractuellement"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-8 border-destructive/20 bg-destructive/5">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Intervention d'urgence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Vous êtes victime d'une cyberattaque en ce moment ? Notre équipe CERT est disponible immédiatement.
                Appelez notre numéro d'urgence cyber disponible 24h/24 et 7j/7.
              </p>
              <a href="tel:+33100000000" className="btn-primary w-full justify-center">
                <Phone className="w-4 h-4" /> Urgence : 01 00 00 00 00
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
