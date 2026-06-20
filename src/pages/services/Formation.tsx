import { motion } from "framer-motion";
import { Shield, BookOpen, CheckCircle, ArrowRight, Phone, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const modules = [
  { title: "Sensibilisation aux cybermenaces", audience: "Tous agents", duration: "2h", desc: "Phishing, ransomware, ingénierie sociale : reconnaître et signaler les menaces. Format e-learning + quiz." },
  { title: "Hygiène informatique au quotidien", audience: "Tous agents", duration: "1h30", desc: "Mots de passe, mises à jour, Wi-Fi public, clés USB : les bons réflexes au bureau et en télétravail." },
  { title: "RGPD pour agents publics", audience: "Personnels admin", duration: "3h", desc: "Droits des citoyens, bases légales, minimisation des données, déclarations CNIL. Formation certifiante." },
  { title: "Cybersécurité pour élus", audience: "Élus, CODIR", duration: "2h", desc: "Risques pour la collectivité, responsabilité juridique, prise de décision en cas de crise. Format séminaire." },
  { title: "Formation DSI/RSSI", audience: "Équipes techniques", duration: "5j", desc: "Configuration sécurisée AD, gestion des accès, monitoring SIEM, réponse à incidents. Niveau expert." },
  { title: "Exercice de crise cyber", audience: "Direction, DSI, élus", duration: "1 journée", desc: "Simulation d'attaque réaliste (ransomware sur SIH/SI municipal). Prise de décision sous pression, communication de crise." },
];

export default function Formation() {
  return (
    <>
      <SEOHead
        title="Formation Cybersécurité Agents Publics — Collectivités et Hôpitaux"
        description="Formations cybersécurité pour agents publics, élus et personnels de santé. E-learning, présentiel, exercices de crise. Certifiante QUALIOPI. NIS2 obligatoire."
        canonical="/services/formation"
      />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="section-tag mb-6"><BookOpen className="w-3.5 h-3.5" /> Formation agents</div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Formation cybersécurité <span className="text-gradient">pour agents publics</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              90% des cyberattaques réussies impliquent une erreur humaine. La formation est l'investissement cybersécurité
              le plus rentable. Nos programmes sont conçus pour le secteur public et certifiés QUALIOPI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Demander un programme <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {[
              { val: "QUALIOPI", label: "Certification organisme de formation" },
              { val: "5 000+", label: "agents formés" },
              { val: "90%", label: "satisfaction participants" },
              { val: "NIS2", label: "obligation de formation" },
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

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Users className="w-3.5 h-3.5" /> Catalogue</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Nos modules de formation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Chaque module est disponible en présentiel, distanciel ou e-learning asynchrone. Tous adaptables au contexte de votre structure.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs text-primary font-mono">{m.audience}</span>
                    <h3 className="font-heading font-bold text-foreground mt-1">{m.title}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0 ml-4">
                    <Clock className="w-3.5 h-3.5" /> {m.duration}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="glass rounded-2xl p-10 text-center border-secondary/20">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 mx-auto">
              <Award className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Programme de sensibilisation clé-en-main
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Envoyez-nous vos effectifs et votre contexte. Nous créons un programme sur-mesure avec campagne de phishing simulé,
              modules e-learning et tableau de bord de suivi pour votre RSSI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base">Construire mon programme <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary text-base"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
