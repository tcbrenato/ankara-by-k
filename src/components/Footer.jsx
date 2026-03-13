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
              Des créations élégantes en tissus wax et batik,
              confectionnées sur mesure pour sublimer chaque femme.
            </p>

            {/* RESEAUX SOCIAUX */}
            <div style={{ display: "flex", gap: "0.75rem" }}>

              {/* INSTAGRAM */}
              <a href="https://www.instagram.com/ankara_by_k" target="_blank" rel="noreferrer"
                style={socialStyle}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#E1306C";
                  e.currentTarget.style.borderColor = "#E1306C";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(182,125,82,0.4)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* TIKTOK */}
              <a href="https://www.tiktok.com/@ankara_by_k" target="_blank" rel="noreferrer"
                style={socialStyle}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#000000";
                  e.currentTarget.style.borderColor = "#000000";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(182,125,82,0.4)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>

              {/* FACEBOOK */}
              <a href="https://www.facebook.com/Gilyvigan" target="_blank" rel="noreferrer"
                style={socialStyle}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#1877F2";
                  e.currentTarget.style.borderColor = "#1877F2";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(182,125,82,0.4)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* WHATSAPP */}
              <a href="https://wa.me/22901648301195" target="_blank" rel="noreferrer"
                style={socialStyle}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#25D366";
                  e.currentTarget.style.borderColor = "#25D366";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(182,125,82,0.4)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>

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
                <span style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  Bénin, Afrique de l'Ouest
                </span>
              </li>

              <li style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
                  </svg>
                </span>
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
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
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
                <span style={{ color: "#25D366", flexShrink: 0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </span>
                <a href="https://wa.me/22901648301195" target="_blank" rel="noreferrer" style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.6)",
                  transition: "var(--transition)",
                }}
                  onMouseEnter={e => e.target.style.color = "#25D366"}
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
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  border: "1px solid rgba(182,125,82,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--gold)",
  transition: "all 0.3s ease",
  color: "white",
};