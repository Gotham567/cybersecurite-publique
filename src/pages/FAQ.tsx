import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const faqs = [
  {
    q: "Ma collectivité est-elle concernée par la directive NIS2 ?",
    a: "Oui, très probablement. La directive NIS2 s'applique aux collectivités territoriales considérées comme 'entités importantes' ou 'entités essentielles'. Les critères sont : nombre d'habitants, budget, caractère critique des services fournis. Les grandes villes, communautés d'agglomération, départements et régions sont automatiquement concernés. Les CHU, CHR et GHT le sont également. Le délai de mise en conformité est octobre 2026.",
    tag: "NIS2",
  },
  {
    q: "Qu'est-ce que la qualification PASSI ANSSI et pourquoi est-ce important ?",
    a: "PASSI (Prestataire d'Audit de la Sécurité des Systèmes d'Information) est la qualification la plus exigeante délivrée par l'ANSSI pour les auditeurs de sécurité. Elle garantit le niveau d'expertise et de déontologie de nos équipes. Dans le cadre des marchés publics, la qualification PASSI est souvent exigée dans les appels d'offres pour les missions d'audit. Nos rapports PASSI sont acceptés par toutes les autorités de contrôle françaises.",
    tag: "Audit",
  },
  {
    q: "Combien coûte un audit de sécurité pour une collectivité ?",
    a: "Le coût varie selon la taille du périmètre : entre 5 000€ et 30 000€ HT pour un audit complet d'une collectivité de taille moyenne. Des financements existent : FONDS FRANCE RELANCE (cyber), subventions régionales, mutualisation via les centres de gestion ou syndicats. Nous réalisons un devis gratuit personnalisé sous 24h.",
    tag: "Budget",
  },
  {
    q: "Combien de temps dure un audit de sécurité ?",
    a: "En général : 3 à 10 jours pour la phase terrain, puis 5 à 7 jours pour la rédaction du rapport. Vous recevez votre rapport complet et votre plan d'action dans un délai de 2 à 3 semaines après le démarrage de la mission.",
    tag: "Délais",
  },
  {
    q: "Que faire si nous sommes victimes d'une cyberattaque en ce moment ?",
    a: "Appelez immédiatement notre numéro d'urgence : 01 00 00 00 00 (24h/24, 7j/7). En parallèle : isolez les machines touchées du réseau (débranchez les câbles réseau), ne coupez pas l'alimentation (préservation des preuves), ne payez pas de rançon avant d'avoir consulté un expert. Signalez l'incident à l'ANSSI via le portail cybermalveillance.gouv.fr.",
    tag: "Urgence",
  },
  {
    q: "La certification HDS est-elle obligatoire pour les hôpitaux ?",
    a: "Oui. Depuis 2018, tout hébergement de données de santé à caractère personnel doit être réalisé par un hébergeur certifié HDS (Hébergeur de Données de Santé). Cela s'applique non seulement aux prestataires cloud mais aussi aux établissements hospitaliers gérant leur propre infrastructure. La non-conformité expose à des sanctions CNIL pouvant aller jusqu'à 20M€.",
    tag: "Santé",
  },
  {
    q: "Pouvez-vous réaliser un pentest sans interrompre nos services ?",
    a: "Oui. Nous définissons ensemble les contraintes horaires avant la mission (fenêtres de maintenance, services critiques à exclure). Nos tests sont toujours précédés d'un plan de test signé par les deux parties. Pour les hôpitaux, nous utilisons des méthodes non-intrusives pour les systèmes médicaux critiques (scanners, IRM).",
    tag: "Pentest",
  },
  {
    q: "Pouvez-vous intervenir en province, pas seulement en Île-de-France ?",
    a: "Absolument. Nous intervenons sur toute la France métropolitaine et dans les DOM-TOM. Nous avons des équipes disponibles à Paris, Lyon, Bordeaux, Marseille et Toulouse. Pour les missions courtes, nos auditeurs peuvent se déplacer sur site partout en France. Les audits documentaires et certaines missions de conformité peuvent également se dérouler à distance.",
    tag: "Localisation",
  },
  {
    q: "Comment se déroule la formation de nos agents ?",
    a: "Nous proposons plusieurs formats selon vos contraintes : e-learning asynchrone (agents consultent à leur rythme), sessions en présentiel (demi-journée ou journée), webinaires distanciels, ou une combinaison. Chaque programme est précédé d'un test de phishing simulé pour mesurer le niveau de risque initial, puis post-formation pour mesurer les progrès.",
    tag: "Formation",
  },
  {
    q: "Quels financements existent pour la cybersécurité des collectivités ?",
    a: "Plusieurs sources : (1) Plan France Relance — volet cyber : jusqu'à 50% de cofinancement pour les collectivités. (2) ANS (Agence du Numérique en Santé) : financement des hôpitaux via le plan Cyber 2022. (3) FEDER et fonds régionaux selon les régions. (4) Mutualisation via les syndicats mixtes ou SDIS. Nous vous aidons à identifier et mobiliser les aides disponibles pour votre projet.",
    tag: "Financement",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="FAQ Cybersécurité Secteur Public — Questions Fréquentes"
        description="Réponses aux questions fréquentes sur la cybersécurité des collectivités et hôpitaux. NIS2, audit SI, pentest, HDS, financement, PASSI. Experts disponibles."
        canonical="/faq"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, hsl(213 94% 58% / 0.1) 0%, transparent 65%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="section-tag mx-auto mb-6"><Shield className="w-3 h-3" /> FAQ</div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-5 tracking-tight">
              Questions <span className="text-gradient">fréquentes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tout ce que vous devez savoir sur la cybersécurité pour les collectivités et les hôpitaux.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                <div className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: open === i
                      ? "hsl(224 42% 8% / 0.95)"
                      : "hsl(224 42% 7% / 0.7)",
                    border: open === i
                      ? "1px solid hsl(213 94% 58% / 0.2)"
                      : "1px solid rgba(255,255,255,0.05)",
                    backdropFilter: "blur(16px)",
                    boxShadow: open === i ? "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px hsl(213 94% 58% / 0.06)" : "none"
                  }}>
                  {open === i && (
                    <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(213 94% 65% / 0.4), transparent)" }} />
                  )}
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                        style={{
                          background: open === i ? "hsl(213 94% 58% / 0.15)" : "rgba(255,255,255,0.04)",
                          border: open === i ? "1px solid hsl(213 94% 58% / 0.3)" : "1px solid rgba(255,255,255,0.07)",
                          color: open === i ? "hsl(213 94% 68%)" : "hsl(215 16% 45%)"
                        }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium text-foreground text-sm leading-snug">{faq.q}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="hidden sm:block text-xs font-mono px-2 py-0.5 rounded"
                        style={{ background: "hsl(213 94% 58% / 0.08)", border: "1px solid hsl(213 94% 58% / 0.15)", color: "hsl(213 94% 60%)" }}>
                        {faq.tag}
                      </span>
                      <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}>
                        <div className="px-6 pb-6 pt-2 ml-9">
                          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-14 text-center">
            <div className="divider-glow max-w-md mx-auto mb-10" />
            <p className="text-muted-foreground mb-6">Vous ne trouvez pas la réponse à votre question ?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Posez votre question <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+33100000000" className="btn-secondary"><Phone className="w-4 h-4" /> 01 00 00 00 00</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
