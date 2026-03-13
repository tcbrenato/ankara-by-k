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
    window.open(`https://wa.me/229648301195?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <style>{`
        .product-card {
          background: #fff;
          border: 1px solid rgba(182,125,82,0.15);
          border-radius: 4px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(30,35,42,0.15);
        }
        .product-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .product-img:hover {
          transform: scale(1.04);
        }
        .thumb-btn {
          width: 36px;
          height: 36px;
          border-radius: 2px;
          overflow: hidden;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .taille-btn {
          width: 32px;
          height: 32px;
          border-radius: 2px;
          font-size: 0.7rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-whatsapp {
          flex: 1;
          padding: 0.6rem 0.4rem;
          background: #25D366;
          color: #fff;
          border: none;
          border-radius: 2px;
          font-size: 0.72rem;
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.03em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          transition: all 0.3s ease;
        }
        .btn-whatsapp:hover { background: #1da851; }
        .btn-panier {
          flex: 1;
          padding: 0.6rem 0.4rem;
          background: #1E232A;
          color: #fff;
          border: none;
          border-radius: 2px;
          font-size: 0.72rem;
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.03em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          transition: all 0.3s ease;
        }
        .btn-panier:hover { background: #B67D52; }
        @media (max-width: 768px) {
          .product-img { height: 220px; }
          .thumb-btn { width: 30px; height: 30px; }
          .taille-btn { width: 28px; height: 28px; font-size: 0.65rem; }
          .btn-whatsapp, .btn-panier { font-size: 0.68rem; padding: 0.55rem 0.3rem; }
        }
      `}</style>

      <div className="product-card" style={{ position: "relative" }}>

        {/* BADGES */}
        <div style={{
          position: "absolute",
          top: "0.6rem",
          left: "0.6rem",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
        }}>
          {product.nouveaute && (
            <span style={{
              background: "#1E232A",
              color: "#fff",
              fontSize: "0.58rem",
              padding: "2px 7px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "'Jost', sans-serif",
            }}>Nouveau</span>
          )}
          {product.solde && (
            <span style={{
              background: "#c0392b",
              color: "#fff",
              fontSize: "0.58rem",
              padding: "2px 7px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "'Jost', sans-serif",
            }}>Soldes</span>
          )}
        </div>

        {/* IMAGE PRINCIPALE */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={product.images[currentImage]}
            alt={product.nom}
            className="product-img"
          />

          {/* MINIATURES */}
          <div style={{
            position: "absolute",
            bottom: "0.6rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.3rem",
          }}>
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className="thumb-btn"
                style={{
                  border: currentImage === i
                    ? "2px solid #B67D52"
                    : "2px solid rgba(255,255,255,0.6)",
                }}
              >
                <img src={img} alt={`vue ${i + 1}`} className="thumb-img" />
              </button>
            ))}
          </div>
        </div>

        {/* INFOS */}
        <div style={{ padding: "1rem" }}>

          {/* TISSU */}
          <span style={{
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#B67D52",
            fontFamily: "'Jost', sans-serif",
          }}>{product.tissu}</span>

          {/* NOM */}
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            fontWeight: "500",
            margin: "0.25rem 0 0.4rem",
            color: "#1E232A",
            lineHeight: 1.3,
          }}>{product.nom}</h3>

          {/* DESCRIPTION */}
          <p style={{
            fontSize: "0.75rem",
            color: "#7a6a5e",
            lineHeight: 1.5,
            marginBottom: "0.75rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>{product.description}</p>

          {/* PRIX */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem",
            color: "#B67D52",
            fontWeight: "500",
            marginBottom: "0.75rem",
          }}>
            {product.prix.toLocaleString()} <span style={{ fontSize: "0.75rem" }}>FCFA</span>
          </p>

          {/* TAILLES */}
          <div style={{ marginBottom: "0.75rem" }}>
            <p style={{
              fontSize: "0.65rem",
              color: "#7a6a5e",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.4rem",
              fontFamily: "'Jost', sans-serif",
            }}>Taille</p>
            <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
              {product.tailles.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTaille(t)}
                  className="taille-btn"
                  style={{
                    border: selectedTaille === t
                      ? "1.5px solid #B67D52"
                      : "1px solid rgba(182,125,82,0.3)",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: selectedTaille === t ? "600" : "400",
                    color: selectedTaille === t ? "#fff" : "#1E232A",
                    background: selectedTaille === t ? "#B67D52" : "transparent",
                  }}
                >{t}</button>
              ))}
            </div>
          </div>

          {/* ALERTE */}
          {showAlert && (
            <p style={{
              fontSize: "0.7rem",
              color: "#c0392b",
              marginBottom: "0.5rem",
              fontStyle: "italic",
            }}>
              ⚠️ Veuillez sélectionner une taille
            </p>
          )}

          {/* BOUTONS */}
          <div style={{ display: "flex", gap: "0.4rem" }}>
            <button onClick={handleWhatsapp} className="btn-whatsapp">
              💬 WhatsApp
            </button>
            <button onClick={handleAddToCart} className="btn-panier">
              🛒 Panier
            </button>
          </div>
        </div>
      </div>
    </>
  );
}