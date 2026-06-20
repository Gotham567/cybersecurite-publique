import { motion } from "framer-motion"; import { ArrowRight, Phone, Shield, Clock } from "lucide-react"; import { Link } from "react-router-dom"; import SEOHead from "../../components/SEOHead";
export default function AuditSSICollectivite() {
  return (<><SEOHead title="Comment Réaliser un Audit SSI pour une Collectivité Territoriale" description="Méthode pas à pas pour auditer le SI d'une mairie ou communauté de communes. Référentiels ANSSI, PSSI, livrables attendus. Guide expert collectivités." canonical="/actualites/audit-ssi-collectivite-territoriale" jsonLd={{"@context":"https://schema.org","@type":"Article","headline":"Audit SSI collectivité territoriale","datePublished":"2026-06-01","author":{"@type":"Organization","name":"CybersécuritéPublique.fr"}}} />
  <article className="pt-32 pb-20"><div className="container mx-auto px-6 max-w-4xl">
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
      <div className="flex items-center gap-3 mb-6"><span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">Audit</span><span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> 15 min</span><span className="text-xs text-muted-foreground">1 juin 2026</span></div>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Comment réaliser un audit SSI pour une collectivité territoriale</h1>
      <p className="text-xl text-muted-foreground mb-10">Un audit de sécurité des systèmes d'information (SSI) est le point de départ indispensable pour toute démarche de sécurisation d'une collectivité. Voici la méthode complète.</p>
    </motion.div>
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Qu'est-ce qu'un audit SSI pour une collectivité ?</h2><p>Un audit SSI évalue la sécurité de l'ensemble du Système d'Information d'une collectivité : réseaux, serveurs, postes de travail, applications métier (finances, RH, urbanisme), portail citoyen, messagerie, et équipements IoT (caméras, contrôle d'accès). L'objectif est d'identifier les vulnérabilités et de produire un plan de remédiation priorisé.</p></section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Les référentiels de l'audit SSI en collectivité</h2>
        <div className="grid md:grid-cols-3 gap-4 my-6">{[{name:"Guide ANSSI",desc:"Guide d'hygiène informatique, 42 mesures de base applicables aux collectivités"},{name:"PSSI-E",desc:"Politique de Sécurité des Systèmes d'Information de l'État, adaptable aux collectivités"},{name:"ISO 27001",desc:"Norme internationale de management de la sécurité de l'information, certifiable"}].map((r,i)=>(<div key={i} className="glass rounded-xl p-4"><div className="font-semibold text-foreground text-sm mb-1">{r.name}</div><div className="text-xs text-muted-foreground">{r.desc}</div></div>))}</div>
      </section>
      <section><h2 className="font-heading text-2xl font-bold text-foreground mb-4">Les 6 étapes de l'audit SSI</h2>
        {[{n:"1",t:"Cadrage et collecte documentaire",d:"Entretiens avec DSI et élus référents, collecte des plans réseau, inventaire des applications métier, revue de la PSSI existante si elle existe."},
        {n:"2",t:"Cartographie du SI",d:"Inventaire exhaustif des actifs : serveurs, postes, équipements réseau, applications, interconnexions. Identification des actifs critiques (finances, état civil, urbanisme)."},
        {n:"3",t:"Analyse des vulnérabilités techniques",d:"Scans automatisés (Nessus, OpenVAS), tests d'authentification AD, revue des configurations firewall et serveurs, analyse des accès distants et VPN."},
        {n:"4",t:"Audit organisationnel",d:"Revue des procédures de gestion des incidents, politique de sauvegarde, gestion des habilitations, contrats fournisseurs et sous-traitants."},
        {n:"5",t:"Tests d'intrusion ciblés",d:"Tests sur le périmètre exposé (portail citoyen, messagerie Webmail, VPN). Toujours avec autorisation écrite du DGS ou directeur."},
        {n:"6",t:"Rapport et plan d'action",d:"Rapport exécutif pour élus + rapport technique pour DSI. Matrice de risques, plan de remédiation avec priorités et budget estimatif."}].map((s,i)=>(
          <div key={i} className="glass rounded-xl p-5 flex gap-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">{s.n}</div>
            <div><h4 className="font-semibold text-foreground mb-1">{s.t}</h4><p className="text-sm">{s.d}</p></div>
          </div>
        ))}
      </section>
    </div>
    <div className="mt-14 glass rounded-2xl p-8 border-primary/20 text-center">
      <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
      <h3 className="font-heading text-xl font-bold text-foreground mb-3">Faites auditer votre SI municipal</h3>
      <p className="text-muted-foreground mb-6 text-sm">Nos auditeurs qualifiés PASSI ANSSI réalisent votre audit SSI en 10 jours. Rapport complet + plan d'action inclus.</p>
      <div className="flex flex-wrap justify-center gap-4"><Link to="/contact" className="btn-primary">Devis gratuit <ArrowRight className="w-4 h-4" /></Link><a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a></div>
    </div>
  </div></article></>);
}
