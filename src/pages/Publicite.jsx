export default function Publicite() {
  const handleWhatsapp = (formule) => {
    const message = `Bonjour Ankara By K ! 👋\n\nJe suis intéressé(e) par votre *Espace Publicitaire*.\n\n📌 Formule choisie : ${formule}\n\nPouvez-vous me donner plus d'informations ?\n\nMerci !`;
    window.open(`https://wa.me/229648301195?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div style={{ background: "var(--white)" }}>

      {/* HERO */}
      <div style={{
        background: `linear-gradient(135deg, rgba(30,35,42,0.9) 0%, rgba(182,125,82,0.5) 100%),
          url('/images/about4.jpg') center/cover`,
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
        }}>Visibilité & Partenariat</p>
        <h1 style={{
          fontFamily: "var(--font-title)",
          fontSize: "clamp(3rem, 8vw, 5rem)",
          color: "var(--white)",
          lineHeight: 1,
          marginBottom: "1rem",
        }}>Espace Publicitaire</h1>
        <p style={{
          fontFamily: "var(--font-elegant)",
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.8)",
          fontStyle: "italic",
          maxWidth: "550px",
          margin: "0 auto",
        }}>
          Boostez votre visibilité en vous associant à une marque africaine élégante et authentique
        </p>
      </div>

      {/* POURQUOI NOUS */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--cream)" }}>
        <div className="container">
          <h2 className="section-title">Pourquoi Ankara By K ?</h2>
          <p className="section-subtitle">Une communauté engagée et passionnée de mode africaine</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}>
            {[
              { chiffre: "5K+", label: "Abonnés actifs", icon: "👥" },
              { chiffre: "80%", label: "Audience féminine", icon: "👩" },
              { chiffre: "3", label: "Réseaux sociaux", icon: "📱" },
              { chiffre: "100%", label: "Audience africaine", icon: "🌍" },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: "var(--white)",
                borderRadius: "4px",
                padding: "2rem 1.5rem",
                textAlign: "center",
                border: "1px solid rgba(182,125,82,0.15)",
                transition: "var(--transition)",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-hover)";
                  e.currentTarget.style.borderColor = "var(--gold)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(182,125,82,0.15)";
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{stat.icon}</div>
                <div style={{
                  fontFamily: "var(--font-title)",
                  fontSize: "2.5rem",
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}>{stat.chiffre}</div>
                <div style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* AVANTAGES */}
          <div style={{
            background: "var(--dark)",
            borderRadius: "4px",
            padding: "3rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
          }}>
            <div>
              <h3 style={{
                fontFamily: "var(--font-title)",
                fontSize: "2rem",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}>Nos Atouts</h3>
              <p style={{
                fontFamily: "var(--font-elegant)",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.7)",
                fontStyle: "italic",
                lineHeight: 1.8,
              }}>
                Une audience qualifiée, passionnée par la mode africaine et le style élégant.
              </p>
            </div>
            {[
              { icon: "✦", texte: "Audience ciblée mode & lifestyle africain" },
              { icon: "✦", texte: "Présence sur Instagram, TikTok et Facebook" },
              { icon: "✦", texte: "Contenu visuel de haute qualité" },
              { icon: "✦", texte: "Communauté engagée et fidèle" },
              { icon: "✦", texte: "Tarifs accessibles et flexibles" },
              { icon: "✦", texte: "Rapport de performance fourni" },
            ].map((item) => (
              <div key={item.texte} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
              }}>
                <span style={{
                  color: "var(--gold)",
                  fontSize: "0.7rem",
                  marginTop: "4px",
                  flexShrink: 0,
                }}>{item.icon}</span>
                <p style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.6,
                }}>{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULES */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--white)" }}>
        <div className="container">
          <h2 className="section-title">Nos Formules</h2>
          <p className="section-subtitle">Choisissez la formule adaptée à vos besoins</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}>
            {[
              {
                nom: "Starter",
                prix: "Sur devis",
                description: "Idéal pour débuter et tester notre audience",
                features: [
                  "1 publication Instagram",
                  "1 story 24h",
                  "Mention dans la newsletter",
                  "Tag sur la photo",
                ],
                popular: false,
                emoji: "🌱",
              },
              {
                nom: "Premium",
                prix: "Sur devis",
                description: "La formule la plus populaire pour une visibilité maximale",
                features: [
                  "3 publications Instagram",
                  "5 stories sur 1 semaine",
                  "1 vidéo TikTok dédiée",
                  "Publication Facebook",
                  "Lien en bio pendant 7 jours",
                  "Rapport de performance",
                ],
                popular: true,
                emoji: "⭐",
              },
              {
                nom: "Partenariat",
                prix: "Sur devis",
                description: "Pour une collaboration long terme et une visibilité durable",
                features: [
                  "Publications illimitées / mois",
                  "Stories quotidiennes",
                  "Vidéos TikTok & Reels",
                  "Lien permanent en bio",
                  "Co-création de contenu",
                  "Rapport mensuel détaillé",
                  "Accès prioritaire",
                ],
                popular: false,
                emoji: "💎",
              },
            ].map((formule) => (
              <div key={formule.nom} style={{
                background: formule.popular ? "var(--dark)" : "var(--white)",
                borderRadius: "4px",
                padding: "2.5rem 2rem",
                border: formule.popular
                  ? "2px solid var(--gold)"
                  : "1px solid rgba(182,125,82,0.2)",
                position: "relative",
                transition: "var(--transition)",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-hover)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {formule.popular && (
                  <div style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--gold)",
                    color: "var(--white)",
                    fontSize: "0.68rem",
                    padding: "4px 16px",
                    borderRadius: "20px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-body)",
                  }}>⭐ Le plus populaire</div>
                )}

                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{formule.emoji}</div>

                <h3 style={{
                  fontFamily: "var(--font-elegant)",
                  fontSize: "1.4rem",
                  fontWeight: "500",
                  color: formule.popular ? "var(--gold)" : "var(--dark)",
                  marginBottom: "0.5rem",
                }}>{formule.nom}</h3>

                <p style={{
                  fontFamily: "var(--font-title)",
                  fontSize: "1.8rem",
                  color: formule.popular ? "var(--white)" : "var(--gold)",
                  marginBottom: "0.75rem",
                  lineHeight: 1,
                }}>{formule.prix}</p>

                <p style={{
                  fontSize: "0.82rem",
                  color: formule.popular ? "rgba(255,255,255,0.6)" : "var(--text-muted)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}>{formule.description}</p>

                <ul style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  marginBottom: "2rem",
                }}>
                  {formule.features.map((f) => (
                    <li key={f} style={{
                      fontSize: "0.82rem",
                      color: formule.popular ? "rgba(255,255,255,0.75)" : "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}>
                      <span style={{ color: "var(--gold)", fontSize: "0.65rem" }}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleWhatsapp(formule.nom)}
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    background: formule.popular ? "var(--gold)" : "transparent",
                    color: formule.popular ? "var(--white)" : "var(--gold)",
                    border: formule.popular ? "none" : "1.5px solid var(--gold)",
                    borderRadius: "2px",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "var(--transition)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--gold-dark)";
                    e.currentTarget.style.color = "var(--white)";
                    e.currentTarget.style.border = "none";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = formule.popular ? "var(--gold)" : "transparent";
                    e.currentTarget.style.color = formule.popular ? "var(--white)" : "var(--gold)";
                    e.currentTarget.style.border = formule.popular ? "none" : "1.5px solid var(--gold)";
                  }}
                >
                  💬 Nous contacter
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        padding: "5rem 1.5rem",
        background: "var(--cream)",
        textAlign: "center",
      }}>
        <div className="container" style={{ maxWidth: "550px" }}>
          <h2 style={{
            fontFamily: "var(--font-title)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "var(--gold)",
            marginBottom: "1rem",
          }}>Une Question ?</h2>
          <p style={{
            fontFamily: "var(--font-elegant)",
            fontSize: "1rem",
            color: "var(--text-muted)",
            fontStyle: "italic",
            lineHeight: 1.8,
            marginBottom: "2rem",
          }}>
            Contactez-nous directement pour discuter d'un partenariat
            personnalisé adapté à votre budget et vos objectifs.
          </p>
          <a
            href="https://wa.me/229648301195"
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            💬 Discutons sur WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}