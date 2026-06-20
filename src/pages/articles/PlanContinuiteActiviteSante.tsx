import { motion } from "framer-motion"; import { ArrowRight, Phone, Shield, Clock } from "lucide-react"; import { Link } from "react-router-dom"; import SEOHead from "../../components/SEOHead";
export default function PlanContinuiteActiviteSante() {
  return (<><SEOHead title="Plan de Continuité d'Activité (PCA) en Milieu Hospitalier" description="Comment construire un PCA robuste pour garantir la continuité des soins en cas de cyberattaque. Méthode, BIA, RTO/RPO, tests. Guide expert hôpitaux." canonical="/actualites/plan-continuite-activite-sante" jsonLd={{"@context":"https://schema.org","@type":"Article","headline":"PCA hôpital cybersécurité","datePublished":"2026-05-18","author":{"@type":"Organization","name":"CybersécuritéPublique.fr"}}} />
  <article className="pt-32 pb-20"><div className="container mx-auto px-6 max-w-4xl">
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
      <div className="flex items-center gap-3 mb-6"><span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">Santé</span><span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> 13 min</span><span className="text-xs text-muted-foreground">18 mai 2026</span></div>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Plan de Continuité d'Activité en milieu hospitalier : la méthode complète</h1>
      <p className="text-xl text-muted-foreground mb-10">En cas de cyberattaque, un hôpital sans PCA testé risque de ne plus pouvoir soigner ses patients. Voici comment construire et tester un PCA cyber efficace pour votre établissement.</p>
    </motion.div>
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">PCA vs PRA : quelle différence ?</h2>
        <div className="grid md:grid-cols-2 gap-6 my-4">
          <div className="glass rounded-xl p-5 border-primary/20"><h3 className="font-semibold text-foreground mb-2">PCA — Plan de Continuité d'Activité</h3><p className="text-sm">Permet de maintenir les activités essentielles pendant la crise (mode dégradé). L'hôpital continue de fonctionner malgré l'attaque, avec des procédures papier et des systèmes de secours.</p></div>
          <div className="glass rounded-xl p-5 border-secondary/20"><h3 className="font-semibold text-foreground mb-2">PRA — Plan de Reprise d'Activité</h3><p className="text-sm">Décrit comment restaurer les systèmes après la crise. Définit le RTO (Recovery Time Objective) et le RPO (Recovery Point Objective) pour chaque système.</p></div>
        </div>
      </section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">L'analyse d'impact métier (BIA) hospitalière</h2><p>Le BIA (Business Impact Analysis) identifie les processus critiques et leur tolérance à l'indisponibilité :</p>
        <div className="overflow-x-auto my-4"><table className="w-full glass rounded-xl overflow-hidden text-sm"><thead><tr className="border-b border-border/40 bg-primary/5"><th className="text-left px-4 py-3 text-foreground">Processus</th><th className="text-left px-4 py-3 text-foreground">RTO max</th><th className="text-left px-4 py-3 text-foreground">RPO max</th></tr></thead><tbody>
          {[["Urgences / SMUR","0h (jamais indisponible)","15 min"],["Bloc opératoire","30 min","30 min"],["Imagerie médicale","2h","1h"],["DPI (Dossier Patient Informatisé)","4h","1h"],["Pharmacie","2h","30 min"],["Facturation / admissions","24h","4h"]].map((r,i)=>(<tr key={i} className={`border-b border-border/20 ${i%2===0?"bg-muted/5":""}`}><td className="px-4 py-3 font-medium text-foreground">{r[0]}</td><td className="px-4 py-3">{r[1]}</td><td className="px-4 py-3">{r[2]}</td></tr>))}
        </tbody></table></div>
      </section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Les 4 piliers du PCA cyber hospitalier</h2>
        {[{t:"1. Procédures de mode dégradé",d:"Documents papier laminés décrivant les procédures clés sans informatique. Fiches de prescription papier, listes de contacts d'urgence, procédures d'admission manuelle. Ces documents doivent être disponibles physiquement dans chaque service."},
        {t:"2. Architecture de sauvegarde 3-2-1",d:"3 copies des données, 2 supports différents (disque + bande), 1 copie hors ligne déconnectée du réseau. Les ransomwares ne peuvent pas chiffrer ce qui n'est pas connecté. Test de restauration mensuel obligatoire."},
        {t:"3. Système d'information de secours",d:"Un SI minimal isolé permettant de fonctionner en mode dégradé : serveur DHCP/DNS de secours, messagerie de crise, accès aux dossiers patients critiques hors ligne."},
        {t:"4. Exercice de crise annuel",d:"Simulation d'un ransomware sur le SI hospitalier. Activation du PCA, test des procédures papier, communication de crise, décision de payer ou non la rançon. Durée : 4 à 8 heures."}].map((p,i)=>(
          <div key={i} className="glass rounded-xl p-5 mb-4"><h4 className="font-semibold text-foreground mb-2">{p.t}</h4><p className="text-sm">{p.d}</p></div>
        ))}
      </section>
    </div>
    <div className="mt-14 glass rounded-2xl p-8 border-primary/20 text-center">
      <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
      <h3 className="font-heading text-xl font-bold text-foreground mb-3">Construisez votre PCA hospitalier avec nos experts</h3>
      <p className="text-muted-foreground mb-6 text-sm">BIA, rédaction du PCA/PRA, et exercice de crise inclus. Votre plan sera opérationnel en 30 jours.</p>
      <div className="flex flex-wrap justify-center gap-4"><Link to="/contact" className="btn-primary">Devis PCA gratuit <ArrowRight className="w-4 h-4" /></Link><a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a></div>
    </div>
  </div></article></>);
}
