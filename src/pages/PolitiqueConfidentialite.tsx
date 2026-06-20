import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEOHead
        title="Politique de Confidentialité — RGPD"
        description="Politique de confidentialité et protection des données personnelles de CybersécuritéPublique.fr. Conformité RGPD."
        canonical="/politique-confidentialite"
      />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-10">Politique de confidentialité</h1>
            <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Responsable du traitement</h2>
                <p>CybersécuritéPublique.fr SAS, Paris, France. Email DPO : dpo@cybersecurite-publique.fr</p>
              </section>
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Données collectées</h2>
                <p>Lors de l'utilisation du formulaire de contact, nous collectons : nom, prénom, organisation, adresse email professionnelle, numéro de téléphone (optionnel), et le contenu de votre message. Ces données sont strictement nécessaires au traitement de votre demande.</p>
              </section>
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Finalités et base légale</h2>
                <p>Vos données sont traitées pour :</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Répondre à vos demandes de renseignements (base légale : intérêt légitime)</li>
                  <li>Établir des devis et contrats (base légale : exécution d'un contrat)</li>
                  <li>Vous envoyer notre newsletter si vous y consentez (base légale : consentement)</li>
                </ul>
              </section>
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Durée de conservation</h2>
                <p>Vos données sont conservées 3 ans à compter du dernier contact, conformément aux recommandations CNIL. Les données de facturation sont conservées 10 ans.</p>
              </section>
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Vos droits</h2>
                <p>Conformément au RGPD, vous disposez des droits suivants : accès, rectification, effacement, limitation, portabilité et opposition. Pour exercer vos droits, contactez-nous à : dpo@cybersecurite-publique.fr. En cas de réclamation, vous pouvez saisir la CNIL (cnil.fr).</p>
              </section>
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Cookies</h2>
                <p>Ce site n'utilise que des cookies strictement nécessaires au fonctionnement technique. Aucun cookie publicitaire ou de tracking tiers n'est déposé sans votre consentement explicite.</p>
              </section>
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Sécurité des données</h2>
                <p>En tant que professionnels de la cybersécurité, nous appliquons les plus hauts standards de sécurité à nos propres systèmes : chiffrement TLS, authentification forte, journalisation des accès, et audits réguliers de notre infrastructure.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
