import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Actualites from "./pages/Actualites";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import Collectivites from "./pages/sectors/Collectivites";
import Sante from "./pages/sectors/Sante";
import Industrie from "./pages/sectors/Industrie";
import Audit from "./pages/services/Audit";
import Pentest from "./pages/services/Pentest";
import Nis2 from "./pages/services/Nis2";
import Formation from "./pages/services/Formation";
import Cert from "./pages/services/Cert";
import Paris from "./pages/cities/Paris";
import Lyon from "./pages/cities/Lyon";
import Marseille from "./pages/cities/Marseille";
import Toulouse from "./pages/cities/Toulouse";
import Nantes from "./pages/cities/Nantes";
import Bordeaux from "./pages/cities/Bordeaux";
import Lille from "./pages/cities/Lille";
import Strasbourg from "./pages/cities/Strasbourg";
import Montpellier from "./pages/cities/Montpellier";
import Nice from "./pages/cities/Nice";
import Rennes from "./pages/cities/Rennes";
import Grenoble from "./pages/cities/Grenoble";
import Nis2CollectivitesGuide from "./pages/articles/Nis2CollectivitesGuide";
import CyberattaquesHopitauxFrance from "./pages/articles/CyberattaquesHopitauxFrance";
import AuditSSICollectivite from "./pages/articles/AuditSSICollectivite";
import HdsCertificationHopital from "./pages/articles/HdsCertificationHopital";
import PlanContinuiteActiviteSante from "./pages/articles/PlanContinuiteActiviteSante";
import SensibilisationAgentsPublics from "./pages/articles/SensibilisationAgentsPublics";
import RansomwareCollectivites from "./pages/articles/RansomwareCollectivites";
import SecuriteReseauxIndustriels from "./pages/articles/SecuriteReseauxIndustriels";
import GouvernanceCyberSecteurPublic from "./pages/articles/GouvernanceCyberSecteurPublic";
import PastiQualificationANSSI from "./pages/articles/PastiQualificationANSSI";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            {/* Secteurs */}
            <Route path="/cybersecurite-collectivites" element={<Collectivites />} />
            <Route path="/cybersecurite-sante" element={<Sante />} />
            <Route path="/cybersecurite-industrie" element={<Industrie />} />
            {/* Services */}
            <Route path="/services/audit" element={<Audit />} />
            <Route path="/services/pentest" element={<Pentest />} />
            <Route path="/services/nis2" element={<Nis2 />} />
            <Route path="/services/formation" element={<Formation />} />
            <Route path="/services/cert" element={<Cert />} />
            {/* Villes */}
            <Route path="/cybersecurite-publique-paris" element={<Paris />} />
            <Route path="/cybersecurite-publique-lyon" element={<Lyon />} />
            <Route path="/cybersecurite-publique-marseille" element={<Marseille />} />
            <Route path="/cybersecurite-publique-toulouse" element={<Toulouse />} />
            <Route path="/cybersecurite-publique-nantes" element={<Nantes />} />
            <Route path="/cybersecurite-publique-bordeaux" element={<Bordeaux />} />
            <Route path="/cybersecurite-publique-lille" element={<Lille />} />
            <Route path="/cybersecurite-publique-strasbourg" element={<Strasbourg />} />
            <Route path="/cybersecurite-publique-montpellier" element={<Montpellier />} />
            <Route path="/cybersecurite-publique-nice" element={<Nice />} />
            <Route path="/cybersecurite-publique-rennes" element={<Rennes />} />
            <Route path="/cybersecurite-publique-grenoble" element={<Grenoble />} />
            {/* Articles */}
            <Route path="/actualites/nis2-collectivites-guide-complet" element={<Nis2CollectivitesGuide />} />
            <Route path="/actualites/cyberattaques-hopitaux-france-bilan" element={<CyberattaquesHopitauxFrance />} />
            <Route path="/actualites/audit-ssi-collectivite-territoriale" element={<AuditSSICollectivite />} />
            <Route path="/actualites/certification-hds-hopital-guide" element={<HdsCertificationHopital />} />
            <Route path="/actualites/plan-continuite-activite-sante" element={<PlanContinuiteActiviteSante />} />
            <Route path="/actualites/sensibilisation-agents-publics-cybersecurite" element={<SensibilisationAgentsPublics />} />
            <Route path="/actualites/ransomware-collectivites-comment-se-proteger" element={<RansomwareCollectivites />} />
            <Route path="/actualites/securite-reseaux-industriels-scada-ot" element={<SecuriteReseauxIndustriels />} />
            <Route path="/actualites/gouvernance-cyber-secteur-public-guide" element={<GouvernanceCyberSecteurPublic />} />
            <Route path="/actualites/passi-qualification-anssi-prestataires" element={<PastiQualificationANSSI />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}
