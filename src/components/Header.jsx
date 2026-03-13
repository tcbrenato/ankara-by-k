import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { products } from "../data/products";

export default function Header({ cartCount = 0, onCartOpen, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
    setSearchOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/boutique", label: "Boutique" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/publicite", label: "Espace Pub" },
  ];

  const bannerItems = products.map((p) => `${p.nom} — ${p.prix.toLocaleString()} FCFA`);

  return (
    <>
      {/* SCROLL BANNER */}
      <div style={{
        background: "#1a1410",
        color: "#D4A574",
        padding: "0.45rem 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}>
        <div style={{
          display: "inline-block",
          animation: "scrollBanner 35s linear infinite",
          fontSize: "0.72rem",
          letterSpacing: "0.14em",
          fontFamily: "'DM Sans', sans-serif",
          textTransform: "uppercase",
        }}>
          {[...bannerItems, ...bannerItems].map((item, i) => (
            <span key={i} style={{ marginRight: "4rem" }}>✦ {item}</span>
          ))}
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
        borderBottom: "1px solid rgba(182,125,82,0.15)",
        boxShadow: scrolled ? "0 2px 24px rgba(30,20,16,0.08)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2.5rem",
          height: "80px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}>

          {/* LOGO */}
          <Link to="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div style={{ lineHeight: 1 }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "2.5rem",
                color: "#1a1410",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>
                Ankara <span style={{ color: "#B67D52" }}>by K</span>
              </div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "0.7rem",
                color: "#D4A574",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginTop: "3px",
                paddingLeft: "2px",
              }}>
                Wax & Batik Élégance
              </div>
            </div>
          </Link>

          {/* NAV DESKTOP */}
          <nav style={{ display: "flex", gap: 0, alignItems: "center" }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: location.pathname === link.path ? "#B67D52" : "#1a1410",
                padding: "0.5rem 1.2rem",
                position: "relative",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              className="nav-link"
              >
                {link.label}
                {location.pathname === link.path && (
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60%",
                    height: "1.5px",
                    background: "#B67D52",
                    display: "block",
                  }} />
                )}
              </Link>
            ))}
          </nav>

          {/* ACTIONS DROITE */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexShrink: 0 }}>

            {/* RECHERCHE */}
            <button onClick={() => setSearchOpen(!searchOpen)} style={{
              width: "38px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: "#1a1410",
              transition: "background 0.2s",
              background: searchOpen ? "#F8F4EE" : "transparent",
              border: "none",
              cursor: "pointer",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>

            {/* PANIER */}
            <button onClick={onCartOpen} style={{
              width: "38px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: "#1a1410",
              position: "relative",
              transition: "background 0.2s",
              border: "none",
              cursor: "pointer",
              background: "transparent",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {cartCount > 0 && (
                <span style={{
                  position: "absolute",
                  top: "4px",
                  right: "4px",
                  background: "#B67D52",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "15px",
                  height: "15px",
                  fontSize: "9px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* BOUTON COMMANDER */}
            <button
              onClick={onCartOpen}
              className="cta-btn"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.55rem 1.3rem",
                background: "#1a1410",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                marginLeft: "0.4rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#B67D52"}
              onMouseLeave={e => e.currentTarget.style.background = "#1a1410"}
            >
              Commander
            </button>

            {/* BURGER MOBILE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="burger-btn"
              style={{
                display: "none",
                flexDirection: "column",
                gap: "5px",
                padding: "4px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span style={{
                width: "22px", height: "2px",
                background: "#1a1410",
                display: "block",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }} />
              <span style={{
                width: "22px", height: "2px",
                background: "#1a1410",
                display: "block",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                width: "22px", height: "2px",
                background: "#1a1410",
                display: "block",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }} />
            </button>
          </div>
        </div>

        {/* LIGNE OR */}
        <div style={{
          height: "2px",
          background: "linear-gradient(90deg, transparent, #B67D52, #D4A574, #B67D52, transparent)",
          opacity: 0.45,
        }} />

        {/* BARRE DE RECHERCHE */}
        {searchOpen && (
          <div style={{
            background: "#F8F4EE",
            borderTop: "1px solid rgba(182,125,82,0.15)",
            padding: "0.9rem 2.5rem",
            display: "flex",
          }}>
            <form onSubmit={handleSearch} style={{
              display: "flex",
              gap: "0.5rem",
              maxWidth: "480px",
              width: "100%",
            }}>
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                style={{
                  flex: 1,
                  padding: "0.55rem 1rem",
                  border: "1px solid rgba(182,125,82,0.35)",
                  background: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.88rem",
                  color: "#1a1410",
                  outline: "none",
                  borderRadius: 0,
                }}
              />
              <button type="submit" style={{
                padding: "0.55rem 1.2rem",
                background: "#B67D52",
                color: "#fff",
                border: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 0,
              }}>
                Chercher
              </button>
            </form>
          </div>
        )}
      </header>

      {/* MENU LATERAL MOBILE */}
      <div style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "300px",
        height: "100vh",
        background: "#1a1410",
        zIndex: 2000,
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s ease",
        padding: "2rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}>
        <button onClick={() => setMenuOpen(false)} style={{
          color: "#B67D52",
          fontSize: "1.4rem",
          alignSelf: "flex-end",
          marginBottom: "2rem",
          fontWeight: 300,
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}>✕</button>

        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: "2rem",
          color: "#fff",
          marginBottom: "0.25rem",
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}>
          Ankara <span style={{ color: "#B67D52" }}>by K</span>
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "0.68rem",
          color: "#D4A574",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "2rem",
        }}>
          Wax & Batik Élégance
        </div>

        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} style={{
            color: location.pathname === link.path ? "#B67D52" : "rgba(255,255,255,0.88)",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: "0.88rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "0.9rem 0",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            transition: "color 0.2s",
            textDecoration: "none",
          }}>
            {link.label}
          </Link>
        ))}

        <div style={{ marginTop: "auto", textAlign: "center" }}>
          <div style={{
            color: "#D4A574",
            fontSize: "0.8rem",
            marginBottom: "0.5rem",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            📞 +229 01 64 83 0195
          </div>
          <div style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.75rem",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            ankarabyk6@gmail.com
          </div>
        </div>
      </div>

      {/* OVERLAY MOBILE */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 1999,
        }} />
      )}

      {/* STYLES GLOBAUX */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@400;500;700&display=swap');

        @keyframes scrollBanner {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: none; }
        }

        .nav-link:hover {
          color: #B67D52 !important;
        }

        .cta-btn:hover {
          background: #B67D52 !important;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
          .cta-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}