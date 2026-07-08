import { useState } from "react";
import "./netflix.css";

export default function CakeShowcase({ cakes }) {
  const [selectedCake, setSelectedCake] = useState(0);

  return (
    <section className="cake-showcase">
      <div className="cake-showcase-header">
        <h3 className="cake-showcase-title">
          Browse Cakes
        </h3>
      </div>

      <div className="cake-showcase-row">
        {cakes.map((cake, index) => (
          <div
            key={index}
            className={`cake-showcase-card ${
              index === selectedCake
                ? "cake-showcase-card-active"
                : ""
            }`}
            onClick={() => setSelectedCake(index)}
          >
            <img
              className="cake-showcase-image"
              src={cake.image}
              alt={cake.name}
            />

            <div className="cake-showcase-overlay">
              <span className="cake-showcase-name">
                {cake.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
