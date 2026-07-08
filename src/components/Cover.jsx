import { useState } from "react";
import "./cover.css";

function Cover({ cakes }) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + cakes.length) % cakes.length);

  const next = () =>
    setCurrent((current + 1) % cakes.length);

  const left = (current - 1 + cakes.length) % cakes.length;
  const right = (current + 1) % cakes.length;

  return (
    <section className="cover-section">
      <h2 className="cover-title">
        Our Signature Cakes
      </h2>

      <div className="cover-wrapper">
        <button
          type="button"
          className="cover-arrow"
          onClick={prev}
        >
          ❮
        </button>

        <div className="cover-stage">
          <div
            className="cover-card cover-card-left"
            onClick={prev}
            style={{
              backgroundImage: `url(${cakes[left].image})`,
            }}
          >
            <span className="cover-card-label">
              {cakes[left].name}
            </span>
          </div>

          <div
            className="cover-card cover-card-center"
            style={{
              backgroundImage: `url(${cakes[current].image})`,
            }}
          >
            <div className="cover-info">
              <h3 className="cover-info-title">
                {cakes[current].name}
              </h3>

              <p className="cover-info-price">
                {cakes[current].price}
              </p>
            </div>
          </div>

          <div
            className="cover-card cover-card-right"
            onClick={next}
            style={{
              backgroundImage: `url(${cakes[right].image})`,
            }}
          >
            <span className="cover-card-label">
              {cakes[right].name}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="cover-arrow"
          onClick={next}
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default Cover;
