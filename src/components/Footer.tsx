import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";

const sectors = [
  { label: "Collectivités locales", href: "/cybersecurite-collectivites" },
  { label: "Secteur santé", href: "/cybersecurite-sante" },
  { label: "Industrie & OT", href: "/cybersecurite-industrie" },
];

const services = [
  { label: "Audit de sécurité PASSI", href: "/services/audit" },
  { label: "Test d'intrusion", href: "/services/pentest" },
  { label: "Conformité NIS2", href: "/services/nis2" },
  { label: "Formation agents", href: "/services/formation" },
  { label: "CERT & incidents 24/7", href: "/services/cert" },
];

const cities = [
  { label: "Paris", href: "/cybersecurite-publique-paris" },
  { label: "Lyon", href: "/cybersecurite-publique-lyon" },
  { label: "Marseille", href: "/cybersecurite-publique-marseille" },
  { label: "Bordeaux", href: "/cybersecurite-publique-bordeaux" },
  { label: "Lille", href: "/cybersecurite-publique-lille" },
  { label: "Rennes", href: "/cybersecurite-publique-rennes" },
];

const certifs = ["PASSI ANSSI", "ISO 27001", "HDS", "QUALIOPI", "NIS2"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top border gradient */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, hsl(214 100% 60% / 0.3), transparent)" }} />

      {/* Main footer */}
      <div style={{ background: "linear-gradient(180deg, hsl(222 47% 6%), hsl(222 47% 4%))" }}>
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-105"
                  style={{ background: "linear-gradient(135deg, hsl(214 100% 58%), hsl(200 100% 52%))", boxShadow: "0 4px 16px hsl(214 100% 60% / 0.35)" }}>
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="leading-tight">
                  <div className="font-heading font-bold text-foreground text-sm tracking-tight">CybersécuritéPublique.fr</div>
                  <div className="text-xs text-muted-foreground font-mono">Collectivités &amp; Santé</div>
                </div>
              </Link>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
                Spécialistes de la cybersécurité pour les collectivités locales, hôpitaux et organismes publics. Qualifiés PASSI ANSSI, experts NIS2 et HDS.
              </p>

              {/* Contact */}
              <div className="space-y-3 mb-6">
                <a href="tel:+33100000000" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "hsl(214 100% 60% / 0.1)", border: "1px solid hsl(214 100% 60% / 0.15)" }}>
                    <Phone className="w-3.5 h-3.5 text-primary" />
                  </div>
                  01 00 00 00 00
                </a>
                <a href="mailto:contact@cybersecurite-publique.fr" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "hsl(214 100% 60% / 0.1)", border: "1px solid hsl(214 100% 60% / 0.15)" }}>
                    <Mail className="w-3.5 h-3.5 text-primary" />
                  </div>
                  contact@cybersecurite-publique.fr
                </a>
                <span className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "hsl(214 100% 60% / 0.1)", border: "1px solid hsl(214 100% 60% / 0.15)" }}>
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                  </div>
                  Paris, France — Toute la France
                </span>
              </div>

              {/* Certifs */}
              <div className="flex flex-wrap gap-1.5">
                {certifs.map(c => (
                  <span key={c} className="text-xs px-2.5 py-1 rounded-full font-mono"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "hsl(215 20% 55%)" }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Secteurs */}
            <div>
              <h3 className="font-heading font-bold text-foreground text-xs mb-5 uppercase tracking-wider">Secteurs</h3>
              <ul className="space-y-3">
                {sectors.map((s) => (
                  <li key={s.href}>
                    <Link to={s.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 text-primary/40 group-hover:text-primary transition-colors" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold text-foreground text-xs mb-5 uppercase tracking-wider">Services</h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link to={s.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 text-primary/40 group-hover:text-primary transition-colors" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Villes */}
            <div>
              <h3 className="font-heading font-bold text-foreground text-xs mb-5 uppercase tracking-wider">Nos villes</h3>
              <ul className="space-y-3">
                {cities.map((c) => (
                  <li key={c.href}>
                    <Link to={c.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 text-primary/40 group-hover:text-primary transition-colors" />
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} CybersécuritéPublique.fr — Tous droits réservés
            </p>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <Link to="/mentions-legales" className="hover:text-foreground transition-colors">Mentions légales</Link>
              <Link to="/politique-confidentialite" className="hover:text-foreground transition-colors">Confidentialité</Link>
              <div className="flex items-center gap-2 ml-2">
                <a href="https://www.linkedin.com/company/cybersecurite-publique/" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:bg-primary/10">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/CyberPublicFr" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:bg-primary/10">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
