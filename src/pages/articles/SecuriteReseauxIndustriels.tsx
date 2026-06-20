import { motion } from "framer-motion"; import { ArrowRight, Phone, Shield, Clock, Cpu } from "lucide-react"; import { Link } from "react-router-dom"; import SEOHead from "../../components/SEOHead";
export default function SecuriteReseauxIndustriels() {
  return (<><SEOHead title="Sécurité des Réseaux Industriels SCADA et OT — Enjeux 2026" description="La convergence IT/OT expose vos automates et SCADA à des cybermenaces critiques. IEC 62443, segmentation IT/OT, pentest OT non-intrusif. Guide expert industrie." canonical="/actualites/securite-reseaux-industriels-scada-ot" jsonLd={{"@context":"https://schema.org","@type":"Article","headline":"Sécurité réseaux industriels SCADA OT","datePublished":"2026-04-22","author":{"@type":"Organization","name":"CybersécuritéPublique.fr"}}} />
  <article className="pt-32 pb-20"><div className="container mx-auto px-6 max-w-4xl">
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
      <div className="flex items-center gap-3 mb-6"><span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">OT/SCADA</span><span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> 16 min</span><span className="text-xs text-muted-foreground">22 avril 2026</span></div>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Sécurité des réseaux industriels SCADA et OT : les enjeux 2026</h1>
      <p className="text-xl text-muted-foreground mb-10">La convergence entre réseaux IT bureautiques et réseaux OT industriels crée une surface d'attaque considérable. Les conséquences peuvent être physiques et irréversibles.</p>
    </motion.div>
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">IT vs OT : deux mondes qui convergent dangereusement</h2>
        <div className="grid md:grid-cols-2 gap-6 my-4">
          <div className="glass rounded-xl p-5 border-primary/20"><h3 className="font-semibold text-foreground mb-3">Réseaux IT (bureautique)</h3><ul className="text-sm space-y-1"><li>• Cycles de mise à jour courts (mois)</li><li>• Disponibilité moins prioritaire que la confidentialité</li><li>• Arrêt possible pour maintenance</li><li>• Standards TCP/IP classiques</li></ul></div>
          <div className="glass rounded-xl p-5 border-orange-500/20"><h3 className="font-semibold text-foreground mb-3">Réseaux OT (industriels)</h3><ul className="text-sm space-y-1"><li>• Durée de vie 15-25 ans, mises à jour rares</li><li>• Disponibilité = priorité absolue (arrêt = catastrophe)</li><li>• Impossible d'arrêter pour patcher</li><li>• Protocoles propriétaires (Modbus, PROFINET, BACnet)</li></ul></div>
        </div>
        <p>Cette différence fondamentale rend l'application des pratiques IT standard directement aux réseaux OT dangereuse — un scan de vulnérabilités standard peut bloquer un automate industriel.</p>
      </section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">La norme IEC 62443 : le référentiel de la sécurité OT</h2><p>L'IEC 62443 est la norme internationale de référence pour la cybersécurité des systèmes d'automatisation et de contrôle industriels. Elle définit :</p>
        <div className="grid md:grid-cols-2 gap-4 my-4">{[{t:"4 niveaux de sécurité (SL 1-4)",d:"Du système basique (SL1) au système résistant aux attaquants état-nation (SL4)"},
        {t:"Zones et conduits",d:"Architecture de segmentation des réseaux industriels en zones isolées avec points d'échange contrôlés"},
        {t:"Gestion des risques OT",d:"Méthode d'évaluation des risques spécifique aux systèmes industriels, différente de l'ISO 27001 IT"},
        {t:"Exigences fournisseurs",d:"Obligations pour les constructeurs d'automates et logiciels SCADA (Secure by Design)"}].map((c,i)=>(<div key={i} className="glass rounded-lg p-4"><div className="font-semibold text-foreground text-sm mb-1">{c.t}</div><div className="text-xs">{c.d}</div></div>))}</div>
      </section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Les 7 mesures prioritaires pour sécuriser un réseau OT</h2>
        {["Cartographier exhaustivement tous les équipements OT (automates, IHM, capteurs)","Segmenter physiquement les réseaux IT et OT avec une DMZ industrielle","Auditer et fermer tous les accès distants non documentés vers les OT","Mettre en place un monitoring passif (type Claroty, Dragos) des réseaux OT","Former les équipes de production aux enjeux cyber sans jargon IT","Définir et tester des procédures de mode dégradé si le SCADA est compromis","Audit sécurité OT annuel par un prestataire spécialisé IEC 62443"].map((m,i)=>(
          <div key={i} className="glass rounded-xl p-4 flex gap-3 mb-3"><div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">{i+1}</div><span className="text-sm">{m}</span></div>
        ))}
      </section>
    </div>
    <div className="mt-14 glass rounded-2xl p-8 border-primary/20 text-center">
      <Cpu className="w-8 h-8 text-primary mx-auto mb-4" />
      <h3 className="font-heading text-xl font-bold text-foreground mb-3">Audit OT sans interruption de production</h3>
      <p className="text-muted-foreground mb-6 text-sm">Notre méthode d'audit OT non-intrusive évalue la sécurité de vos automates et SCADA sans stopper la production.</p>
      <div className="flex flex-wrap justify-center gap-4"><Link to="/contact" className="btn-primary">Audit OT gratuit <ArrowRight className="w-4 h-4" /></Link><a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a></div>
    </div>
  </div></article></>);
}
