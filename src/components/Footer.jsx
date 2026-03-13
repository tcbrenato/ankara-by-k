import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--dark)",
      color: "rgba(255,255,255,0.75)",
      paddingTop: "4rem",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>

          {/* COLONNE 1 — LOGO & DESCRIPTION */}
          <div>
            <div style={{
              fontFamily: "var(--font-title)",
              fontSize: "2.5rem",
              color: "var(--gold)",
              marginBottom: "1rem",
              lineHeight: 1,
            }}>
              Ankara by K
            </div>
            <p style={{
              fontFamily: "var(--font-elegant)",
              fontSize: "0.95rem",
              fontStyle: "italic",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.6)",
              marginBottom: "1.5rem",
            }}>
              Des créations élégantes en tissus wax et batik, confectionnées sur mesure pour sublimer chaque femme.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="https://www.instagram.com/ankara_by_k" target="_blank" rel="noreferrer"
                style={socialStyle}>IG</a>
              <a href="https://www.tiktok.com/@ankara_by_k" target="_blank" rel="noreferrer"
                style={socialStyle}>TK</a>
              <a href="https://www.facebook.com/Gilyvigan?mibextid=wwXIfr" target="_blank" rel="noreferrer"
                style={socialStyle}>FB</a>
            </div>
          </div>

          {/* COLONNE 2 — NAVIGATION */}
          <div>
            <h4 style={footerTitleStyle}>Navigation</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { path: "/", label: "Accueil" },
                { path: "/boutique", label: "Boutique" },
                { path: "/services", label: "Nos Services" },
                { path: "/contact", label: "Contact" },
                { path: "/publicite", label: "Espace Publicitaire" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    transition: "var(--transition)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                    onMouseEnter={e => e.target.style.color = "var(--gold)"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
                  >
                    <span style={{ color: "var(--gold)", fontSize: "0.6rem" }}>◆</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3 — CONTACT */}
          <div>
            <h4 style={footerTitleStyle}>Contact</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--gold)", fontSize: "1rem", marginTop: "2px" }}>📍</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  Bénin, Afrique de l'Ouest
                </span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span style={{ color: "var(--gold)", fontSize: "1rem" }}>📞</span>
                <a href="tel:+22901648301195" style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.6)",
                  transition: "var(--transition)",
                }}
                  onMouseEnter={e => e.target.style.color = "var(--gold)"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
                >
                  +229 01 64 83 0195
                </a>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span style={{ color: "var(--gold)", fontSize: "1rem" }}>✉️</span>
                <a href="mailto:ankarabyk6@gmail.com" style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.6)",
                  transition: "var(--transition)",
                }}
                  onMouseEnter={e => e.target.style.color = "var(--gold)"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
                >
                  ankarabyk6@gmail.com
                </a>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span style={{ color: "var(--gold)", fontSize: "1rem" }}>💬</span>
                <a href="https://wa.me/22901648301195" target="_blank" rel="noreferrer" style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.6)",
                  transition: "var(--transition)",
                }}
                  onMouseEnter={e => e.target.style.color = "var(--gold)"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* COLONNE 4 — TISSUS */}
          <div>
            <h4 style={footerTitleStyle}>Nos Tissus</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Tissu Wax", "Tissu Batik", "Tissu Adirè", "Créations Sur Mesure"].map((item) => (
                <li key={item} style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.6)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{ color: "var(--gold)", fontSize: "0.6rem" }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{
              marginTop: "2rem",
              padding: "1rem",
              border: "1px solid rgba(182,125,82,0.3)",
              borderRadius: "2px",
            }}>
              <p style={{
                fontFamily: "var(--font-elegant)",
                fontSize: "0.85rem",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.5)",
                textAlign: "center",
                lineHeight: 1.6,
              }}>
                "La mode, c'est l'art que l'on porte."
              </p>
            </div>
          </div>

        </div>

        {/* BAS DU FOOTER */}
        <div style={{
          padding: "1.5rem 0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>
            © 2026 ANKARA BY K. Tous droits réservés.
          </p>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>
            Propulsé par{" "}
            <span style={{ color: "var(--gold)", fontWeight: "500" }}>Rénato TCHOBO</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

const footerTitleStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--gold)",
  marginBottom: "1.5rem",
  paddingBottom: "0.75rem",
  borderBottom: "1px solid rgba(182,125,82,0.3)",
};

const socialStyle = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  border: "1px solid rgba(182,125,82,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--gold)",
  fontSize: "0.7rem",
  fontWeight: "600",
  letterSpacing: "0.05em",
  transition: "var(--transition)",
};