import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const sectors = [
  { label: "Collectivités locales", href: "/cybersecurite-collectivites" },
  { label: "Secteur santé", href: "/cybersecurite-sante" },
  { label: "Industrie & OT", href: "/cybersecurite-industrie" },
];

const services = [
  { label: "Audit de sécurité", href: "/services/audit" },
  { label: "Pentest", href: "/services/pentest" },
  { label: "Conformité NIS2", href: "/services/nis2" },
  { label: "Formation agents", href: "/services/formation" },
  { label: "CERT & incidents", href: "/services/cert" },
];

const cities = [
  { label: "Paris", href: "/cybersecurite-publique-paris" },
  { label: "Lyon", href: "/cybersecurite-publique-lyon" },
  { label: "Marseille", href: "/cybersecurite-publique-marseille" },
  { label: "Toulouse", href: "/cybersecurite-publique-toulouse" },
  { label: "Nantes", href: "/cybersecurite-publique-nantes" },
  { label: "Bordeaux", href: "/cybersecurite-publique-bordeaux" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div className="leading-tight">
                <div className="font-heading font-bold text-foreground text-sm">CybersécuritéPublique.fr</div>
                <div className="text-xs text-secondary font-mono">Collectivités & Santé</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Spécialistes de la cybersécurité pour les collectivités locales, hôpitaux et organismes publics. Qualifiés PASSI, experts NIS2 et HDS.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:+33100000000" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" /> 01 00 00 00 00
              </a>
              <a href="mailto:contact@cybersecurite-publique.fr" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" /> contact@cybersecurite-publique.fr
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Paris, France
              </span>
            </div>
          </div>

          {/* Secteurs */}
          <div>
            <h3 className="font-heading font-semibold text-foreground text-sm mb-4 uppercase tracking-wider">Secteurs</h3>
            <ul className="space-y-2.5">
              {sectors.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground text-sm mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Villes */}
          <div>
            <h3 className="font-heading font-semibold text-foreground text-sm mb-4 uppercase tracking-wider">Nos villes</h3>
            <ul className="space-y-2.5">
              {cities.map((c) => (
                <li key={c.href}>
                  <Link to={c.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CybersécuritéPublique.fr — Tous droits réservés
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link to="/mentions-legales" className="hover:text-foreground transition-colors">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-foreground transition-colors">Confidentialité</Link>
            <div className="flex items-center gap-3 ml-4">
              <a href="https://www.linkedin.com/company/cybersecurite-publique/" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/CyberPublicFr" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
