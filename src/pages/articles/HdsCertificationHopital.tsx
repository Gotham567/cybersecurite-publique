import { motion } from "framer-motion"; import { ArrowRight, Phone, Shield, Clock, CheckCircle } from "lucide-react"; import { Link } from "react-router-dom"; import SEOHead from "../../components/SEOHead";
export default function HdsCertificationHopital() {
  return (<><SEOHead title="Certification HDS pour les Hôpitaux : Guide Complet 2026" description="Tout comprendre sur la certification Hébergeur de Données de Santé (HDS) pour les établissements hospitaliers. Obligations, périmètre, audit, coûts." canonical="/actualites/certification-hds-hopital-guide" jsonLd={{"@context":"https://schema.org","@type":"Article","headline":"Certification HDS hôpital guide","datePublished":"2026-05-25","author":{"@type":"Organization","name":"CybersécuritéPublique.fr"}}} />
  <article className="pt-32 pb-20"><div className="container mx-auto px-6 max-w-4xl">
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
      <div className="flex items-center gap-3 mb-6"><span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">Santé</span><span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> 11 min</span><span className="text-xs text-muted-foreground">25 mai 2026</span></div>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Certification HDS pour les hôpitaux : guide complet 2026</h1>
      <p className="text-xl text-muted-foreground mb-10">La certification HDS (Hébergeur de Données de Santé) est obligatoire depuis 2018. Voici tout ce qu'un établissement hospitalier doit savoir pour s'y préparer.</p>
    </motion.div>
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Qu'est-ce que la certification HDS ?</h2><p>La certification HDS, définie par l'article L.1111-8 du Code de la santé publique, est obligatoire pour tout hébergement de données de santé à caractère personnel. Elle est délivrée par des organismes accrédités par le COFRAC sur la base du référentiel HDS publié par l'ANS (Agence du Numérique en Santé).</p><p className="mt-3">Depuis 2022, les établissements hospitaliers gérant leur propre infrastructure sont directement concernés, pas seulement les hébergeurs tiers.</p></section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Les 6 activités couvertes par HDS</h2>
        <div className="grid md:grid-cols-2 gap-4 my-4">{["Infrastructure physique (datacenters, salles serveurs)","Infrastructure virtuelle (hyperviseurs, stockage)","Plateforme d'hébergement d'applications (PaaS)","Administration et exploitation du SI de santé","Infogérance du SI de santé","Sauvegarde des données de santé externalisée"].map((a,i)=>(<div key={i} className="flex items-center gap-3 glass rounded-lg p-3"><CheckCircle className="w-4 h-4 text-secondary shrink-0" /><span className="text-sm">{a}</span></div>))}</div>
      </section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Comment obtenir la certification HDS ?</h2>
        {[{n:"1",t:"Audit interne préparatoire",d:"Évaluation de votre conformité au référentiel HDS. Identification des écarts. Ce travail préparatoire est indispensable avant de mandater un organisme certificateur."},
        {n:"2",t:"Choix de l'organisme certificateur",d:"BSI, Bureau Veritas, LSTI, Apave... L'organisme doit être accrédité COFRAC pour la certification HDS. Il réalise un audit documentaire puis un audit de terrain."},
        {n:"3",t:"Audit de certification",d:"Revue documentaire (politiques, procédures, contrats) + audit terrain (tests techniques, entretiens, observations). Durée : 3 à 5 jours selon la taille de l'établissement."},
        {n:"4",t:"Traitement des non-conformités",d:"L'organisme identifie des non-conformités majeures ou mineures. Vous avez 90 jours pour les corriger et soumettre les preuves."},
        {n:"5",t:"Délivrance du certificat",d:"Le certificat est valable 3 ans avec un audit de surveillance annuel. Il est publié sur le site de l'ANS."}].map((s,i)=>(<div key={i} className="glass rounded-xl p-5 flex gap-4 mb-4"><div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm shrink-0">{s.n}</div><div><h4 className="font-semibold text-foreground mb-1">{s.t}</h4><p className="text-sm">{s.d}</p></div></div>))}
      </section>
    </div>
    <div className="mt-14 glass rounded-2xl p-8 border-secondary/20 text-center">
      <Shield className="w-8 h-8 text-secondary mx-auto mb-4" />
      <h3 className="font-heading text-xl font-bold text-foreground mb-3">Accompagnement certification HDS</h3>
      <p className="text-muted-foreground mb-6 text-sm">Nos experts certifiés accompagnent votre hôpital de l'audit préparatoire jusqu'à l'obtention du certificat HDS.</p>
      <div className="flex flex-wrap justify-center gap-4"><Link to="/contact" className="btn-primary">Audit HDS gratuit <ArrowRight className="w-4 h-4" /></Link><a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a></div>
    </div>
  </div></article></>);
}
