import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({ addToCart }) {
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
      <section style={{ padding: "5rem 1.5rem", background: "var(--cream)" }}>
        <div className="container">
          <h2 className="section-title">Nos Tissus</h2>
          <p className="section-subtitle">L'authenticité africaine au coeur de chaque création</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}>
            {[
              {
                nom: "Tissu Wax",
                desc: "Imprimé coloré et vibrant, le wax est le symbole de la mode africaine moderne.",
                emoji: "🌺",
                bg: "/images/tissu-wax.jpg",
              },
              {
                nom: "Tissu Batik",
                desc: "Technique artisanale de teinture à la cire, chaque pièce est unique et authentique.",
                emoji: "🎨",
                bg: "/images/tissu-batik.jpg",
              },
              {
                nom: "Tissu Adire",
                desc: "Tissu teint à l'indigo selon une tradition yoruba ancestrale, élégant et raffiné.",
                emoji: "✨",
                bg: "/images/tissu-adire.jpg",
              },
            ].map((tissu) => (
              <div key={tissu.nom} style={{
                position: "relative",
                height: "380px",
                borderRadius: "4px",
                overflow: "hidden",
                cursor: "pointer",
              }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector(".tissu-overlay").style.background =
                    "rgba(30,35,42,0.75)";
                  e.currentTarget.querySelector("img").style.transform = "scale(1.08)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector(".tissu-overlay").style.background =
                    "rgba(30,35,42,0.45)";
                  e.currentTarget.querySelector("img").style.transform = "scale(1)";
                }}
              >
                <img
                  src={tissu.bg}
                  alt={tissu.nom}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
                <div className="tissu-overlay" style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(30,35,42,0.45)",
                  transition: "var(--transition)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.5rem",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{tissu.emoji}</div>
                  <h3 style={{
                    fontFamily: "var(--font-title)",
                    fontSize: "2rem",
                    color: "var(--white)",
                    marginBottom: "0.5rem",
                  }}>{tissu.nom}</h3>
                  <p style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.6,
                  }}>{tissu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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