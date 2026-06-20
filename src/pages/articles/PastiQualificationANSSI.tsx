import { motion } from "framer-motion"; import { ArrowRight, Phone, Shield, Clock, Award } from "lucide-react"; import { Link } from "react-router-dom"; import SEOHead from "../../components/SEOHead";
export default function PastiQualificationANSSI() {
  return (<><SEOHead title="PASSI ANSSI : Pourquoi Choisir un Prestataire d'Audit Qualifié" description="La qualification PASSI ANSSI est le gage de qualité pour les audits de sécurité. Comprendre ce qu'elle implique, comment la vérifier et pourquoi c'est essentiel pour les marchés publics." canonical="/actualites/passi-qualification-anssi-prestataires" jsonLd={{"@context":"https://schema.org","@type":"Article","headline":"Qualification PASSI ANSSI prestataires","datePublished":"2026-04-05","author":{"@type":"Organization","name":"CybersécuritéPublique.fr"}}} />
  <article className="pt-32 pb-20"><div className="container mx-auto px-6 max-w-4xl">
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
      <div className="flex items-center gap-3 mb-6"><span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">Réglementation</span><span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> 8 min</span><span className="text-xs text-muted-foreground">5 avril 2026</span></div>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">PASSI ANSSI : pourquoi choisir un prestataire d'audit qualifié</h1>
      <p className="text-xl text-muted-foreground mb-10">La qualification PASSI est la référence absolue pour les prestations d'audit de sécurité en France. Voici ce qu'elle signifie concrètement et pourquoi elle est indispensable pour les organismes publics.</p>
    </motion.div>
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Qu'est-ce que la qualification PASSI ?</h2><p>PASSI signifie "Prestataire d'Audit de la Sécurité des Systèmes d'Information". C'est une qualification délivrée par l'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information) aux sociétés de cybersécurité qui ont démontré leur expertise et leur déontologie dans les missions d'audit.</p><p className="mt-3">La qualification PASSI couvre 5 types de prestations : audit d'architecture, audit de configuration, audit de code source, tests d'intrusion (pentest), et audit organisationnel et physique.</p></section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Ce que garantit la qualification PASSI</h2>
        <div className="grid md:grid-cols-2 gap-4 my-4">{[{t:"Compétences vérifiées",d:"Les auditeurs ont passé un examen de qualification rigoureux. Leurs compétences techniques sont attestées par l'ANSSI."},
        {t:"Déontologie professionnelle",d:"Engagement de confidentialité, gestion sécurisée des données clients, pas de conflits d'intérêts. Contrôle ANSSI annuel."},
        {t:"Méthode documentée",d:"La mission suit un plan de test approuvé, des règles d'engagement claires. Pas d'improvisation dangereuse."},
        {t:"Rapport de qualité",d:"Format de rapport standardisé, CVSS pour toutes les vulnérabilités, recommandations actionables. Accepté par toutes les autorités."}].map((c,i)=>(<div key={i} className="glass rounded-lg p-4"><div className="font-semibold text-foreground text-sm mb-1">{c.t}</div><div className="text-xs">{c.d}</div></div>))}</div>
      </section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Pourquoi c'est crucial pour les marchés publics</h2><p>Dans le cadre des appels d'offres publics pour des missions d'audit de sécurité, la qualification PASSI est souvent exigée dans le cahier des charges. Un organisme public qui choisit un prestataire non qualifié :</p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-sm"><li>Risque de voir son marché requalifié ou annulé</li><li>Ne peut pas se prévaloir de cet audit auprès de l'ANSSI</li><li>N'a aucune garantie sur la qualité ou la déontologie de la prestation</li><li>Expose potentiellement des données sensibles à des prestataires non vérifiés</li></ul>
      </section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Comment vérifier qu'un prestataire est qualifié PASSI</h2><p>La liste des prestataires qualifiés PASSI est publique et consultable sur le site officiel de l'ANSSI : <strong className="text-foreground">ssi.gouv.fr</strong> → section "Prestataires qualifiés". La qualification est renouvelée annuellement et les domaines qualifiés (architecture, configuration, code, pentest, organisationnel) sont précisés pour chaque prestataire.</p></section>
    </div>
    <div className="mt-14 glass rounded-2xl p-8 border-primary/20 text-center">
      <Award className="w-8 h-8 text-primary mx-auto mb-4" />
      <h3 className="font-heading text-xl font-bold text-foreground mb-3">Nos auditeurs sont qualifiés PASSI ANSSI</h3>
      <p className="text-muted-foreground mb-6 text-sm">Tous nos audits de sécurité sont réalisés par des auditeurs qualifiés PASSI. Nos rapports sont acceptés par l'ANSSI, la CNIL et les autorités de contrôle.</p>
      <div className="flex flex-wrap justify-center gap-4"><Link to="/contact" className="btn-primary">Demander un audit PASSI <ArrowRight className="w-4 h-4" /></Link><a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a></div>
    </div>
  </div></article></>);
}
