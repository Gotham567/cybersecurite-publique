import { motion } from "framer-motion"; import { ArrowRight, Phone, Shield, Clock, AlertTriangle } from "lucide-react"; import { Link } from "react-router-dom"; import SEOHead from "../../components/SEOHead";
export default function RansomwareCollectivites() {
  return (<><SEOHead title="Ransomware et Collectivités : Comment se Protéger Efficacement" description="Les ransomwares paralysent des mairies chaque semaine. Comprendre comment ils fonctionnent et les 12 mesures concrètes pour s'en protéger efficacement." canonical="/actualites/ransomware-collectivites-comment-se-proteger" jsonLd={{"@context":"https://schema.org","@type":"Article","headline":"Ransomware collectivités protection","datePublished":"2026-05-02","author":{"@type":"Organization","name":"CybersécuritéPublique.fr"}}} />
  <article className="pt-32 pb-20"><div className="container mx-auto px-6 max-w-4xl">
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
      <div className="flex items-center gap-3 mb-6"><span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">Menaces</span><span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> 14 min</span><span className="text-xs text-muted-foreground">2 mai 2026</span></div>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Ransomware et collectivités : comment se protéger efficacement</h1>
      <p className="text-xl text-muted-foreground mb-10">En 2023, plus de 500 collectivités françaises ont subi une attaque par rançongiciel. Coût moyen : 1,2M€. Durée d'indisponibilité : 3 semaines. Voici comment éviter ce scénario.</p>
    </motion.div>
    <div className="glass rounded-xl p-6 border-orange-500/30 bg-orange-500/5 mb-8 flex gap-4">
      <AlertTriangle className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
      <div><div className="font-semibold text-foreground mb-1">Stat clé</div><p className="text-sm text-muted-foreground">Une collectivité sur 3 victime d'un ransomware n'a pas pu récupérer toutes ses données, même après avoir payé la rançon. Ne payez jamais sans avoir consulté un expert.</p></div>
    </div>
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Comment fonctionne un ransomware en pratique ?</h2>
        {[{n:"J-30 à J-1",t:"Intrusion silencieuse",d:"L'attaquant entre via un email de phishing, une vulnérabilité non patchée ou un credential volé. Il explore le réseau en silence pendant des semaines, cartographie les serveurs, identifie les sauvegardes."},
        {n:"J-1",t:"Préparation de l'attaque",d:"Exfiltration des données sensibles vers un serveur externe (pour le double chantage). Désactivation ou chiffrement des sauvegardes connues. Propagation du ransomware à tous les systèmes."},
        {n:"Jour J, 3h du matin",t:"Déclenchement synchronisé",d:"À une heure où personne n'est là, le ransomware se déclenche sur tous les systèmes simultanément. Le matin, les agents arrivent et leurs écrans affichent la demande de rançon."},
        {n:"J+1 à J+90",t:"Gestion de crise",d:"Retour au papier, communication de crise, négociation ou non avec les attaquants, reconstruction du SI. Coût moyen : 5x la rançon demandée."}].map((s,i)=>(<div key={i} className="glass rounded-xl p-5 flex gap-4 mb-4"><div className="text-xs font-mono text-destructive bg-destructive/10 px-2 py-1 rounded h-fit shrink-0">{s.n}</div><div><h4 className="font-semibold text-foreground mb-1">{s.t}</h4><p className="text-sm">{s.d}</p></div></div>))}
      </section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Les 12 mesures anti-ransomware pour les collectivités</h2>
        <div className="grid md:grid-cols-2 gap-4">{[
          "Sauvegardes 3-2-1 avec copie hors ligne",
          "Mise à jour systématique sous 72h des patches critiques",
          "Segmentation réseau (administration/production/IOBT)",
          "MFA sur tous les accès distants (VPN, webmail, admin)",
          "Filtrage des emails entrants (anti-phishing, anti-spam)",
          "EDR sur tous les postes de travail et serveurs",
          "Politique de moindre privilège (utilisateurs sans droits admin)",
          "Désactivation des macros Office par GPO",
          "Audit des accès distants (RDP exposé = dangereux)",
          "Formation phishing simulé des agents 2x/an",
          "Plan de réponse aux incidents documenté et testé",
          "Abonnement SOC ou CERT pour détection précoce",
        ].map((m,i)=>(<div key={i} className="flex items-center gap-3 glass rounded-lg p-3"><div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">{i+1}</div><span className="text-sm">{m}</span></div>))}</div>
      </section>
    </div>
    <div className="mt-14 glass rounded-2xl p-8 border-primary/20 text-center">
      <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
      <h3 className="font-heading text-xl font-bold text-foreground mb-3">Évaluez votre résistance aux ransomwares</h3>
      <p className="text-muted-foreground mb-6 text-sm">Audit anti-ransomware spécifique collectivités. Score de résistance + plan de durcissement en 5 jours.</p>
      <div className="flex flex-wrap justify-center gap-4"><Link to="/contact" className="btn-primary">Audit gratuit <ArrowRight className="w-4 h-4" /></Link><a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a></div>
    </div>
  </div></article></>);
}
