export default function CartModal({
  isOpen, onClose, cart, onRemove, onUpdateQuantite, total
}) {
  if (!isOpen) return null;

  const whatsappTotal = () => {
    const items = cart.map(
      (i) => `• ${i.nom} (Taille: ${i.taille}) x${i.quantite} = ${(i.prix * i.quantite).toLocaleString()} FCFA`
    ).join("\n");
    const message = `Bonjour Ankara By K ! 👋\n\nJe souhaite commander :\n\n${items}\n\n💰 Total : ${total.toLocaleString()} FCFA\n\nMerci !`;
    window.open(`https://wa.me/22901648301195?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* OVERLAY */}
      <div onClick={onClose} style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 3000,
      }} />

      {/* PANNEAU PANIER */}
      <div style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "min(420px, 100vw)",
        height: "100vh",
        background: "var(--white)",
        zIndex: 3001,
        display: "flex",
        flexDirection: "column",
        boxShadow: "-4px 0 30px rgba(0,0,0,0.15)",
      }}>

        {/* HEADER PANIER */}
        <div style={{
          padding: "1.5rem",
          borderBottom: "1px solid rgba(182,125,82,0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "var(--cream)",
        }}>
          <div>
            <h2 style={{
              fontFamily: "var(--font-title)",
              fontSize: "1.8rem",
              color: "var(--gold)",
              lineHeight: 1,
            }}>Mon Panier</h2>
            <p style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              marginTop: "2px",
            }}>
              {cart.length === 0 ? "Vide" : `${cart.reduce((a, i) => a + i.quantite, 0)} article(s)`}
            </p>
          </div>
          <button onClick={onClose} style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid rgba(182,125,82,0.3)",
            color: "var(--text-muted)",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "var(--transition)",
          }}>✕</button>
        </div>

        {/* LISTE ARTICLES */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1.5rem" }}>
          {cart.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "4rem 1rem",
              color: "var(--text-muted)",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🛍️</div>
              <p style={{
                fontFamily: "var(--font-elegant)",
                fontSize: "1.1rem",
                fontStyle: "italic",
              }}>Votre panier est vide</p>
              <p style={{ fontSize: "0.82rem", marginTop: "0.5rem" }}>
                Découvrez nos créations en boutique
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {cart.map((item) => (
                <div key={`${item.id}-${item.taille}`} style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1rem",
                  border: "1px solid rgba(182,125,82,0.15)",
                  borderRadius: "4px",
                  background: "var(--cream)",
                }}>
                  {/* IMAGE */}
                  <img
                    src={item.images[0]}
                    alt={item.nom}
                    style={{
                      width: "75px",
                      height: "90px",
                      objectFit: "cover",
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  />

                  {/* INFOS */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontFamily: "var(--font-elegant)",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      marginBottom: "0.25rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>{item.nom}</p>

                    <p style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.5rem",
                    }}>Taille : <strong>{item.taille}</strong></p>

                    <p style={{
                      fontSize: "0.9rem",
                      color: "var(--gold)",
                      fontWeight: "600",
                      marginBottom: "0.75rem",
                    }}>
                      {(item.prix * item.quantite).toLocaleString()} FCFA
                    </p>

                    {/* QUANTITE */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}>
                      <button
                        onClick={() => onUpdateQuantite(item.id, item.taille, item.quantite - 1)}
                        style={{
                          width: "26px",
                          height: "26px",
                          border: "1px solid rgba(182,125,82,0.4)",
                          borderRadius: "2px",
                          color: "var(--gold)",
                          fontSize: "1rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>−</button>

                      <span style={{
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        minWidth: "20px",
                        textAlign: "center",
                      }}>{item.quantite}</span>

                      <button
                        onClick={() => onUpdateQuantite(item.id, item.taille, item.quantite + 1)}
                        style={{
                          width: "26px",
                          height: "26px",
                          border: "1px solid rgba(182,125,82,0.4)",
                          borderRadius: "2px",
                          color: "var(--gold)",
                          fontSize: "1rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>+</button>

                      <button
                        onClick={() => onRemove(item.id, item.taille)}
                        style={{
                          marginLeft: "auto",
                          fontSize: "0.75rem",
                          color: "#c0392b",
                          padding: "4px 8px",
                          border: "1px solid rgba(192,57,43,0.3)",
                          borderRadius: "2px",
                        }}>Retirer</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER PANIER */}
        {cart.length > 0 && (
          <div style={{
            padding: "1.5rem",
            borderTop: "1px solid rgba(182,125,82,0.2)",
            background: "var(--cream)",
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.25rem",
            }}>
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
              }}>Total</span>
              <span style={{
                fontFamily: "var(--font-elegant)",
                fontSize: "1.5rem",
                color: "var(--gold)",
                fontWeight: "500",
              }}>
                {total.toLocaleString()} FCFA
              </span>
            </div>

            <button onClick={whatsappTotal} style={{
              width: "100%",
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
            }}>
              💬 Commander via WhatsApp
            </button>

            <p style={{
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              textAlign: "center",
              marginTop: "0.75rem",
              fontStyle: "italic",
            }}>
              Livraison & détails confirmés via WhatsApp
            </p>
          </div>
        )}
      </div>
    </>
  );
}