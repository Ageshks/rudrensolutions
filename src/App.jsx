import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import OnSiteTeams from "./pages/OnSiteTeams";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import { Gallery, FAQ, Contact } from "./pages/OtherPages";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/onsite" element={<OnSiteTeams />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
}
