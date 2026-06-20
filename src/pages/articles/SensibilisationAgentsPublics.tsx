import { motion } from "framer-motion"; import { ArrowRight, Phone, Shield, Clock } from "lucide-react"; import { Link } from "react-router-dom"; import SEOHead from "../../components/SEOHead";
export default function SensibilisationAgentsPublics() {
  return (<><SEOHead title="Sensibilisation des Agents Publics à la Cybersécurité — Méthodes Efficaces" description="Comment former efficacement vos agents publics à la cybersécurité. Campagnes phishing simulé, e-learning, présentiel. NIS2 impose la formation obligatoire." canonical="/actualites/sensibilisation-agents-publics-cybersecurite" jsonLd={{"@context":"https://schema.org","@type":"Article","headline":"Sensibilisation agents publics cybersécurité","datePublished":"2026-05-10","author":{"@type":"Organization","name":"CybersécuritéPublique.fr"}}} />
  <article className="pt-32 pb-20"><div className="container mx-auto px-6 max-w-4xl">
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
      <div className="flex items-center gap-3 mb-6"><span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">Formation</span><span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> 9 min</span><span className="text-xs text-muted-foreground">10 mai 2026</span></div>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Sensibilisation des agents publics à la cybersécurité</h1>
      <p className="text-xl text-muted-foreground mb-10">90% des cyberattaques exploitent une erreur humaine. Former vos agents est l'investissement cybersécurité le plus rentable et désormais obligatoire avec NIS2.</p>
    </motion.div>
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Pourquoi les formations classiques ne suffisent pas</h2><p>Les formations annuelles de 2 heures sur PowerPoint ont un taux de rétention de moins de 10% après 3 mois. Les études montrent que les agents retournent à leurs comportements risqués dans les semaines suivant une formation passive. La clé : répétition, mise en pratique et personnalisation au contexte métier.</p></section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">La méthode qui fonctionne : le programme en 3 phases</h2>
        {[{n:"Phase 1",t:"Test de référence : phishing simulé",d:"Avant toute formation, envoyez une campagne de phishing simulé à l'ensemble des agents. Mesurez le taux de clic. Ce chiffre est votre point de départ et votre indicateur de succès. En moyenne, 35% des agents cliquent sur un email de phishing avant formation."},
        {n:"Phase 2",t:"Formation ciblée par profil",d:"Agents de bureau : 45 min e-learning sur les 5 menaces les plus courantes (phishing, pièce jointe malveillante, faux RIB, ransomware, credential stuffing). Équipes IT : formation technique sur la gestion des incidents, analyse des logs. Élus et direction : séminaire de 2h sur la responsabilité, gestion de crise, prise de décision."},
        {n:"Phase 3",t:"Test de confirmation + ancrage",d:"Nouveau phishing simulé 3 mois après la formation. Objectif : moins de 5% de clic. Rapports individualisés envoyés aux managers. Micro-formations mensuelles de 5 minutes pour maintenir la vigilance."}].map((p,i)=>(<div key={i} className="glass rounded-xl p-5 flex gap-4 mb-4"><div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded h-fit shrink-0">{p.n}</div><div><h4 className="font-semibold text-foreground mb-1">{p.t}</h4><p className="text-sm">{p.d}</p></div></div>))}
      </section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Les 5 thèmes prioritaires pour le secteur public</h2>
        <div className="grid md:grid-cols-2 gap-4">{[{t:"Phishing et hameçonnage",d:"Reconnaître les emails frauduleux, les faux virements, les faux accès DSI"},
        {t:"Mots de passe",d:"Gestionnaire de mots de passe, authentification multi-facteurs, politique de rotation"},
        {t:"Télétravail",d:"Wi-Fi sécurisé, VPN obligatoire, impression et destruction sécurisée de documents"},
        {t:"Données citoyens et RGPD",d:"Ce qu'on peut envoyer par email, comment répondre à une demande de droit d'accès"},
        {t:"Signalement d'incident",d:"À qui signaler, que dire, que ne pas faire (ne pas éteindre la machine)"},
        {t:"Ingénierie sociale",d:"Appels téléphoniques frauduleux se faisant passer pour l'informatique, le DGS, un élu"}].map((t,i)=>(<div key={i} className="glass rounded-lg p-4"><div className="font-semibold text-foreground text-sm mb-1">{t.t}</div><div className="text-xs text-muted-foreground">{t.d}</div></div>))}</div>
      </section>
    </div>
    <div className="mt-14 glass rounded-2xl p-8 border-primary/20 text-center">
      <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
      <h3 className="font-heading text-xl font-bold text-foreground mb-3">Programme de sensibilisation sur-mesure</h3>
      <p className="text-muted-foreground mb-6 text-sm">Campagne phishing simulé + modules e-learning + tableau de bord RSSI. Certifié QUALIOPI. Dès 5€/agent/an.</p>
      <div className="flex flex-wrap justify-center gap-4"><Link to="/contact" className="btn-primary">Demander un devis <ArrowRight className="w-4 h-4" /></Link><a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a></div>
    </div>
  </div></article></>);
}
