import { motion } from "framer-motion";
import { Shield, FileText, CheckCircle, ArrowRight, Phone, AlertTriangle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const obligations = [
  "Gouvernance de la sécurité des SI",
  "Gestion des risques cyber",
  "Sécurité de la chaîne d'approvisionnement",
  "Sécurité des réseaux et des systèmes",
  "Gestion des incidents et déclaration en 72h",
  "Continuité des activités (PCA/PRA)",
  "Cryptographie et chiffrement",
  "Contrôle des accès et authentification forte",
  "Formation et sensibilisation du personnel",
  "Politique de divulgation des vulnérabilités",
];

const steps = [
  { num: "01", title: "Diagnostic NIS2", desc: "Évaluation de votre niveau de maturité actuel face aux 10 domaines NIS2. Identification des écarts critiques." },
  { num: "02", title: "Plan de mise en conformité", desc: "Feuille de route priorisée avec budget estimé. Décision des mesures à implémenter par ordre de criticité." },
  { num: "03", title: "Implémentation", desc: "Déploiement des mesures techniques et organisationnelles. Documentation PSSI, procédures, contrats fournisseurs." },
  { num: "04", title: "Déclaration ANSSI", desc: "Accompagnement pour la déclaration sur le portail MonEspaceNIS2. Suivi de la conformité continue." },
];

export default function Nis2() {
  return (
    <>
      <SEOHead
        title="Conformité NIS2 Secteur Public — Collectivités et Hôpitaux"
        description="Accompagnement conformité NIS2 pour collectivités et établissements de santé. Diagnostic, plan d'action, déclaration ANSSI. Expert NIS2 certifié. Délai octobre 2026."
        canonical="/services/nis2"
      />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-primary/5" />
        <div className="container mx-auto px-6 relative">
          <div className="glass border-orange-500/30 bg-orange-500/5 rounded-xl px-5 py-3 flex items-center gap-3 w-fit mb-8">
            <AlertTriangle className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300 font-medium">Délai de conformité : 17 octobre 2026 — Il reste moins de 4 mois</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="section-tag mb-6"><FileText className="w-3.5 h-3.5" /> Conformité NIS2</div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Mise en conformité <span className="text-gradient">directive NIS2</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              La directive NIS2 s'applique à toutes les collectivités importantes et aux établissements de santé.
              Nos experts vous accompagnent de l'évaluation initiale jusqu'à la déclaration ANSSI, dans les délais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Diagnostic NIS2 gratuit <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-tag mb-6"><Calendar className="w-3.5 h-3.5" /> Obligations</div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Les 10 domaines de conformité NIS2</h2>
              <ul className="space-y-3">
                {obligations.map((o, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{o}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-8 border-orange-500/20 bg-orange-500/5">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
                <h3 className="font-heading text-xl font-bold text-foreground">Sanctions en cas de non-conformité</h3>
              </div>
              <div className="space-y-4">
                <div className="border-b border-border/30 pb-4">
                  <div className="text-sm font-medium text-foreground mb-1">Entités essentielles (CHU, grandes collectivités)</div>
                  <div className="text-2xl font-bold text-orange-400">10 M€ ou 2% du budget</div>
                </div>
                <div className="border-b border-border/30 pb-4">
                  <div className="text-sm font-medium text-foreground mb-1">Entités importantes (hôpitaux locaux, intercommunalités)</div>
                  <div className="text-2xl font-bold text-orange-400">7 M€ ou 1,4% du budget</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground mb-1">Obligation de déclaration d'incident</div>
                  <div className="text-2xl font-bold text-orange-400">72 heures max</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Shield className="w-3.5 h-3.5" /> Méthode</div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Notre accompagnement NIS2 en 4 phases</h2>
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

      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Êtes-vous prêt pour octobre 2026 ?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Diagnostic NIS2 gratuit en 48h. Obtenez votre score de conformité et les 3 actions prioritaires à mener.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base">Diagnostic gratuit <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:+33100000000" className="btn-secondary text-base"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
          </div>
        </div>
      </section>
    </>
  );
}
