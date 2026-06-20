import { motion } from "framer-motion"; import { ArrowRight, Phone, Shield, Clock } from "lucide-react"; import { Link } from "react-router-dom"; import SEOHead from "../../components/SEOHead";
export default function GouvernanceCyberSecteurPublic() {
  return (<><SEOHead title="Gouvernance Cybersécurité dans le Secteur Public — Guide du DSI" description="Comment mettre en place une gouvernance cyber efficace dans une collectivité ou un hôpital. RSSI, PSSI, comité de sécurité, reporting élus. Guide complet." canonical="/actualites/gouvernance-cyber-secteur-public-guide" jsonLd={{"@context":"https://schema.org","@type":"Article","headline":"Gouvernance cybersécurité secteur public","datePublished":"2026-04-14","author":{"@type":"Organization","name":"CybersécuritéPublique.fr"}}} />
  <article className="pt-32 pb-20"><div className="container mx-auto px-6 max-w-4xl">
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
      <div className="flex items-center gap-3 mb-6"><span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">Gouvernance</span><span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> 12 min</span><span className="text-xs text-muted-foreground">14 avril 2026</span></div>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Gouvernance cybersécurité dans le secteur public : le guide du DSI</h1>
      <p className="text-xl text-muted-foreground mb-10">La gouvernance cyber, c'est l'organisation qui permet de prendre les bonnes décisions de sécurité, au bon moment, avec les bons interlocuteurs. Voici comment la structurer dans une collectivité ou un hôpital.</p>
    </motion.div>
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Les 4 piliers de la gouvernance cyber publique</h2>
        {[{t:"1. Un RSSI identifié et légitime",d:"NIS2 impose la désignation d'un responsable de la sécurité des SI. Dans les collectivités, c'est souvent le DSI qui cumule les rôles — problème : le DSI est à la fois juge et partie. Idéalement, le RSSI rapporte directement au DGS ou au Directeur, pas au DSI."},
        {t:"2. Une PSSI adaptée au secteur public",d:"La Politique de Sécurité des Systèmes d'Information doit être approuvée par la direction ou l'exécutif de la collectivité. Elle définit les règles, les responsabilités et les sanctions. Elle doit être révisée annuellement et après chaque incident."},
        {t:"3. Un comité de sécurité opérationnel",d:"Réunion mensuelle DSI + RSSI + DGS. Ordre du jour type : incidents du mois, état de la roadmap sécurité, décisions budgétaires, revue des fournisseurs à risque. Ce comité est l'instance de pilotage, pas de technique."},
        {t:"4. Un reporting adapté aux élus",d:"Les élus et directeurs ne sont pas des techniciens. Le RSSI doit traduire les risques cyber en risques métiers : 'Si nous subissons un ransomware, voici l'impact sur le service des impôts locaux pendant 3 semaines...'"}].map((p,i)=>(<div key={i} className="glass rounded-xl p-5 mb-4"><h4 className="font-semibold text-foreground mb-2">{p.t}</h4><p className="text-sm">{p.d}</p></div>))}
      </section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Les 5 documents indispensables</h2>
        <div className="grid md:grid-cols-2 gap-4">{[{t:"PSSI",d:"Politique de Sécurité des SI - le document fondateur"},
        {t:"Cartographie du SI",d:"Inventaire des actifs avec leur niveau de criticité"},
        {t:"Plan de traitement des risques",d:"Liste des risques identifiés et mesures associées"},
        {t:"PCA/PRA",d:"Procédures de continuité et reprise d'activité"},
        {t:"Procédure de gestion des incidents",d:"Qui fait quoi, dans quel ordre, en cas d'incident"},
        {t:"Registre des prestataires",d:"Liste des tiers avec accès au SI et leur niveau de confiance"}].map((d,i)=>(<div key={i} className="glass rounded-lg p-4"><div className="font-semibold text-foreground text-sm mb-1">{d.t}</div><div className="text-xs">{d.d}</div></div>))}</div>
      </section>
    </div>
    <div className="mt-14 glass rounded-2xl p-8 border-primary/20 text-center">
      <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
      <h3 className="font-heading text-xl font-bold text-foreground mb-3">Structurez votre gouvernance cyber avec nos experts</h3>
      <p className="text-muted-foreground mb-6 text-sm">RSSI externalisé, rédaction PSSI, mise en place du comité de sécurité. Accompagnement complet et opérationnel.</p>
      <div className="flex flex-wrap justify-center gap-4"><Link to="/contact" className="btn-primary">Nous contacter <ArrowRight className="w-4 h-4" /></Link><a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a></div>
    </div>
  </div></article></>);
}
