import { useState, useEffect } from "react";
import { products, categories, tissus } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Boutique({ addToCart, searchQuery, setSearchQuery }) {
  const [categorieActive, setCategorieActive] = useState("Tous");
  const [tissuActif, setTissuActif] = useState("Tous");
  const [tri, setTri] = useState("defaut");
  const [recherche, setRecherche] = useState(searchQuery || "");

  useEffect(() => {
    if (searchQuery) setRecherche(searchQuery);
  }, [searchQuery]);

  const produitsFiltres = products
    .filter((p) => {
      const matchCategorie = categorieActive === "Tous" || p.categorie === categorieActive;
      const matchTissu = tissuActif === "Tous" || p.tissu === tissuActif;
      const matchRecherche = p.nom.toLowerCase().includes(recherche.toLowerCase()) ||
        p.description.toLowerCase().includes(recherche.toLowerCase());
      return matchCategorie && matchTissu && matchRecherche;
    })
    .sort((a, b) => {
      if (tri === "prix-asc") return a.prix - b.prix;
      if (tri === "prix-desc") return b.prix - a.prix;
      if (tri === "nom") return a.nom.localeCompare(b.nom);
      return 0;
    });

  const resetFiltres = () => {
    setCategorieActive("Tous");
    setTissuActif("Tous");
    setTri("defaut");
    setRecherche("");
    if (setSearchQuery) setSearchQuery("");
  };

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>

      {/* HERO BOUTIQUE */}
      <div style={{
        background: `linear-gradient(135deg, rgba(30,35,42,0.9) 0%, rgba(182,125,82,0.5) 100%),
          url('/images/about1.jpg') center/cover`,
        padding: "5rem 1.5rem",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.72rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "var(--gold-light)",
          marginBottom: "1rem",
        }}>Toutes nos créations</p>
        <h1 style={{
          fontFamily: "var(--font-title)",
          fontSize: "clamp(3rem, 8vw, 5rem)",
          color: "var(--white)",
          lineHeight: 1,
          marginBottom: "1rem",
        }}>La Boutique</h1>
        <p style={{
          fontFamily: "var(--font-elegant)",
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.8)",
          fontStyle: "italic",
        }}>
          {products.length} créations disponibles en wax, batik et adirè
        </p>
      </div>

      <div className="container" style={{ padding: "3rem 1.5rem" }}>

        {/* BARRE RECHERCHE */}
        <div style={{
          background: "var(--white)",
          padding: "1.5rem",
          borderRadius: "4px",
          marginBottom: "1.5rem",
          boxShadow: "var(--shadow)",
        }}>
          <input
            type="text"
            placeholder="🔍 Rechercher un article..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              border: "1px solid rgba(182,125,82,0.3)",
              borderRadius: "2px",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              outline: "none",
              background: "var(--cream)",
            }}
          />
        </div>

        {/* FILTRES */}
        <div style={{
          background: "var(--white)",
          padding: "1.5rem",
          borderRadius: "4px",
          marginBottom: "2rem",
          boxShadow: "var(--shadow)",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            alignItems: "end",
          }}>

            {/* CATEGORIE */}
            <div>
              <p style={labelStyle}>Catégorie</p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setCategorieActive(cat)}
                    style={filterBtnStyle(categorieActive === cat)}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* TISSU */}
            <div>
              <p style={labelStyle}>Tissu</p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {tissus.map((t) => (
                  <button key={t} onClick={() => setTissuActif(t)}
                    style={filterBtnStyle(tissuActif === t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* TRI */}
            <div>
              <p style={labelStyle}>Trier par</p>
              <select
                value={tri}
                onChange={(e) => setTri(e.target.value)}
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid rgba(182,125,82,0.3)",
                  borderRadius: "2px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  color: "var(--dark)",
                  background: "var(--cream)",
                  outline: "none",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                <option value="defaut">Par défaut</option>
                <option value="prix-asc">Prix croissant</option>
                <option value="prix-desc">Prix décroissant</option>
                <option value="nom">Nom A-Z</option>
              </select>
            </div>

            {/* RESET */}
            <div>
              <button onClick={resetFiltres} style={{
                padding: "0.5rem 1.25rem",
                border: "1px solid rgba(182,125,82,0.4)",
                borderRadius: "2px",
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                transition: "var(--transition)",
                cursor: "pointer",
                background: "transparent",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--gold)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                ✕ Réinitialiser
              </button>
            </div>
          </div>
        </div>

        {/* RESULTATS */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          <p style={{
            fontFamily: "var(--font-elegant)",
            fontSize: "1rem",
            color: "var(--text-muted)",
            fontStyle: "italic",
          }}>
            {produitsFiltres.length} article{produitsFiltres.length > 1 ? "s" : ""} trouvé{produitsFiltres.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* GRILLE PRODUITS */}
        {produitsFiltres.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: "5rem 1rem",
            color: "var(--text-muted)",
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
            <p style={{
              fontFamily: "var(--font-elegant)",
              fontSize: "1.2rem",
              fontStyle: "italic",
              marginBottom: "1rem",
            }}>Aucun article trouvé</p>
            <button onClick={resetFiltres} className="btn-gold">
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
          }}>
            {produitsFiltres.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .boutique-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}

const labelStyle = {
  fontSize: "0.7rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "0.6rem",
  fontFamily: "var(--font-body)",
};

const filterBtnStyle = (active) => ({
  padding: "0.4rem 0.85rem",
  border: active ? "1.5px solid var(--gold)" : "1px solid rgba(182,125,82,0.3)",
  borderRadius: "2px",
  fontSize: "0.78rem",
  fontFamily: "var(--font-body)",
  color: active ? "var(--white)" : "var(--dark)",
  background: active ? "var(--gold)" : "transparent",
  cursor: "pointer",
  transition: "all 0.3s ease",
  letterSpacing: "0.05em",
});