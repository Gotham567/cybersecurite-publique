import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const attacks = [
  { name: "CH Corbeil-Essonnes", date: "Août 2022", attacker: "RAGNAR LOCKER", rançon: "1 000 000 €", impact: "Données patients publiées sur darkweb, transferts de patients, retour au papier 3 mois", duree: "3 mois" },
  { name: "CHU Rennes", date: "Juin 2023", attacker: "Groupe APT non identifié", rançon: "N/A", impact: "8 To de données exfiltrés, 2 500 agents impactés, coût estimé 3M€", duree: "2 mois" },
  { name: "CH Arles", date: "Mars 2023", attacker: "Ransomware LockBit", rançon: "500 000 €", impact: "SI paralysé 6 semaines, retour total au papier, chirurgies reportées", duree: "6 semaines" },
  { name: "AP-HP Paris", date: "2022–2024", attacker: "Multiples groupes", rançon: "N/A", impact: "3 incidents majeurs, 1,4M patients concernés, enquête CNIL ouverte", duree: "Récurrent" },
  { name: "CH Versailles – André Mignot", date: "Déc. 2022", attacker: "LOCKBIT 3.0", rançon: "Non divulguée", impact: "Systèmes d'urgence perturbés, patients transférés vers d'autres hôpitaux", duree: "4 semaines" },
];

export default function CyberattaquesHopitauxFrance() {
  return (
    <>
      <SEOHead
        title="Bilan 2025-2026 des Cyberattaques contre les Hôpitaux Français"
        description="Analyse complète des cyberattaques contre les hôpitaux français. CH Corbeil-Essonnes, CHU Rennes, AP-HP... Chronologie, impacts et leçons à retenir pour le secteur santé."
        canonical="/actualites/cyberattaques-hopitaux-france-bilan"
        jsonLd={{ "@context": "https://schema.org", "@type": "Article", "headline": "Bilan des cyberattaques contre les hôpitaux français", "datePublished": "2026-06-08", "author": { "@type": "Organization", "name": "CybersécuritéPublique.fr" } }}
      />
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">Santé</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> 10 min</span>
              <span className="text-xs text-muted-foreground">8 juin 2026</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Bilan 2025-2026 : les cyberattaques contre les hôpitaux français
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Depuis 2022, les établissements hospitaliers français sont sous le feu des cyberattaques. Voici l'analyse complète des incidents majeurs, leurs impacts réels et les enseignements à en tirer.
            </p>
          </motion.div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Pourquoi les hôpitaux sont-ils ciblés ?</h2>
              <p>Trois facteurs font des hôpitaux des cibles privilégiées :</p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-sm">
                <li><strong className="text-foreground">La pression d'urgence</strong> : Un hôpital ne peut pas se permettre des jours d'arrêt. Les attaquants savent qu'ils paieront rapidement.</li>
                <li><strong className="text-foreground">Des systèmes obsolètes</strong> : 60% des équipements médicaux connectés fonctionnent sur des OS non supportés (Windows XP, Windows 7).</li>
                <li><strong className="text-foreground">Des données très lucratives</strong> : Un dossier médical vaut 350€ sur le darkweb contre 5€ pour une carte bancaire.</li>
                <li><strong className="text-foreground">Un budget IT insuffisant</strong> : Les hôpitaux consacrent en moyenne 2-3% de leur budget à l'IT, contre 10-15% dans le secteur privé.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Tableau des principaux incidents</h2>
              <div className="overflow-x-auto">
                <table className="w-full glass rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="border-b border-border/40 bg-primary/5">
                      <th className="text-left px-4 py-3 text-foreground">Établissement</th>
                      <th className="text-left px-4 py-3 text-foreground">Date</th>
                      <th className="text-left px-4 py-3 text-foreground">Impact</th>
                      <th className="text-left px-4 py-3 text-foreground">Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attacks.map((a, i) => (
                      <tr key={i} className={`border-b border-border/20 ${i % 2 === 0 ? "bg-muted/5" : ""}`}>
                        <td className="px-4 py-3 font-medium text-foreground">{a.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{a.date}</td>
                        <td className="px-4 py-3 text-muted-foreground text-xs">{a.impact}</td>
                        <td className="px-4 py-3 text-muted-foreground">{a.duree}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Les 5 leçons à retenir</h2>
              {[
                { num: "1", title: "La sauvegarde hors ligne est vitale", desc: "Dans tous les cas analysés, des sauvegardes étaient présentes mais elles étaient connectées au réseau et ont été chiffrées. La règle 3-2-1 (3 copies, 2 supports différents, 1 hors ligne) est non-négociable." },
                { num: "2", title: "La segmentation réseau sauve des vies", desc: "Les hôpitaux avec une bonne segmentation IT/biomedical ont limité la propagation. Ceux sans segmentation ont tout perdu d'un coup." },
                { num: "3", title: "Les PCA/PRA doivent être testés régulièrement", desc: "Les plans de continuité non testés ne fonctionnent pas en situation réelle. Des exercices annuels minimum sont indispensables." },
                { num: "4", title: "L'authentification multi-facteurs bloque 99% des accès", desc: "La majorité des intrusions initiales passent par du phishing ou des credentials volés. La MFA aurait bloqué ces accès initiaux dans presque tous les cas." },
                { num: "5", title: "Le facteur humain reste la première vulnérabilité", desc: "Dans 85% des cas, le point d'entrée initial est un email de phishing ou une erreur humaine. La formation des agents est l'investissement le plus rentable." },
              ].map((l, i) => (
                <div key={i} className="glass rounded-xl p-5 flex gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">{l.num}</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{l.title}</h4>
                    <p className="text-sm">{l.desc}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="mt-14 glass rounded-2xl p-8 border-primary/20 text-center">
            <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Protégez votre hôpital avant qu'il ne soit trop tard</h3>
            <p className="text-muted-foreground mb-6 text-sm">Audit SIH gratuit en 5 jours. Rapport de conformité HDS et plan de remédiation inclus.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Audit SIH gratuit <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> Urgence 24/7</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
