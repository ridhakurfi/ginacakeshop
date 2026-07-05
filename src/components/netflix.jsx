import { useState } from "react";
import "./netflix.css";

export default function CakeShowcase() {
    const cakes = [
        {
            name: "Strawberry Cheesecake",
            price: "Rp 200,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345296/Kue%20Gina/Strawberry_Cheesecake_xtdswh.jpg",
        },
        {
            name: "Blueberry Cheesecake",
            price: "Rp 180,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345294/Kue%20Gina/Blueberry_Cheesecake_bitzjw.jpg",
        },
        {
            name: "Triple Chocolate Cake",
            price:
                "Rp 225,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345297/Kue%20Gina/Triple_Chocolate_Cake_xwtwyd.jpg",
        },
        {
            name: "Mix Fruit Cake",
            price:
                "Rp 325,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345294/Kue%20Gina/Mix_Fruit_Cake_k3faiq.jpg",
        },
        {
            name: "Mango Cake",
            price:
                "Rp 280,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345294/Kue%20Gina/Mango_Cake_f4oo3f.jpg",
        },
        {
            name: "Mocca Nougat Cake",
            price:
                "Rp 275,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345295/Kue%20Gina/Mocca_Nougat_Cake_u5cbg6.jpg",
        },
        {
            name: "Oreo Strawberry Cheesecake",
            price:
                "Rp 255,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345296/Kue%20Gina/Oreo_Strawberry_Cheesecake_it5pwx.jpg",
        },
    ];
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