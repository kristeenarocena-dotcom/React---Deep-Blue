import { useEffect, useState } from "react";
import { Fish } from "lucide-react";
import articles from "../data/articles.json";
import metrics from "../data/metrics.json";
import ArticleGrid from "./components/ArticleGrid";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import SearchBar from "./components/SearchBar";

const navItems = [
  { id: "stories", label: "Stories" },
  { id: "conservation", label: "Conservation" },
  { id: "expeditions", label: "Expeditions" },
  { id: "about", label: "About Us" },
];

const conservationCard = {
  title: "Coral Bleaching: A Silent Emergency",
  excerpt: "Rising ocean temperatures are stressing coral systems worldwide. Here is why reefs matter and what can still be protected.",
  image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
  date: "Oct 08, 2024",
};

const expeditionCard = {
  title: "The Great Barrier Reef: A World Wonder",
  excerpt: "Discover one of the most extraordinary ecosystems on the planet and the delicate balance that keeps it alive.",
  image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  date: "Sep 05, 2024",
};

function IconLeaf(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M5 15c6 0 10-4 14-10 0 10-4 14-10 14-2.5 0-4-1-4-4Z" />
      <path d="M7 17c1-3 4-6 8-8" />
    </svg>
  );
}

function IconCompass(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M5 12h12" /><path d="m13 8 4 4-4 4" />
    </svg>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const closeMenuOnResize = () => { if (window.innerWidth > 820) setIsOpen(false); };
    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  // ALL articles filtered by search query - for Latest Stories
  const filteredArticles = articles.filter((article) => {
    const query = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(query) ||
      article.author.toLowerCase().includes(query)
    );
  });

  // Only Marine Life + Deep Sea for Marine Life section
  const marineLifeArticles = articles.filter(
    (a) => a.category === "Marine Life" || a.category === "Deep Sea"
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", color: "#0f172a" }}>
      <Navbar isOpen={isOpen} navItems={navItems} onToggle={() => setIsOpen((v) => !v)} onNavigate={scrollToSection} />

      <main>
        <Hero onPrimaryClick={() => scrollToSection("stories")} onSecondaryClick={() => scrollToSection("about")} />

        {/* Latest Stories */}
        <section id="stories" style={{ maxWidth: "1120px", margin: "0 auto", padding: "4rem 1.25rem", boxSizing: "border-box" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "2rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Latest Stories</h2>
              <p style={{ marginTop: "0.25rem", fontSize: "0.92rem", color: "#64748b", fontFamily: "Inter, sans-serif" }}>
                Curated insights from the frontiers of oceanography.
              </p>
            </div>
            <SearchBar value={searchQuery} placeholder="Search by title or author" ariaLabel="Search stories" onChange={setSearchQuery} />
          </div>

          <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>
            {filteredArticles.length} stories found
          </p>

          {filteredArticles.length > 0 ? (
            <ArticleGrid articles={filteredArticles} variant="latest" />
          ) : (
            <div style={{ display: "grid", justifyItems: "center", gap: "0.75rem", paddingTop: "2.5rem", textAlign: "center" }}>
              <span style={{ display: "inline-flex", height: "56px", width: "56px", alignItems: "center", justifyContent: "center", borderRadius: "9999px", backgroundColor: "#ecfeff", color: "#0891b2" }}>
                <Fish size={24} />
              </span>
              <h3 style={{ fontFamily: "Merriweather, serif", fontSize: "1.5rem", color: "#0f172a" }}>No stories found</h3>
              <p style={{ maxWidth: "28rem", fontSize: "0.92rem", color: "#64748b", fontFamily: "Inter, sans-serif" }}>
                No articles match your search. Try a different keyword or clear the filter.
              </p>
              <button
                style={{ borderRadius: "9999px", backgroundColor: "#0891b2", padding: "8px 18px", fontSize: "0.875rem", fontWeight: 600, color: "#fff", border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif" }}
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </button>
            </div>
          )}
        </section>

        {/* Marine Life */}
        <section id="marine-life" style={{ backgroundColor: "#f0f9ff", padding: "3.5rem 0" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.25rem", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ display: "flex", height: "44px", width: "44px", alignItems: "center", justifyContent: "center", borderRadius: "9999px", backgroundColor: "#cffafe", flexShrink: 0 }}>
                <Fish size={20} style={{ color: "#0891b2" }} />
              </div>
              <div>
                <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "1.75rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Marine Life</h2>
                <p style={{ fontSize: "0.85rem", color: "#64748b", fontFamily: "Inter, sans-serif", margin: 0 }}>Discover the incredible creatures of our oceans</p>
              </div>
            </div>
            <ArticleGrid articles={marineLifeArticles} variant="marine" />
          </div>
        </section>

        {/* Conservation */}
        <section id="conservation" style={{ maxWidth: "1120px", margin: "0 auto", padding: "4rem 1.25rem", boxSizing: "border-box" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "Merriweather, serif", fontSize: "1.25rem", color: "#15803d" }}>
            <span style={{ display: "inline-flex", height: "32px", width: "32px", alignItems: "center", justifyContent: "center", borderRadius: "9999px", backgroundColor: "#dcfce7", color: "#16a34a" }}>
              <IconLeaf style={{ height: "16px", width: "16px" }} />
            </span>
            Conservation
          </div>
          <p style={{ fontSize: "0.875rem", color: "#64748b", fontFamily: "Inter, sans-serif", marginTop: "0.25rem" }}>
            Discover our efforts to protect ocean wildlife.
          </p>
          <article style={{ marginTop: "1.25rem", display: "grid", gridTemplateColumns: "190px 1fr", gap: "1rem", maxWidth: "720px", borderRadius: "16px", backgroundColor: "#f8fafc", padding: "0.5rem" }} className="conservation-card">
            <img src={conservationCard.image} alt={conservationCard.title} style={{ height: "176px", width: "100%", borderRadius: "12px", objectFit: "cover" }} />
            <div style={{ padding: "0.5rem 0.75rem 0.5rem 0.25rem" }}>
              <p style={{ fontSize: "0.75rem", color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>{conservationCard.date}</p>
              <h3 style={{ marginTop: "0.5rem", fontFamily: "Merriweather, serif", fontSize: "1.5rem", lineHeight: 1.3, color: "#0f172a" }}>{conservationCard.title}</h3>
              <p style={{ marginTop: "0.75rem", fontSize: "0.875rem", lineHeight: 1.65, color: "#64748b", fontFamily: "Inter, sans-serif" }}>{conservationCard.excerpt}</p>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ marginTop: "0.75rem", display: "inline-block", fontSize: "0.875rem", fontWeight: 600, color: "#0891b2", textDecoration: "none" }}>Read Story →</a>
            </div>
          </article>
          <style>{`.conservation-card { } @media(max-width:600px){.conservation-card{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Expeditions */}
        <section id="expeditions" style={{ backgroundColor: "#121d34", padding: "4rem 0", color: "#fff" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.25rem", boxSizing: "border-box" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", height: "32px", width: "32px", alignItems: "center", justifyContent: "center", borderRadius: "9999px", backgroundColor: "rgba(8,145,178,0.2)", color: "#67e8f9" }}>
                <IconCompass style={{ height: "16px", width: "16px" }} />
              </span>
              <h2 style={{ fontFamily: "Merriweather, serif", fontSize: "2.25rem", fontWeight: 700, color: "#fff", margin: 0 }}>Expeditions</h2>
            </div>
            <p style={{ fontSize: "0.95rem", color: "#94a3b8", fontFamily: "Inter, sans-serif", marginTop: "0.25rem" }}>Journeys to the most remote corners of the ocean</p>
            <article style={{ position: "relative", marginTop: "1.5rem", maxWidth: "660px", borderRadius: "16px", overflow: "hidden" }}>
              <img src={expeditionCard.image} alt={expeditionCard.title} style={{ height: "330px", width: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(to bottom, transparent 30%, rgba(15,23,42,0.9))", padding: "1.25rem" }}>
                <p style={{ fontSize: "0.75rem", color: "#cbd5e1", fontFamily: "Inter, sans-serif" }}>{expeditionCard.date}</p>
                <h3 style={{ marginTop: "0.25rem", fontFamily: "Merriweather, serif", fontSize: "1.5rem", lineHeight: 1.3, color: "#fff" }}>{expeditionCard.title}</h3>
                <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", lineHeight: 1.6, color: "#e2e8f0", fontFamily: "Inter, sans-serif" }}>{expeditionCard.excerpt}</p>
              </div>
            </article>
          </div>
        </section>

        {/* About */}
        <section id="about" style={{ backgroundColor: "#ecfeff", padding: "4rem 0", textAlign: "center" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.25rem", boxSizing: "border-box" }}>
            <div style={{ display: "inline-flex", height: "56px", width: "56px", alignItems: "center", justifyContent: "center", borderRadius: "9999px", backgroundColor: "#0891b2", color: "#fff" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ height: "24px", width: "24px" }}>
                <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
                <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
                <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
              </svg>
            </div>
            <h2 style={{ marginTop: "0.75rem", fontFamily: "Merriweather, serif", fontSize: "2.1rem", fontWeight: 700, color: "#0f172a" }}>About DeepBlue</h2>
            <p style={{ margin: "0.75rem auto 0", maxWidth: "760px", fontSize: "0.96rem", lineHeight: 1.75, color: "#475569", fontFamily: "Inter, sans-serif" }}>
              DeepBlue is a community of ocean enthusiasts, marine biologists, and conservationists dedicated to sharing the wonders of our blue planet. Founded in 2020, we've grown to a community of over 15,000 readers who care deeply about marine life and ocean conservation.
            </p>
            <div style={{ margin: "1.75rem auto 0", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", maxWidth: "720px" }} className="metrics-grid">
              {metrics.map((item) => (
                <div key={item.label}>
                  <strong style={{ display: "block", fontFamily: "Merriweather, serif", fontSize: "2rem", fontWeight: 700, color: "#0891b2" }}>{item.value}</strong>
                  <span style={{ fontSize: "0.8rem", color: "#64748b", fontFamily: "Inter, sans-serif" }}>{item.label}</span>
                </div>
              ))}
            </div>
            <style>{`@media(max-width:480px){.metrics-grid{grid-template-columns:1fr!important}}`}</style>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer navItems={navItems} onNavigate={scrollToSection} />
    </div>
  );
}

export default App;