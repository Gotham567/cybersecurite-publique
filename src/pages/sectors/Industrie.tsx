import { motion } from "framer-motion";
import { Shield, Cpu, AlertTriangle, CheckCircle, ArrowRight, Phone, Zap, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const services = [
  { title: "Audit OT/SCADA", desc: "Évaluation de sécurité de vos systèmes industriels (automates PLC, SCADA, DCS). Référentiel IEC 62443 et guide ANSSI ICS.", href: "/services/audit" },
  { title: "Segmentation réseau IT/OT", desc: "Architecture de cloisonnement entre SI bureautique et réseaux industriels. DMZ industrielle, firewall OT, contrôle des accès distants.", href: "/services/audit" },
  { title: "Pentest systèmes industriels", desc: "Tests d'intrusion spécialisés sur automates, protocoles Modbus/Profinet/BACnet. Sans interruption de production.", href: "/services/pentest" },
  { title: "Conformité LPM/NIS2", desc: "Accompagnement pour les Opérateurs d'Importance Vitale (OIV) et Opérateurs de Services Essentiels (OSE). Déclaration ANSSI.", href: "/services/nis2" },
  { title: "Formation équipes OT", desc: "Sensibilisation cyber adaptée aux ingénieurs et techniciens de production. Focus sur les risques métiers industriels.", href: "/services/formation" },
  { title: "SOC industriel 24/7", desc: "Surveillance continue de vos réseaux OT. Détection d'anomalies sur protocoles industriels. Réponse à incidents spécialisée.", href: "/services/cert" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cybersécurité industrielle OT/SCADA",
  "provider": { "@type": "Organization", "name": "CybersécuritéPublique.fr" },
  "description": "Expert cybersécurité industrielle pour OIV et OSE. Audit OT/SCADA, IEC 62443, conformité LPM NIS2.",
};

export default function Industrie() {
  return (
    <>
      <SEOHead
        title="Cybersécurité Industrielle OT/SCADA — IEC 62443, LPM, OIV"
        description="Expert cybersécurité pour systèmes industriels OT/SCADA. Audit IEC 62443, conformité LPM et NIS2, protection automates et réseaux industriels. Opérateurs d'importance vitale."
        canonical="/cybersecurite-industrie"
        jsonLd={jsonLd}
      />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-primary/5" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="section-tag mb-6">
              <Cpu className="w-3.5 h-3.5" /> Industrie & OT
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Cybersécurité <span className="text-gradient">industrielle OT/SCADA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              La convergence IT/OT expose vos systèmes de contrôle industriel à des cybermenaces sans précédent.
              Nos experts IEC 62443 sécurisent vos automates, SCADA et réseaux OT sans impacter la production.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Audit OT gratuit <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+33100000000" className="btn-secondary">
                <Phone className="w-4 h-4" /> 01 00 00 00 00
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {[
              { val: "78%", label: "OIV ont subi une tentative d'intrusion" },
              { val: "IEC 62443", label: "norme de référence OT" },
              { val: "0", label: "interruption de production pendant les tests" },
              { val: "LPM", label: "loi de programmation militaire applicable" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
                className="glass rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-primary font-heading">{s.val}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><AlertTriangle className="w-3.5 h-3.5" /> Risques OT</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Les menaces spécifiques aux systèmes industriels
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Sabotage de production", desc: "Des attaquants peuvent modifier les paramètres d'automates PLC pour provoquer des pannes, des explosions ou des contaminations industrielles à distance." },
              { icon: Lock, title: "Espionnage industriel", desc: "Vol de formules, de processus propriétaires, de plans industriels. Les groupes APT étatiques ciblent spécifiquement les OIV français." },
              { icon: Shield, title: "Rançongiciel OT", desc: "Les ransomwares comme TRITON/TRISIS ciblent spécifiquement les systèmes de sécurité industriels (SIS), menaçant la sécurité physique des sites." },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center mb-4">
                  <r.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4"><CheckCircle className="w-3.5 h-3.5" /> Services OT</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre offre cybersécurité industrielle
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={s.href} className="glass rounded-xl p-6 h-full flex flex-col group hover:border-primary/40 transition-all block">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass rounded-2xl p-10 md:p-14 text-center border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5" />
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sécurisez vos systèmes industriels sans stopper la production
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Notre méthode d'audit OT non-intrusif permet d'évaluer la sécurité de vos automates et SCADA sans aucune interruption de production.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary text-base">
                  Audit OT gratuit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+33100000000" className="btn-secondary text-base">
                  <Phone className="w-4 h-4" /> 01 00 00 00 00
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
