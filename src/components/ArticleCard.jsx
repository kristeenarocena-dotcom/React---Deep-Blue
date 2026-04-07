import { Calendar, User, ArrowRight } from "lucide-react";

const categoryStyles = {
  "Marine Life": { background: "#0e7490", color: "#fff" },
  Conservation: { background: "#0f766e", color: "#fff" },
  "Deep Sea": { background: "#0369a1", color: "#fff" },
  Expeditions: { background: "#0e7490", color: "#fff" },
};  

function ArticleCard({ article }) {
  const badge = categoryStyles[article.category] ?? {
    background: "#0e7490",
    color: "#fff",
  };
  const isDeepSea = article.category === "Deep Sea";

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.07), 0 1px 8px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 1px 3px rgba(0,0,0,0.07), 0 1px 8px rgba(0,0,0,0.04)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* ── Image ── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "16/10",
        }}
      >
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />

        {/* Category Badge */}
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: badge.background,
            color: badge.color,
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: "9999px",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.4,
          }}
        >
          {article.category}
        </span>
      </div>

      {/* ── Content ── */}
      <div
        style={{
          padding: "1rem 1.1rem 1.2rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.9rem",
            fontSize: "0.72rem",
            color: "#94a3b8",
            fontFamily: "Inter, sans-serif",
            marginBottom: "0.5rem",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <Calendar size={11} strokeWidth={1.8} />
            {article.date}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <User size={11} strokeWidth={1.8} />
            {article.author}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1rem",
            fontWeight: 700,
            lineHeight: 1.45,
            color: isDeepSea ? "#0891b2" : "#0f172a",
            margin: "0 0 0.5rem",
          }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.84rem",
            lineHeight: 1.7,
            color: "#64748b",
            margin: "0 0 auto",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.excerpt}
        </p>

        {/* Read Story */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            marginTop: "0.9rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "#0891b2",
            textDecoration: "none",
            fontFamily: "Inter, sans-serif",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0e7490")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#0891b2")}
        >
          Read Story <ArrowRight size={13} strokeWidth={2.2} />
        </a>
      </div>
    </article>
  );
}

export default ArticleCard;
