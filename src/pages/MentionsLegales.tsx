import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead";

export default function MentionsLegales() {
  return (
    <>
      <SEOHead
        title="Mentions Légales"
        description="Mentions légales de CybersécuritéPublique.fr — éditeur, hébergeur, propriété intellectuelle."
        canonical="/mentions-legales"
      />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-10">Mentions légales</h1>
            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground text-sm leading-relaxed">
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Éditeur du site</h2>
                <p>Le site cybersecurite-publique.fr est édité par la société CybersécuritéPublique.fr SAS, société par actions simplifiée au capital de 10 000€, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 000 000 000, dont le siège social est situé à Paris, France.</p>
                <p className="mt-2">Directeur de la publication : [Nom du directeur]<br />Email : contact@cybersecurite-publique.fr<br />Téléphone : 01 00 00 00 00</p>
              </section>
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Hébergement</h2>
                <p>Le site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, California 94104, USA. Site web : vercel.com</p>
              </section>
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Propriété intellectuelle</h2>
                <p>L'ensemble des contenus présents sur ce site (textes, images, graphiques, logo, icônes, sons, logiciels) est la propriété exclusive de CybersécuritéPublique.fr SAS ou de ses partenaires. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, est interdite sans l'autorisation préalable et écrite de CybersécuritéPublique.fr SAS.</p>
              </section>
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Limitation de responsabilité</h2>
                <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour. Cependant, il peut contenir des inexactitudes ou des omissions. Les informations publiées sur ce site ont un caractère purement informatif et ne constituent pas un conseil juridique ou technique.</p>
              </section>
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Liens hypertextes</h2>
                <p>Ce site peut contenir des liens vers d'autres sites web. CybersécuritéPublique.fr n'est pas responsable du contenu de ces sites tiers et ne peut pas être tenu responsable des dommages pouvant résulter de leur consultation.</p>
              </section>
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Droit applicable</h2>
                <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront compétents.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
