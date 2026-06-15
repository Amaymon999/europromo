import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CustomCursor } from "@/components/CustomCursor";
import { RetailAssistant } from "@/components/RetailAssistant";

import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import SectorsPage from "@/pages/SectorsPage";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  const location = useLocation();
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    setLoaderDone(false);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Loader key={location.pathname} onComplete={() => setLoaderDone(true)} />
      <CustomCursor />
      <ScrollToTop />

      <div className={`site-shell ${loaderDone ? "site-shell--visible" : ""}`}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prodotti" element={<ProductsPage />} />
            <Route path="/prodotti/:slug" element={<ProductDetailPage />} />
            <Route path="/settori-gdo" element={<SectorsPage />} />
            <Route path="/chi-siamo" element={<AboutPage />} />
            <Route path="/progetti" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contatti" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <RetailAssistant />
      </div>
    </div>
  );
}
