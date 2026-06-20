import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  {
    label: "Secteurs",
    children: [
      { label: "Collectivités locales", href: "/cybersecurite-collectivites", desc: "Mairies, régions, départements" },
      { label: "Secteur santé", href: "/cybersecurite-sante", desc: "Hôpitaux, CHU, GHT, EHPAD" },
      { label: "Industrie & OT", href: "/cybersecurite-industrie", desc: "OIV, OSE, systèmes industriels" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Audit & diagnostic PASSI", href: "/services/audit", desc: "Qualifié ANSSI, rapport en 10j" },
      { label: "Test d'intrusion", href: "/services/pentest", desc: "Pentest boîte noire, grise, red team" },
      { label: "Conformité NIS2", href: "/services/nis2", desc: "Délai octobre 2026 — agissez maintenant" },
      { label: "Formation agents", href: "/services/formation", desc: "E-learning, phishing simulé, QUALIOPI" },
      { label: "CERT & incidents", href: "/services/cert", desc: "Intervention 24/7 en moins de 4h" },
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
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); setDropdown(null); }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: "hsl(222 47% 5% / 0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
      } : {
        background: "transparent",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, hsl(214 100% 58%), hsl(200 100% 52%))",
                boxShadow: "0 4px 12px hsl(214 100% 60% / 0.4)"
              }}>
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-heading font-bold text-foreground text-sm tracking-tight">CybersécuritéPublique</div>
              <div className="text-[10px] text-muted-foreground font-mono">.fr — Collectivités &amp; Santé</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative"
                  onMouseEnter={() => setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}>
                  <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-white/5">
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute top-full left-0 mt-2 w-72 rounded-2xl p-2"
                        style={{
                          background: "hsl(222 40% 8% / 0.98)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          backdropFilter: "blur(20px)",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px hsl(214 100% 60% / 0.08)"
                        }}
                      >
                        {item.children.map((child) => (
                          <Link key={child.href} to={child.href}
                            className="group flex flex-col gap-0.5 px-3.5 py-3 rounded-xl transition-all duration-200 hover:bg-white/5">
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{child.label}</span>
                            <span className="text-xs text-muted-foreground">{child.desc}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.href} to={item.href!}
                  className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-white/5">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+33100000000" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
              01 00 00 00 00
            </a>
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Audit gratuit
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors hover:bg-white/5">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "hsl(222 47% 5% / 0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)"
            }}>
            <div className="container mx-auto px-6 py-5 space-y-1">
              {nav.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <div className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-muted-foreground/60">{item.label}</div>
                    {item.children.map((child) => (
                      <Link key={child.href} to={child.href}
                        className="flex items-center gap-2 px-6 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-all">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link key={item.href} to={item.href!}
                    className="flex items-center px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-all">
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <a href="tel:+33100000000" className="block text-center py-2.5 text-sm text-muted-foreground">01 00 00 00 00</a>
                <Link to="/contact" className="btn-primary w-full justify-center text-sm">Audit gratuit</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
