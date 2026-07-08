import { useState } from "react";
import "./carousel.css";

export default function Carousel({ cakes }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cakes.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cakes.length) % cakes.length);
  };

  return (
    <section className="carousel-hero">
      <img
        src={cakes[current].image}
        alt={cakes[current].name}
        className="carousel-image"
      />

      <div className="carousel-overlay">
        <h1 className="carousel-title">
          {cakes[current].name}
        </h1>

        <p className="carousel-price">
          {cakes[current].price}
        </p>

        <a
          href="https://wa.me/6281371905444"
          className="carousel-order-button"
        >
          Pesan Sekarang
        </a>
      </div>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-left"
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-right"
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className="carousel-dots">
        {cakes.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${
              current === index ? "carousel-dot-active" : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}