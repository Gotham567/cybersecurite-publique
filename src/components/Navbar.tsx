import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  {
    label: "Secteurs",
    children: [
      { label: "Collectivités", href: "/cybersecurite-collectivites" },
      { label: "Secteur santé", href: "/cybersecurite-sante" },
      { label: "Industrie & OT", href: "/cybersecurite-industrie" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Audit & diagnostic", href: "/services/audit" },
      { label: "Test d'intrusion", href: "/services/pentest" },
      { label: "Conformité NIS2", href: "/services/nis2" },
      { label: "Formation agents", href: "/services/formation" },
      { label: "CERT & réponse incidents", href: "/services/cert" },
    ],
  },
  { label: "Actualités", href: "/actualites" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); setDropdown(null); }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/60 shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-all">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div className="leading-tight">
              <div className="font-heading font-bold text-foreground text-sm">CybersécuritéPublique</div>
              <div className="text-xs text-muted-foreground font-mono">.fr</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative"
                  onMouseEnter={() => setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/30">
                    {item.label} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdown === item.label && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-56 glass rounded-xl border border-border/60 shadow-glow-lg p-2">
                        {item.children.map((child) => (
                          <Link key={child.href} to={child.href}
                            className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/8 rounded-lg transition-all">
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.href} to={item.href!}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/30">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-sm py-2.5">
              Audit gratuit
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-muted/30 transition-colors">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/60 bg-background/98 backdrop-blur-md">
            <div className="container mx-auto px-6 py-4 space-y-1">
              {nav.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <div className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">{item.label}</div>
                    {item.children.map((child) => (
                      <Link key={child.href} to={child.href}
                        className="flex items-center gap-2 px-6 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link key={item.href} to={item.href!}
                    className="flex items-center px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg">
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-border/40">
                <Link to="/contact" className="btn-primary w-full justify-center text-sm">Audit gratuit</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
