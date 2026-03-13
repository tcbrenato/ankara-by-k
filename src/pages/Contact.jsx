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

      {/* HERO */}
      <div style={{
        background: `linear-gradient(135deg, rgba(30,35,42,0.9) 0%, rgba(182,125,82,0.5) 100%),
          url('/images/about3.jpg') center/cover`,
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
        }}>Parlons ensemble</p>
        <h1 style={{
          fontFamily: "var(--font-title)",
          fontSize: "clamp(3rem, 8vw, 5rem)",
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

      {/* CONTENU PRINCIPAL */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--cream)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}>

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
                fontSize: "2.5rem",
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
                marginBottom: "2rem",
              }}>
                Pour toute collaboration, commande spéciale ou question,
                n'hésitez pas à nous contacter via WhatsApp ou par email.
              </p>

              {/* CARDS CONTACT */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    icon: "📞",
                    titre: "Téléphone & WhatsApp",
                    valeur: "+229 01 64 83 0195",
                    lien: "https://wa.me/229648301195",
                    btnLabel: "Appeler sur WhatsApp",
                    btnColor: "#25D366",
                  },
                  {
                    icon: "✉️",
                    titre: "Email",
                    valeur: "ankarabyk6@gmail.com",
                    lien: "mailto:ankarabyk6@gmail.com",
                    btnLabel: "Envoyer un email",
                    btnColor: "var(--gold)",
                  },
                  {
                    icon: "📍",
                    titre: "Localisation",
                    valeur: "Bénin, Afrique de l'Ouest",
                    lien: null,
                    btnLabel: null,
                  },
                ].map((item) => (
                  <div key={item.titre} style={{
                    background: "var(--white)",
                    borderRadius: "4px",
                    padding: "1.25rem",
                    border: "1px solid rgba(182,125,82,0.15)",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                  }}>
                    <div style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "var(--cream)",
                      border: "1px solid rgba(182,125,82,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}>{item.icon}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "0.2rem",
                      }}>{item.titre}</p>
                      <p style={{
                        fontFamily: "var(--font-elegant)",
                        fontSize: "0.95rem",
                        color: "var(--dark)",
                        fontWeight: "500",
                      }}>{item.valeur}</p>
                    </div>
                    {item.lien && (
                      <a href={item.lien} target="_blank" rel="noreferrer" style={{
                        padding: "0.5rem 0.85rem",
                        background: item.btnColor,
                        color: "var(--white)",
                        borderRadius: "2px",
                        fontSize: "0.7rem",
                        letterSpacing: "0.05em",
                        whiteSpace: "nowrap",
                        transition: "var(--transition)",
                        flexShrink: 0,
                      }}>{item.btnLabel}</a>
                    )}
                  </div>
                ))}
              </div>

              {/* RESEAUX SOCIAUX */}
              <div style={{ marginTop: "2rem" }}>
                <p style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}>Suivez-nous</p>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {[
                    { label: "Instagram", lien: "https://www.instagram.com/ankara_by_k", color: "#E1306C" },
                    { label: "TikTok", lien: "https://www.tiktok.com/@ankara_by_k", color: "#000000" },
                    { label: "Facebook", lien: "https://www.facebook.com/Gilyvigan", color: "#1877F2" },
                  ].map((rs) => (
                    <a key={rs.label} href={rs.lien} target="_blank" rel="noreferrer" style={{
                      padding: "0.6rem 1rem",
                      border: `1.5px solid ${rs.color}`,
                      borderRadius: "2px",
                      color: rs.color,
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-body)",
                      letterSpacing: "0.05em",
                      transition: "var(--transition)",
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
            </div>

            {/* FORMULAIRE */}
            <div style={{
              background: "var(--white)",
              borderRadius: "4px",
              padding: "2.5rem",
              border: "1px solid rgba(182,125,82,0.15)",
              boxShadow: "var(--shadow)",
            }}>
              <h3 style={{
                fontFamily: "var(--font-title)",
                fontSize: "2rem",
                color: "var(--gold)",
                marginBottom: "0.5rem",
              }}>Envoyez un message</h3>
              <p style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                marginBottom: "2rem",
                fontStyle: "italic",
              }}>
                Votre message sera envoyé directement via WhatsApp
              </p>

              <form onSubmit={handleWhatsapp} style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}>
                <div>
                  <label style={labelStyle}>Votre nom *</label>
                  <input
                    name="nom"
                    type="text"
                    required
                    placeholder="Ex: Marie Kouassi"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Sujet *</label>
                  <select name="sujet" required style={inputStyle}>
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
                    rows={5}
                    placeholder="Décrivez votre demande..."
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                  />
                </div>

                <button type="submit" style={{
                  padding: "1rem",
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
                  transition: "var(--transition)",
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
  marginBottom: "0.5rem",
  fontFamily: "var(--font-body)",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  border: "1px solid rgba(182,125,82,0.3)",
  borderRadius: "2px",
  fontFamily: "var(--font-body)",
  fontSize: "0.88rem",
  color: "var(--dark)",
  background: "var(--cream)",
  outline: "none",
  transition: "border-color 0.3s ease",
};