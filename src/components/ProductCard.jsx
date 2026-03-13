import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedTaille, setSelectedTaille] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [lightbox, setLightbox] = useState(false);

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

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);

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
          cursor: zoom-in;
        }
        .product-img:hover { transform: scale(1.04); }
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
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: fadeIn 0.2s ease;
        }
        .lightbox-img {
          max-width: 90vw;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 4px;
          animation: zoomIn 0.25s ease;
        }
        .lightbox-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .lightbox-btn:hover { background: #B67D52; border-color: #B67D52; }
        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .lightbox-close:hover { background: #c0392b; }
        .lightbox-thumbs {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
        }
        .lightbox-counter {
          position: absolute;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.6);
          font-size: 0.8rem;
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.1em;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @media (max-width: 768px) {
          .product-img { height: 220px; }
          .thumb-btn { width: 30px; height: 30px; }
          .taille-btn { width: 28px; height: 28px; font-size: 0.65rem; }
          .btn-whatsapp, .btn-panier { font-size: 0.68rem; padding: 0.55rem 0.3rem; }
        }
      `}</style>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(false)}>

          {/* COMPTEUR */}
          <div className="lightbox-counter">
            {currentImage + 1} / {product.images.length}
          </div>

          {/* BOUTON FERMER */}
          <button className="lightbox-close" onClick={() => setLightbox(false)}>✕</button>

          {/* IMAGE */}
          <img
            src={product.images[currentImage]}
            alt={product.nom}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          {/* FLECHE GAUCHE */}
          {product.images.length > 1 && (
            <button
              className="lightbox-btn"
              style={{ left: "1rem" }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              ‹
            </button>
          )}

          {/* FLECHE DROITE */}
          {product.images.length > 1 && (
            <button
              className="lightbox-btn"
              style={{ right: "1rem" }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              ›
            </button>
          )}

          {/* MINIATURES */}
          <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                style={{
                  width: "48px",
                  height: "48px",
                  border: currentImage === i
                    ? "2px solid #B67D52"
                    : "2px solid rgba(255,255,255,0.3)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <img
                  src={img}
                  alt={`vue ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CARTE PRODUIT */}
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

        {/* ICONE ZOOM */}
        <div style={{
          position: "absolute",
          top: "0.6rem",
          right: "0.6rem",
          zIndex: 2,
          background: "rgba(255,255,255,0.85)",
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
          onClick={() => setLightbox(true)}
          onMouseEnter={e => e.currentTarget.style.background = "#B67D52"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.85)"}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
            <line x1="11" y1="8" x2="11" y2="14"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </div>

        {/* IMAGE PRINCIPALE */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={product.images[currentImage]}
            alt={product.nom}
            className="product-img"
            onClick={() => setLightbox(true)}
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

          <span style={{
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#B67D52",
            fontFamily: "'Jost', sans-serif",
          }}>{product.tissu}</span>

          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            fontWeight: "500",
            margin: "0.25rem 0 0.4rem",
            color: "#1E232A",
            lineHeight: 1.3,
          }}>{product.nom}</h3>

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

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem",
            color: "#B67D52",
            fontWeight: "500",
            marginBottom: "0.75rem",
          }}>
            {product.prix.toLocaleString()} <span style={{ fontSize: "0.75rem" }}>FCFA</span>
          </p>

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