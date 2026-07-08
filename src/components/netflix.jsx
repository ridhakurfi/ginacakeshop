import { useState } from "react";
import "./netflix.css";

export default function CakeShowcase({ cakes }) {
    const [selectedCake, setSelectedCake] = useState(0);
    const featured = cakes[selectedCake];
    return (
        <section className="cake-showcase">

            <div className="browse-header">
                <h3>Browse Cakes</h3>
            </div>

            <div className="cake-row">
                {cakes.map((cake, index) => (
                    <div
                        key={index}
                        className={
                            index === selectedCake
                                ? "cake-card active"
                                : "cake-card"
                        }
                        onClick={() => setSelectedCake(index)}
                    >
                        <img
                            src={cake.image}
                            alt={cake.name}
                        />

                        <div className="card-overlay">
                            <span>{cake.name}</span>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}