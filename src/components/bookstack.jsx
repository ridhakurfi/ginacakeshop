import { useState } from "react";
import "./bookstack.css";

export default function Cakes({ cakes }) {
  const [selectedCake, setSelectedCake] = useState(null);

  return (
    <>
      <section className="cake-stack">
        <h2 className="cake-stack-title">
          Our Signature Cakes
        </h2>

        <div className="cake-stack-list">
          {cakes.map((cake, index) => (
            <div
              key={index}
              className="stack-card"
              style={{
                backgroundImage: `url(${cake.image})`,
              }}
              onClick={() => setSelectedCake(cake)}
            >
              <div className="stack-overlay">
                {cake.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedCake && (
        <div
          className="cake-modal-backdrop"
          onClick={() => setSelectedCake(null)}
        >
          <div
            className="cake-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cake-modal-close"
              onClick={() => setSelectedCake(null)}
            >
              ×
            </button>

            <img
              className="cake-modal-image"
              src={selectedCake.image}
              alt={selectedCake.name}
            />

            <div className="cake-modal-info">
              <h3 className="cake-modal-title">
                {selectedCake.name}
              </h3>

              <p className="cake-modal-price">
                {selectedCake.price}
              </p>

              <button
                type="button"
                className="cake-modal-button"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}