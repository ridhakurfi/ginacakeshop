import "./mason.css";

function Mason({ cakes }) {
    return (
        <section className="masonry">
            {cakes.map((cake) => (
                <article className="masonry-card" key={cake.name}>
                    <img
                        src={cake.image}
                        alt={cake.name}
                        loading="lazy"
                    />

                    <div className="masonry-info">
                        <h3>{cake.name}</h3>
                        <p>{cake.price}</p>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default Mason;