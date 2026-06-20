import { motion } from "framer-motion";
import { Shield, Building2, ArrowRight, Phone, CheckCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const city = "Paris";
const region = "Île-de-France";
const stats = { collectivites: "150+", hopitaux: "AP-HP (39 hôpitaux)", missions: "80+", experts: "12" };
const services = [
  { title: "Audit SI Paris & IDF", desc: "Audit de sécurité pour mairies, arrondissements et EPCI d'Île-de-France. Équipes disponibles sans délai.", href: "/services/audit" },
  { title: "Pentest Paris", desc: "Tests d'intrusion sur vos applications et infrastructures. Intervention rapide sur tout le Grand Paris.", href: "/services/pentest" },
  { title: "Conformité NIS2 IDF", desc: "Mise en conformité NIS2 pour les collectivités et hôpitaux parisiens. Plan d'action et déclaration ANSSI.", href: "/services/nis2" },
  { title: "Formation agents Paris", desc: "Sensibilisation cybersécurité pour vos équipes municipales. Présentiel dans vos locaux ou distanciel.", href: "/services/formation" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Cybersécurité secteur public ${city}`,
  "description": `Expert cybersécurité pour collectivités et hôpitaux à ${city}. Qualifié PASSI ANSSI.`,
  "address": { "@type": "PostalAddress", "addressLocality": city, "addressRegion": region, "addressCountry": "FR" },
  "telephone": "+33100000000",
  "url": `https://cybersecurite-publique.fr/cybersecurite-publique-${city.toLowerCase()}`,
};

export default function CityPage() {
  return (
    <>
      <SEOHead
        title={`Cybersécurité Secteur Public ${city} — Collectivités et Hôpitaux`}
        description={`Expert cybersécurité pour collectivités et hôpitaux à ${city}. Audit SI, NIS2, pentest, formation agents. Qualifié PASSI ANSSI. Intervention rapide.`}
        canonical={`/cybersecurite-publique-${city.toLowerCase()}`}
        jsonLd={jsonLd}
      />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="section-tag mb-6"><MapPin className="w-3.5 h-3.5" /> {city} — {region}</div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Cybersécurité secteur public <span className="text-gradient">à {city}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              Nos experts cybersécurité interviennent auprès des collectivités territoriales et établissements de santé de {city} et de la région {region}.
              Qualifiés PASSI ANSSI, disponibles sous 48h.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Audit gratuit à {city} <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {[
              { val: stats.collectivites, label: `collectivités en ${region}` },
              { val: stats.hopitaux, label: "groupe hospitalier" },
              { val: stats.missions, label: "missions réalisées" },
              { val: stats.experts, label: "experts locaux" },
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
            <div className="section-tag mx-auto mb-4"><Building2 className="w-3.5 h-3.5" /> Services locaux</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos services cybersécurité à {city}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={s.href} className="glass rounded-xl p-6 h-full flex flex-col group hover:border-primary/40 transition-all block">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-primary" />
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
          <div className="glass rounded-2xl p-10 text-center border-primary/20">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Vous êtes une collectivité ou un hôpital à {city} ?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Nos équipes basées à {city} interviennent en moins de 48h pour votre diagnostic cybersécurité.
              Audit gratuit, sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base">Audit gratuit à {city} <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary text-base"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
