import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import {
  HomePage,
  AboutPage,
  LeadershipPage,
  ProgramsPage,
  ResearchPage,
  MediaPage,
  ContactPage,
  MembershipPage,
  TermsPage,
  PrivacyPage,
  DisclaimerPage,
  SecurityPage,
  CookiesPage
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
