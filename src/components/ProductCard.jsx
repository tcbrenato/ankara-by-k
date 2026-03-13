import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedTaille, setSelectedTaille] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    if (!selectedTaille) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2500);
      return;
    }
    addToCart(product, selectedTaille);
    setSelectedTaille("");
  };

  const handleWhatsapp = () => {
    const taille = selectedTaille || "à préciser";
    const message = `Bonjour Ankara By K ! 👋\n\nJe suis intéressée par :\n\n• ${product.nom}\n• Taille : ${taille}\n• Prix : ${product.prix.toLocaleString()} FCFA\n\nMerci !`;
    window.open(`https://wa.me/22901648301195?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div style={{
      background: "var(--white)",
      border: "1px solid rgba(182,125,82,0.15)",
      borderRadius: "4px",
      overflow: "hidden",
      transition: "var(--transition)",
      position: "relative",
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-hover)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* BADGES */}
      <div style={{
        position: "absolute",
        top: "0.75rem",
        left: "0.75rem",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        gap: "0.35rem",
      }}>
        {product.nouveaute && (
          <span style={{
            background: "var(--dark)",
            color: "var(--white)",
            fontSize: "0.62rem",
            padding: "3px 8px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
          }}>Nouveau</span>
        )}
        {product.solde && (
          <span style={{
            background: "#c0392b",
            color: "var(--white)",
            fontSize: "0.62rem",
            padding: "3px 8px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
          }}>Soldes</span>
        )}
      </div>

      {/* IMAGES */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={product.images[currentImage]}
          alt={product.nom}
          style={{
            width: "100%",
            height: "320px",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            display: "block",
          }}
          onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        />

        {/* MINIATURES */}
        <div style={{
          position: "absolute",
          bottom: "0.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.4rem",
        }}>
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              style={{
                width: "42px",
                height: "42px",
                border: currentImage === i
                  ? "2px solid var(--gold)"
                  : "2px solid rgba(255,255,255,0.6)",
                borderRadius: "2px",
                overflow: "hidden",
                padding: 0,
                cursor: "pointer",
                transition: "var(--transition)",
              }}
            >
              <img
                src={img}
                alt={`vue ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* INFOS PRODUIT */}
      <div style={{ padding: "1.25rem" }}>

        {/* TISSU */}
        <span style={{
          fontSize: "0.68rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--gold)",
          fontFamily: "var(--font-body)",
        }}>{product.tissu}</span>

        {/* NOM */}
        <h3 style={{
          fontFamily: "var(--font-elegant)",
          fontSize: "1.1rem",
          fontWeight: "500",
          margin: "0.35rem 0 0.5rem",
          color: "var(--dark)",
          lineHeight: 1.3,
        }}>{product.nom}</h3>

        {/* DESCRIPTION */}
        <p style={{
          fontSize: "0.8rem",
          color: "var(--text-muted)",
          lineHeight: 1.6,
          marginBottom: "1rem",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>{product.description}</p>

        {/* PRIX */}
        <p style={{
          fontFamily: "var(--font-elegant)",
          fontSize: "1.3rem",
          color: "var(--gold)",
          fontWeight: "500",
          marginBottom: "1rem",
        }}>
          {product.prix.toLocaleString()} <span style={{ fontSize: "0.8rem" }}>FCFA</span>
        </p>

        {/* TAILLES */}
        <div style={{ marginBottom: "1rem" }}>
          <p style={{
            fontSize: "0.72rem",
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}>Taille</p>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {product.tailles.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTaille(t)}
                style={{
                  width: "36px",
                  height: "36px",
                  border: selectedTaille === t
                    ? "1.5px solid var(--gold)"
                    : "1px solid rgba(182,125,82,0.3)",
                  borderRadius: "2px",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-body)",
                  fontWeight: selectedTaille === t ? "600" : "400",
                  color: selectedTaille === t ? "var(--white)" : "var(--dark)",
                  background: selectedTaille === t ? "var(--gold)" : "transparent",
                  transition: "var(--transition)",
                  cursor: "pointer",
                }}
              >{t}</button>
            ))}
          </div>
        </div>

        {/* ALERTE TAILLE */}
        {showAlert && (
          <p style={{
            fontSize: "0.75rem",
            color: "#c0392b",
            marginBottom: "0.75rem",
            fontStyle: "italic",
          }}>
            ⚠️ Veuillez sélectionner une taille
          </p>
        )}

        {/* BOUTONS */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={handleWhatsapp}
            style={{
              flex: 1,
              padding: "0.65rem 0.5rem",
              background: "#25D366",
              color: "var(--white)",
              border: "none",
              borderRadius: "2px",
              fontSize: "0.75rem",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.05em",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.3rem",
              transition: "var(--transition)",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#1da851"}
            onMouseLeave={e => e.currentTarget.style.background = "#25D366"}
          >
            💬 WhatsApp
          </button>

          <button
            onClick={handleAddToCart}
            style={{
              flex: 1,
              padding: "0.65rem 0.5rem",
              background: "var(--dark)",
              color: "var(--white)",
              border: "none",
              borderRadius: "2px",
              fontSize: "0.75rem",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.05em",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.3rem",
              transition: "var(--transition)",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--gold)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--dark)"}
          >
            🛒 Panier
          </button>
        </div>
      </div>
    </div>
  );
}