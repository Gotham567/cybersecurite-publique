import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, ArrowRight, Phone, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const modules = [
  { title: "Sensibilisation aux cybermenaces", audience: "Tous agents", duration: "2h", desc: "Phishing, ransomware, ingénierie sociale : reconnaître et signaler les menaces. Format e-learning + quiz.", color: "hsl(213 94% 58%)" },
  { title: "Hygiène informatique au quotidien", audience: "Tous agents", duration: "1h30", desc: "Mots de passe, mises à jour, Wi-Fi public, clés USB : les bons réflexes au bureau et en télétravail.", color: "hsl(213 94% 58%)" },
  { title: "RGPD pour agents publics", audience: "Personnels admin", duration: "3h", desc: "Droits des citoyens, bases légales, minimisation des données, déclarations CNIL. Formation certifiante.", color: "hsl(158 64% 50%)" },
  { title: "Cybersécurité pour élus", audience: "Élus, CODIR", duration: "2h", desc: "Risques pour la collectivité, responsabilité juridique, prise de décision en cas de crise. Format séminaire.", color: "hsl(270 70% 65%)" },
  { title: "Formation DSI/RSSI", audience: "Équipes techniques", duration: "5j", desc: "Configuration sécurisée AD, gestion des accès, monitoring SIEM, réponse à incidents. Niveau expert.", color: "hsl(213 94% 58%)" },
  { title: "Exercice de crise cyber", audience: "Direction, DSI, élus", duration: "1 journée", desc: "Simulation d'attaque réaliste (ransomware). Prise de décision sous pression, communication de crise.", color: "rgba(239,68,68,0.8)" },
];

const heroStats = [
  { val: "QUALIOPI", label: "Certification organisme de formation" },
  { val: "5 000+", label: "agents formés" },
  { val: "90%", label: "satisfaction participants" },
  { val: "NIS2", label: "obligation de formation" },
];

export default function Formation() {
  return (
    <>
      <SEOHead
        title="Formation Cybersécurité Agents Publics — Collectivités et Hôpitaux"
        description="Formations cybersécurité pour agents publics, élus et personnels de santé. E-learning, présentiel, exercices de crise. Certifiante QUALIOPI. NIS2 obligatoire."
        canonical="/services/formation"
      />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 30% 20%, hsl(158 64% 44% / 0.1) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="dot-live" />
              <div className="section-tag"><BookOpen className="w-3 h-3" /> Formation agents</div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
              Formation cybersécurité{" "}
              <span className="text-gradient">pour agents publics</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-9 leading-relaxed max-w-3xl">
              90% des cyberattaques réussies impliquent une erreur humaine. La formation est l'investissement cybersécurité
              le plus rentable. Nos programmes sont conçus pour le secteur public et certifiés QUALIOPI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Demander un programme <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {heroStats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.1 }}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "hsl(224 42% 7% / 0.85)",
                  border: "1px solid hsl(158 64% 44% / 0.12)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)"
                }}>
                <div className="font-heading font-black text-2xl leading-none mb-2"
                  style={{ background: "linear-gradient(135deg, hsl(158 64% 62%), hsl(142 60% 68%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.val}
                </div>
                <div className="text-xs text-muted-foreground leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-6">
        <div className="divider-glow mb-20" />
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fade()} className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><Users className="w-3 h-3" /> Catalogue</div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Nos modules de formation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chaque module est disponible en présentiel, distanciel ou e-learning asynchrone. Tous adaptables à votre contexte.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m, i) => (
              <motion.div key={i} {...fade(i * 0.08)}>
                <div className="card-premium p-6 h-full">
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{ background: `${m.color}14`, border: `1px solid ${m.color}25`, color: m.color }}>
                          {m.audience}
                        </span>
                        <h3 className="font-heading font-bold text-foreground mt-2">{m.title}</h3>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0 ml-3">
                        <Clock className="w-3.5 h-3.5" /> {m.duration}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 pb-28 px-6">
        <div className="divider-glow mb-16" />
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fade()}>
            <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(158 50% 8%), hsl(224 50% 7%))",
                border: "1px solid hsl(158 64% 44% / 0.22)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)"
              }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, hsl(158 64% 55% / 0.5), transparent)" }} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ background: "hsl(158 64% 44% / 0.12)", border: "1px solid hsl(158 64% 44% / 0.25)" }}>
                  <Award className="w-8 h-8" style={{ color: "hsl(158 64% 60%)" }} />
                </div>
                <h2 className="font-heading text-3xl font-black text-white mb-4 tracking-tight">
                  Programme de sensibilisation clé-en-main
                </h2>
                <p className="max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: "hsl(158 30% 70%)" }}>
                  Envoyez-nous vos effectifs et votre contexte. Nous créons un programme sur-mesure avec campagne de phishing simulé,
                  modules e-learning et tableau de bord de suivi pour votre RSSI.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-primary text-base px-8 py-4">Construire mon programme <ArrowRight className="w-4 h-4" /></Link>
                  <a href="tel:+33100000000" className="btn-secondary text-base px-8 py-4"
                    style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}>
                    <Phone className="w-4 h-4" /> 01 00 00 00 00
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
