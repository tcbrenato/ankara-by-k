import { Link } from "react-router-dom";
import { useState } from "react";
import Temoignages from "../components/Temoignages";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({ addToCart }) {
  const [activeTissu, setActiveTissu] = useState(null);
  const nouveautes = products.filter((p) => p.nouveaute);
  

  return (
    <div>

      {/* HERO */}
      <section style={{
        minHeight: "92vh",
        background: `linear-gradient(135deg, rgba(30,35,42,0.75) 0%, rgba(182,125,82,0.35) 100%),
          url('/images/hero.jpg') center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: "700px", zIndex: 1 }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold-light)",
            marginBottom: "1.5rem",
          }}>
            ✦ Collection Wax & Batik ✦
          </p>
          <h1 style={{
            fontFamily: "var(--font-title)",
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            color: "var(--white)",
            lineHeight: 1,
            marginBottom: "1rem",
          }}>
            Ankara by K
          </h1>
          <p style={{
            fontFamily: "var(--font-elegant)",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "rgba(255,255,255,0.85)",
            fontStyle: "italic",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}>
            Des créations élégantes en tissus wax et batik,
            confectionnées sur mesure pour sublimer chaque femme.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/boutique" className="btn-gold">
              Découvrir la boutique
            </Link>
            <Link to="/services" className="btn-outline" style={{
              color: "var(--white)",
              borderColor: "rgba(255,255,255,0.6)",
            }}>
              Nos services
            </Link>
          </div>
        </div>
        <div style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}>
          <span>Défiler</span>
          <div style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
          }} />
        </div>
      </section>

      {/* CHIFFRES */}
      <section style={{ background: "var(--dark)", padding: "3rem 1.5rem" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}>
            {[
              { chiffre: "100+", label: "Clientes satisfaites" },
              { chiffre: "8", label: "Collections disponibles" },
              { chiffre: "3", label: "Tissus authentiques" },
              { chiffre: "100%", label: "Sur mesure" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{
                  fontFamily: "var(--font-title)",
                  fontSize: "2.8rem",
                  color: "var(--gold)",
                  lineHeight: 1,
                }}>{item.chiffre}</div>
                <div style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOUVEAUTES */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--cream)" }}>
        <div className="container">
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold)",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}>Dernières créations</p>
          <h2 className="section-title">Nouveautés</h2>
          <p className="section-subtitle">Des pièces uniques pour affirmer votre style</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}>
            {nouveautes.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/boutique" className="btn-gold">
              Voir toute la boutique
            </Link>
          </div>
        </div>
      </section>

      {/* A PROPOS */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--white)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "0.5rem",
              }}>Notre histoire</p>
              <h2 style={{
                fontFamily: "var(--font-title)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--dark)",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}>L'élégance africaine réinventée</h2>
              <p style={{
                fontFamily: "var(--font-elegant)",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "var(--text-muted)",
                fontStyle: "italic",
                marginBottom: "1.5rem",
              }}>
                Ankara By K est née d'une passion profonde pour les tissus africains authentiques. Chaque création est confectionnée sur mesure, alliant tradition et modernité pour sublimer la femme africaine contemporaine.
              </p>
              <p style={{
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "var(--text-muted)",
                marginBottom: "2rem",
              }}>
                Nos créations en wax, batik et adirè sont pensées pour mettre en valeur chaque silhouette, avec des coupes modernes et des finitions soignées. Pas de couture sur place  tout est déjà confectionné avec soin et précision..
              </p>
              <Link to="/services" className="btn-outline">
                Découvrir nos services
              </Link>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}>
              {[
                "/images/about1.jpg",
                "/images/about2.jpg",
                "/images/about3.jpg",
                "/images/about4.jpg",
              ].map((img, i) => (
                <div key={i} style={{
                  overflow: "hidden",
                  borderRadius: "4px",
                  marginTop: i % 2 === 1 ? "2rem" : "0",
                }}>
                  <img
                    src={img}
                    alt={`creation ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TISSUS */}
<section style={{ padding: "5rem 1.5rem", background: "var(--white)" }}>
  <style>{`
    .tissu-card {
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      cursor: pointer;
      height: 420px;
    }
    .tissu-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      display: block;
    }
    .tissu-card:hover img { transform: scale(1.06); }
    .tissu-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(30,35,42,0.92) 0%, rgba(30,35,42,0.2) 60%, transparent 100%);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 1.75rem;
      transition: all 0.3s ease;
    }
    .tissu-card:hover .tissu-overlay {
      background: linear-gradient(to top, rgba(182,125,82,0.85) 0%, rgba(30,35,42,0.4) 100%);
    }
    .tissu-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 3rem;
    }
    .tissu-voir-plus {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 0.75rem;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.7);
      font-family: var(--font-body);
      opacity: 0;
      transform: translateY(8px);
      transition: all 0.3s ease;
    }
    .tissu-card:hover .tissu-voir-plus {
      opacity: 1;
      transform: translateY(0);
    }
    .tissu-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.75);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      animation: fadeIn 0.25s ease;
    }
    .tissu-modal {
      background: var(--white);
      border-radius: 4px;
      max-width: 680px;
      width: 100%;
      overflow: hidden;
      animation: zoomIn 0.25s ease;
      position: relative;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes zoomIn { from { transform: scale(0.92); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    @media (max-width: 768px) {
      .tissu-grid { grid-template-columns: 1fr; }
      .tissu-card { height: 320px; }
    }
  `}</style>

  {/* MODAL */}
  {activeTissu && (
    <div className="tissu-modal-overlay" onClick={() => setActiveTissu(null)}>
      <div className="tissu-modal" onClick={e => e.stopPropagation()}>
        <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
          <img src={activeTissu.image} alt={activeTissu.nom}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(30,35,42,0.7) 0%, transparent 60%)",
            display: "flex", alignItems: "flex-end", padding: "1.5rem"
          }}>
            <h3 style={{
              fontFamily: "var(--font-title)", fontSize: "2.5rem",
              color: "white", lineHeight: 1
            }}>{activeTissu.nom}</h3>
          </div>
          <button onClick={() => setActiveTissu(null)} style={{
            position: "absolute", top: "1rem", right: "1rem",
            background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)",
            color: "white", width: "36px", height: "36px", borderRadius: "50%",
            cursor: "pointer", fontSize: "1rem", display: "flex",
            alignItems: "center", justifyContent: "center"
          }}>✕</button>
        </div>
        <div style={{ padding: "2rem" }}>
          <p style={{
            fontFamily: "var(--font-elegant)", fontSize: "1rem",
            lineHeight: 1.9, color: "var(--dark)", fontStyle: "italic"
          }}>{activeTissu.description}</p>
          <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "flex-end" }}>
            <button onClick={() => setActiveTissu(null)} style={{
              padding: "0.7rem 1.75rem",
              background: "var(--gold)", color: "white", border: "none",
              borderRadius: "2px", fontFamily: "var(--font-body)",
              fontSize: "0.78rem", letterSpacing: "0.1em",
              textTransform: "uppercase", cursor: "pointer"
            }}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  )}

  <div className="container">
    <div style={{ textAlign: "center" }}>
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.72rem",
        letterSpacing: "0.35em", textTransform: "uppercase",
        color: "var(--gold)", marginBottom: "0.75rem"
      }}>Matières d'exception</p>
      <h2 className="section-title">Nos Tissus</h2>
      <p className="section-subtitle">L'authenticité africaine au cœur de chaque création</p>
    </div>

    <div className="tissu-grid">
      {[
        {
          nom: "Tissu Wax",
          image: "/images/tissu-wax.jpg",
          description: "Le wax connu comme un tissu 100 % coton réputé pour ses motifs colorés et répétitifs, héritiers des techniques de batik indonésien et popularisés en Afrique de l'Ouest. Léger, respirant et durable, il sert à la confection de vêtements, d'accessoires et d'articles de décoration. Chaque motif, souvent porteur de sens, confère caractère et identité aux créations, un mélange unique de tradition et d'élégance contemporaine.",
        },
        {
          nom: "Tissu Batik",
          image: "/images/tissu-batik.jpg",
          description: "Le batik est un tissu en coton ou en soie décoré selon la technique de la réserve à la cire : des motifs sont dessinés à la cire avant teinture, puis la cire est retirée pour révéler des contrastes nets et des détails riches. Originaire d'Indonésie, le batik se distingue par ses motifs raffinés et symboliques, sa palette souvent subtile et son savoir-faire artisanal. Idéal pour vêtements, accessoires et décoration, il incarne tradition, élégance et authenticité.",
        },
        {
          nom: "Tissu Adirè",
          image: "/images/tissu-adire.jpg",
          description: "L'adirè est un tissu traditionnel nigérian en coton, décoré par des techniques de teinture à réserve (nœuds, cordes ou pochoirs) pour créer des motifs indigo profonds et texturés. Réalisé artisanalement, il se reconnaît à ses nuances bleu-bleu foncé, ses motifs géométriques ou figuratifs et son allure authentique. Utilisé pour vêtements et accessoires, l'adirè incarne un riche patrimoine culturel et un style intemporel.",
        },
      ].map((t) => (
        <div key={t.nom} className="tissu-card" onClick={() => setActiveTissu(t)}>
          <img src={t.image} alt={t.nom} />
          <div className="tissu-overlay">
            <span style={{
              fontSize: "0.65rem", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--gold-light)",
              fontFamily: "var(--font-body)", marginBottom: "0.4rem"
            }}>Découvrir</span>
            <h3 style={{
              fontFamily: "var(--font-title)", fontSize: "2rem",
              color: "white", lineHeight: 1
            }}>{t.nom}</h3>
            <p className="tissu-voir-plus">
              En savoir plus
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <Temoignages />
      {/* CTA FINAL */}
      <section style={{
        padding: "6rem 1.5rem",
        background: "var(--dark)",
        textAlign: "center",
      }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2 style={{
            fontFamily: "var(--font-title)",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            color: "var(--gold)",
            marginBottom: "1rem",
          }}>Votre Style, Notre Passion</h2>
          <p style={{
            fontFamily: "var(--font-elegant)",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.75)",
            fontStyle: "italic",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}>
            Chaque femme mérite de porter une pièce unique qui raconte son histoire.
            Découvrez notre collection et trouvez la vôtre.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/boutique" className="btn-gold">
              Voir la boutique
            </Link>
            <a
              href="https://wa.me/22964830195"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "0.75rem 2rem",
                background: "#25D366",
                color: "var(--white)",
                borderRadius: "2px",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}