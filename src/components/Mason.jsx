import "./mason.css";

function Mason({ cakes }) {
  return (
    <section className="masonry-grid">
      {cakes.map((cake) => (
        <article
          className="masonry-card"
          key={cake.name}
        >
          <img
            className="masonry-image"
            src={cake.image}
            alt={cake.name}
            loading="lazy"
          />

          <div className="masonry-info">
            <h3 className="masonry-title">
              {cake.name}
            </h3>

            <p className="masonry-price">
              {cake.price}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Mason;
