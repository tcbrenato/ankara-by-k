import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div style={{ background: "var(--white)" }}>

      {/* HERO */}
      <div style={{
        background: `linear-gradient(135deg, rgba(30,35,42,0.9) 0%, rgba(182,125,82,0.5) 100%),
          url('/images/about2.jpg') center/cover`,
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
        }}>Ce que nous offrons</p>
        <h1 style={{
          fontFamily: "var(--font-title)",
          fontSize: "clamp(3rem, 8vw, 5rem)",
          color: "var(--white)",
          lineHeight: 1,
          marginBottom: "1rem",
        }}>Nos Services</h1>
        <p style={{
          fontFamily: "var(--font-elegant)",
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.8)",
          fontStyle: "italic",
          maxWidth: "500px",
          margin: "0 auto",
        }}>
          Des créations déjà confectionnées sur mesure, prêtes à sublimer votre silhouette
        </p>
      </div>

      {/* IMPORTANT NOTICE */}
      <div style={{
        background: "var(--gold)",
        padding: "1.25rem 1.5rem",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-elegant)",
          fontSize: "1rem",
          color: "var(--white)",
          fontStyle: "italic",
        }}>
          ✦ Nous ne cousons pas sur place — toutes nos tenues sont déjà confectionnées avec soin et disponibles immédiatement ✦
        </p>
      </div>

      {/* SERVICES PRINCIPAUX */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--cream)" }}>
        <div className="container">
          <h2 className="section-title">Nos Prestations</h2>
          <p className="section-subtitle">Tout ce que nous faisons pour vous</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}>
            {[
              {
                icon: "👗",
                titre: "Vente de Tenues Prêtes",
                desc: "Toutes nos tenues sont déjà confectionnées sur mesure en tissus wax, batik et adirè. Il vous suffit de choisir votre taille parmi S, M, L et XL.",
                details: ["Disponibles immédiatement", "Plusieurs tailles disponibles", "Tissus authentiques", "Finitions soignées"],
              },
              {
                icon: "📦",
                titre: "Livraison & Expédition",
                desc: "Nous livrons vos commandes partout au Bénin et en Afrique de l'Ouest. Les détails de livraison sont confirmés via WhatsApp après commande.",
                details: ["Livraison au Bénin", "Expédition internationale", "Suivi de commande", "Emballage soigné"],
              },
              {
                icon: "💬",
                titre: "Conseil Personnalisé",
                desc: "Notre équipe est disponible via WhatsApp pour vous aider à choisir la tenue qui correspond à votre style, votre morphologie et votre occasion.",
                details: ["Disponible 7j/7", "Réponse rapide", "Conseils morphologie", "Aide au choix"],
              },
              {
                icon: "📸",
                titre: "Shooting & Présentation",
                desc: "Chaque tenue est photographiée sous plusieurs angles pour vous permettre de visualiser parfaitement votre futur achat avant de commander.",
                details: ["3 photos minimum par article", "Plusieurs angles", "Vues détaillées", "Couleurs fidèles"],
              },
              {
                icon: "🎁",
                titre: "Commandes Spéciales",
                desc: "Pour les mariages, événements et occasions spéciales, contactez-nous pour des commandes groupées ou des tenues de cérémonie disponibles en stock.",
                details: ["Commandes groupées", "Tenues de cérémonie", "Événements spéciaux", "Tarifs préférentiels"],
              },
              {
                icon: "🌍",
                titre: "Vente en Ligne",
                desc: "Commandez facilement depuis notre boutique en ligne, sélectionnez vos tenues et finalisez votre commande directement via WhatsApp en toute simplicité.",
                details: ["Boutique en ligne", "Paiement flexible", "Commande via WhatsApp", "Suivi personnalisé"],
              },
            ].map((service) => (
              <div key={service.titre} style={{
                background: "var(--white)",
                borderRadius: "4px",
                padding: "2rem",
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
                <div style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                }}>{service.icon}</div>

                <h3 style={{
                  fontFamily: "var(--font-elegant)",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  color: "var(--dark)",
                  marginBottom: "0.75rem",
                }}>{service.titre}</h3>

                <p style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}>{service.desc}</p>

                <ul style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}>
                  {service.details.map((d) => (
                    <li key={d} style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}>
                      <span style={{
                        color: "var(--gold)",
                        fontSize: "0.6rem",
                      }}>◆</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT CA MARCHE */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--white)" }}>
        <div className="container">
          <h2 className="section-title">Comment Commander</h2>
          <p className="section-subtitle">Simple, rapide et sécurisé</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            position: "relative",
          }}>
            {[
              { step: "01", titre: "Choisissez", desc: "Parcourez notre boutique et sélectionnez votre tenue favorite." },
              { step: "02", titre: "Sélectionnez", desc: "Choisissez votre taille parmi les options disponibles." },
              { step: "03", titre: "Contactez", desc: "Cliquez sur WhatsApp pour envoyer votre commande directement." },
              { step: "04", titre: "Recevez", desc: "Confirmez les détails de livraison et recevez votre tenue." },
            ].map((etape, i) => (
              <div key={etape.step} style={{
                textAlign: "center",
                padding: "2rem 1rem",
                position: "relative",
              }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "var(--gold)",
                  color: "var(--white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontFamily: "var(--font-elegant)",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                }}>{etape.step}</div>

                <h3 style={{
                  fontFamily: "var(--font-elegant)",
                  fontSize: "1.15rem",
                  fontWeight: "500",
                  color: "var(--dark)",
                  marginBottom: "0.75rem",
                }}>{etape.titre}</h3>

                <p style={{
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                }}>{etape.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "5rem 1.5rem",
        background: "var(--dark)",
        textAlign: "center",
      }}>
        <div className="container" style={{ maxWidth: "550px" }}>
          <h2 style={{
            fontFamily: "var(--font-title)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "var(--gold)",
            marginBottom: "1rem",
          }}>Prête à Commander ?</h2>
          <p style={{
            fontFamily: "var(--font-elegant)",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.7)",
            fontStyle: "italic",
            lineHeight: 1.8,
            marginBottom: "2rem",
          }}>
            Découvrez toutes nos tenues disponibles et passez votre commande facilement via WhatsApp.
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
                transition: "var(--transition)",
              }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}