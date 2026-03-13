export default function Contact() {
  const handleWhatsapp = (e) => {
    e.preventDefault();
    const nom = e.target.nom.value;
    const sujet = e.target.sujet.value;
    const message = e.target.message.value;
    const texte = `Bonjour Ankara By K ! 👋\n\nJe m'appelle *${nom}*\n\n📌 Sujet : ${sujet}\n\n💬 Message :\n${message}\n\nMerci !`;
    window.open(`https://wa.me/229648301195?text=${encodeURIComponent(texte)}`, "_blank");
  };

  return (
    <div style={{ background: "var(--white)" }}>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .contact-card {
          background: var(--white);
          border-radius: 4px;
          padding: 2.5rem;
          border: 1px solid rgba(182,125,82,0.15);
          box-shadow: 0 4px 20px rgba(30,35,42,0.08);
        }
        .contact-info-item {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          padding: 1rem;
          background: var(--cream);
          border-radius: 4px;
          border: 1px solid rgba(182,125,82,0.1);
          margin-bottom: 0.75rem;
        }
        .social-btn {
          padding: 0.6rem 1rem;
          border-radius: 2px;
          font-size: 0.75rem;
          font-family: var(--font-body);
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }
        .contact-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid rgba(182,125,82,0.3);
          border-radius: 2px;
          font-family: var(--font-body);
          font-size: 0.88rem;
          color: var(--dark);
          background: var(--cream);
          outline: none;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
        }
        .contact-input:focus {
          border-color: var(--gold);
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .contact-card {
            padding: 1.5rem !important;
          }
          .social-btn {
            padding: 0.5rem 0.75rem !important;
            font-size: 0.7rem !important;
          }
        }
      `}</style>

      {/* HERO */}
      <div style={{
        background: `linear-gradient(135deg, rgba(30,35,42,0.88) 0%, rgba(182,125,82,0.45) 100%),
          url('/images/hero.jpg') center/cover`,
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.72rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "var(--gold-light)",
          marginBottom: "1rem",
        }}>Parlons ensemble</p>
        <h1 style={{
          fontFamily: "var(--font-title)",
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          color: "var(--white)",
          lineHeight: 1,
          marginBottom: "1rem",
        }}>Contactez-nous</h1>
        <p style={{
          fontFamily: "var(--font-elegant)",
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.8)",
          fontStyle: "italic",
        }}>
          Collaboration, commande, question — nous sommes là pour vous
        </p>
      </div>

      {/* CONTENU */}
      <section style={{ padding: "4rem 1.5rem", background: "var(--cream)" }}>
        <div className="container">
          <div className="contact-grid">

            {/* INFOS CONTACT */}
            <div>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "0.5rem",
              }}>Nos coordonnées</p>
              <h2 style={{
                fontFamily: "var(--font-title)",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                color: "var(--dark)",
                marginBottom: "1rem",
                lineHeight: 1.1,
              }}>Restons en contact</h2>
              <p style={{
                fontFamily: "var(--font-elegant)",
                fontSize: "1rem",
                color: "var(--text-muted)",
                fontStyle: "italic",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}>
                Pour toute collaboration, commande spéciale ou question,
                contactez-nous via WhatsApp ou par email.
              </p>

              {/* ITEMS CONTACT */}
              <div className="contact-info-item">
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span style={{ fontSize: "0.85rem", color: "var(--dark)" }}>
                  Bénin, Afrique de l'Ouest
                </span>
              </div>

              <div className="contact-info-item">
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
                  </svg>
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "2px" }}>Téléphone</p>
                  <a href="tel:+22901648301195" style={{
                    fontSize: "0.9rem",
                    color: "var(--dark)",
                    fontWeight: "500",
                    textDecoration: "none",
                  }}>+229 01 64 83 0195</a>
                </div>
              </div>

              <div className="contact-info-item">
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "2px" }}>Email</p>
                  <a href="mailto:ankarabyk6@gmail.com" style={{
                    fontSize: "0.85rem",
                    color: "var(--dark)",
                    fontWeight: "500",
                    textDecoration: "none",
                  }}>ankarabyk6@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-item" style={{ background: "#e8f8ef" }}>
                <span style={{ color: "#25D366", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "2px" }}>WhatsApp</p>
                  <a href="https://wa.me/229648301195" target="_blank" rel="noreferrer" style={{
                    fontSize: "0.9rem",
                    color: "#25D366",
                    fontWeight: "500",
                    textDecoration: "none",
                  }}>Envoyer un message</a>
                </div>
              </div>

              {/* RESEAUX */}
              <p style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                margin: "1.5rem 0 0.75rem",
              }}>Suivez-nous</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {[
                  { label: "Instagram", lien: "https://www.instagram.com/ankara_by_k", color: "#E1306C" },
                  { label: "TikTok", lien: "https://www.tiktok.com/@ankara_by_k", color: "#000000" },
                  { label: "Facebook", lien: "https://www.facebook.com/Gilyvigan", color: "#1877F2" },
                ].map((rs) => (
                  <a key={rs.label} href={rs.lien} target="_blank" rel="noreferrer"
                    className="social-btn"
                    style={{
                      border: `1.5px solid ${rs.color}`,
                      color: rs.color,
                      background: "transparent",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = rs.color;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = rs.color;
                    }}
                  >{rs.label}</a>
                ))}
              </div>
            </div>

            {/* FORMULAIRE */}
            <div className="contact-card">
              <h3 style={{
                fontFamily: "var(--font-title)",
                fontSize: "2rem",
                color: "var(--gold)",
                marginBottom: "0.5rem",
              }}>Envoyez un message</h3>
              <p style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}>
                Votre message sera envoyé directement via WhatsApp
              </p>

              <form onSubmit={handleWhatsapp} style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}>
                <div>
                  <label style={labelStyle}>Votre nom *</label>
                  <input
                    name="nom"
                    type="text"
                    required
                    placeholder="Ex: Marie Kouassi"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Sujet *</label>
                  <select name="sujet" required className="contact-input">
                    <option value="">Choisir un sujet...</option>
                    <option value="Commande">Commande</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Partenariat">Partenariat</option>
                    <option value="Question">Question générale</option>
                    <option value="Publicité">Espace publicitaire</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Votre message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Décrivez votre demande..."
                    className="contact-input"
                    style={{ resize: "vertical", minHeight: "100px" }}
                  />
                </div>

                <button type="submit" style={{
                  padding: "0.9rem",
                  background: "#25D366",
                  color: "var(--white)",
                  border: "none",
                  borderRadius: "2px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                  width: "100%",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "#1da851"}
                  onMouseLeave={e => e.currentTarget.style.background = "#25D366"}
                >
                  💬 Envoyer via WhatsApp
                </button>

                <p style={{
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  fontStyle: "italic",
                }}>
                  En cliquant, vous serez redirigé vers WhatsApp
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "0.72rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "0.4rem",
  fontFamily: "var(--font-body)",
};