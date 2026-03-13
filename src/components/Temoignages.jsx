export default function Temoignages() {
  const avis = [
    {
      nom: "Aminata K.",
      ville: "Cotonou",
      note: 5,
      texte: "J'ai commandé un ensemble batik sur mesure et je suis vraiment ravie ! La qualité est impeccable et la livraison rapide. Je recommande vivement Ankara By K !",
      initiale: "A",
    },
    {
      nom: "Fatoumata D.",
      ville: "Abomey-Calavi",
      note: 5,
      texte: "Des créations uniques et élégantes. Le tissu adirè que j'ai choisi est magnifique. La patronne est très à l'écoute et professionnelle. Merci !",
      initiale: "F",
    },
    {
      nom: "Chioma O.",
      ville: "Lagos",
      note: 5,
      texte: "I discovered Ankara By K on Instagram and I'm obsessed! The wax fabric quality is exceptional. Already ordered twice and will order again!",
      initiale: "C",
    },
    {
      nom: "Mariam T.",
      ville: "Lomé",
      note: 5,
      texte: "Une boutique sérieuse avec des modèles vraiment tendance. Mon ensemble premium batik a fait sensation à la soirée. Tout le monde voulait savoir où je l'avais acheté !",
      initiale: "M",
    },
    {
      nom: "Bénédicte A.",
      ville: "Porto-Novo",
      note: 5,
      texte: "Service client exceptionnel ! J'ai eu un souci avec ma taille et tout a été arrangé rapidement. La robe longue adirè est sublime, je suis très satisfaite.",
      initiale: "B",
    },
    {
      nom: "Khadija S.",
      ville: "Parakou",
      note: 5,
      texte: "Ankara By K c'est la référence mode africaine au Bénin ! Chaque pièce est une œuvre d'art. J'attends toujours les nouvelles collections avec impatience.",
      initiale: "K",
    },
  ];

  const etoiles = (n) => "★".repeat(n) + "☆".repeat(5 - n);

  return (
    <section style={{ padding: "5rem 1.5rem", background: "var(--cream)" }}>
      <style>{`
        .temoignages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .temoignage-card {
          background: var(--white);
          border: 1px solid rgba(182,125,82,0.15);
          border-radius: 4px;
          padding: 1.75rem;
          transition: all 0.3s ease;
          position: relative;
        }
        .temoignage-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(30,35,42,0.1);
          border-color: rgba(182,125,82,0.4);
        }
        .temoignage-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #B67D52, #D4A574);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: var(--font-elegant);
          font-size: 1.3rem;
          font-weight: 600;
          flex-shrink: 0;
        }
        .guillemet {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          font-size: 3rem;
          color: rgba(182,125,82,0.15);
          font-family: Georgia, serif;
          line-height: 1;
        }
        @media (max-width: 900px) {
          .temoignages-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .temoignages-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">

        {/* TITRE */}
        <div style={{ textAlign: "center" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "0.75rem",
          }}>Ce qu'elles disent</p>
          <h2 style={{
            fontFamily: "var(--font-title)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "var(--dark)",
            marginBottom: "0.75rem",
            lineHeight: 1.1,
          }}>Avis de nos clientes</h2>
          <p style={{
            fontFamily: "var(--font-elegant)",
            fontSize: "1.05rem",
            color: "var(--text-muted)",
            fontStyle: "italic",
          }}>
            La satisfaction de nos clientes est notre plus belle récompense
          </p>

          {/* ETOILES GLOBALES */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            marginTop: "1.25rem",
          }}>
            <span style={{ color: "#F4C430", fontSize: "1.5rem", letterSpacing: "2px" }}>★★★★★</span>
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}>5.0 — 6 avis vérifiés</span>
          </div>
        </div>

        {/* GRILLE */}
        <div className="temoignages-grid">
          {avis.map((a, i) => (
            <div key={i} className="temoignage-card">

              <div className="guillemet">"</div>

              {/* ETOILES */}
              <div style={{
                color: "#F4C430",
                fontSize: "0.95rem",
                letterSpacing: "2px",
                marginBottom: "1rem",
              }}>
                {etoiles(a.note)}
              </div>

              {/* TEXTE */}
              <p style={{
                fontFamily: "var(--font-elegant)",
                fontSize: "0.95rem",
                fontStyle: "italic",
                color: "var(--dark)",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
              }}>
                "{a.texte}"
              </p>

              {/* AUTEUR */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div className="temoignage-avatar">{a.initiale}</div>
                <div>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    color: "var(--dark)",
                  }}>{a.nom}</p>
                  <p style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}>{a.ville}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          
            <a href="https://wa.me/22964830195?text=Bonjour%20Ankara%20By%20K%20!%20Je%20voudrais%20laisser%20un%20avis."
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "0.85rem 2rem",
              border: "1.5px solid var(--gold)",
              color: "var(--gold)",
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            Laisser un avis
          </a>
        </div>
        </div>
    </section>
  );
}
