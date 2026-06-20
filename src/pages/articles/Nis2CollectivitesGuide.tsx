import { motion } from "framer-motion";
import { Shield, ArrowRight, Phone, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "NIS2 pour les collectivités : guide complet 2026",
  "description": "Guide pratique de la directive NIS2 pour les collectivités territoriales. Obligations, sanctions, calendrier et plan d'action.",
  "author": { "@type": "Organization", "name": "CybersécuritéPublique.fr" },
  "datePublished": "2026-06-15",
  "publisher": { "@type": "Organization", "name": "CybersécuritéPublique.fr" },
};

export default function Nis2CollectivitesGuide() {
  return (
    <>
      <SEOHead
        title="NIS2 pour les Collectivités : Guide Complet 2026 — Obligations et Sanctions"
        description="Tout comprendre sur la directive NIS2 pour les collectivités territoriales. Quelles entités sont concernées, quelles obligations, quelles sanctions ? Guide pratique avec plan d'action."
        canonical="/actualites/nis2-collectivites-guide-complet"
        jsonLd={jsonLd}
      />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">NIS2</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> 12 min de lecture</span>
              <span className="text-xs text-muted-foreground">15 juin 2026</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              NIS2 pour les collectivités : guide complet 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              La directive NIS2 est entrée en vigueur en octobre 2024. Les collectivités territoriales ont jusqu'au 17 octobre 2026 pour se mettre en conformité. Voici tout ce que vous devez savoir.
            </p>

            <div className="glass rounded-xl p-6 border-orange-500/30 bg-orange-500/5 mb-10 flex gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground mb-1">Délai critique</div>
                <p className="text-sm text-muted-foreground">La date limite de conformité NIS2 pour les collectivités est le 17 octobre 2026. Il reste moins de 4 mois. Une mise en conformité complète prend en moyenne 6 à 12 mois.</p>
              </div>
            </div>
          </motion.div>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">Qu'est-ce que la directive NIS2 ?</h2>
              <p>La directive NIS2 (Network and Information Security 2) est la mise à jour de la directive NIS originale de 2016. Elle a été adoptée par le Parlement européen en novembre 2022 et transposée en droit français par la loi n°2024-XXX. Son objectif est d'atteindre un niveau élevé commun de cybersécurité dans l'Union européenne.</p>
              <p className="mt-4">Par rapport à NIS1, NIS2 étend considérablement le champ d'application : de 500 entités concernées en France, on passe à environ 15 000 entités, dont une large part relève du secteur public.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">Quelles collectivités sont concernées ?</h2>
              <p>NIS2 distingue deux catégories d'entités :</p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="glass rounded-xl p-5 border-primary/20">
                  <h3 className="font-semibold text-foreground mb-3">Entités essentielles (EE)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Régions</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Départements</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Communes + de 100 000 hab.</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Métropoles et grandes agglos</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> CHU, CHR, GHT importants</li>
                  </ul>
                </div>
                <div className="glass rounded-xl p-5 border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-3">Entités importantes (EI)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Communes de 30 000 à 100 000 hab.</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Communautés d'agglomération</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Hôpitaux locaux importants</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> SDIS (Services Départementaux d'Incendie)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">Les 10 obligations NIS2</h2>
              <p>NIS2 impose 10 domaines de mesures de sécurité à mettre en œuvre :</p>
              <ol className="list-decimal list-inside space-y-3 mt-4">
                {["Politique de sécurité des systèmes d'information (PSSI)", "Gestion des risques cybersécurité", "Sécurité de la chaîne d'approvisionnement", "Sécurité des acquisitions et développements de SI", "Gestion des incidents de sécurité", "Gestion de la continuité d'activité", "Cryptographie et chiffrement", "Sécurité des ressources humaines", "Contrôle des accès et authentification", "Surveillance et journalisation"].map((item, i) => (
                  <li key={i} className="text-sm">{item}</li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">Sanctions en cas de non-conformité</h2>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="glass rounded-xl p-5 border-destructive/20 bg-destructive/5">
                  <div className="text-sm font-medium text-foreground mb-2">Entités essentielles</div>
                  <div className="text-3xl font-bold text-destructive">10 M€</div>
                  <div className="text-sm text-muted-foreground mt-1">ou 2% du budget annuel (le plus élevé des deux)</div>
                </div>
                <div className="glass rounded-xl p-5 border-orange-500/20 bg-orange-500/5">
                  <div className="text-sm font-medium text-foreground mb-2">Entités importantes</div>
                  <div className="text-3xl font-bold text-orange-400">7 M€</div>
                  <div className="text-sm text-muted-foreground mt-1">ou 1,4% du budget annuel (le plus élevé des deux)</div>
                </div>
              </div>
              <p>En plus des amendes, NIS2 prévoit la possibilité de <strong className="text-foreground">mise en cause personnelle des dirigeants</strong> (DGS, directeurs d'hôpitaux) en cas de manquement grave.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">Plan d'action recommandé</h2>
              <div className="space-y-4">
                {[
                  { step: "Étape 1 (immédiate)", title: "Autoévaluation de votre entité", desc: "Utilisez le portail MonEspaceNIS2 de l'ANSSI pour déterminer si vous êtes une entité essentielle ou importante, et enregistrez-vous." },
                  { step: "Étape 2 (1-3 mois)", title: "Diagnostic de sécurité", desc: "Faites réaliser un audit de sécurité par un prestataire qualifié PASSI pour mesurer votre niveau de conformité actuel sur les 10 domaines." },
                  { step: "Étape 3 (3-8 mois)", title: "Plan de remédiation", desc: "Définissez et budgétez les mesures à implémenter par ordre de criticité. Mobilisez les financements disponibles (France Relance, fonds régionaux)." },
                  { step: "Étape 4 (avant oct. 2026)", title: "Déclaration ANSSI", desc: "Déclarez votre mise en conformité sur le portail ANSSI et documentez vos mesures de sécurité." },
                ].map((s, i) => (
                  <div key={i} className="glass rounded-xl p-5 flex gap-4">
                    <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded h-fit shrink-0">{s.step}</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{s.title}</h4>
                      <p className="text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-14 glass rounded-2xl p-8 border-primary/20 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground">Besoin d'aide pour votre conformité NIS2 ?</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">Nos experts réalisent un diagnostic NIS2 complet en 48h et vous fournissent un plan d'action priorisé adapté à votre collectivité.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Diagnostic NIS2 gratuit <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
