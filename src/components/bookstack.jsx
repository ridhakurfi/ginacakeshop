import { useState } from "react";
import "./bookstack.css";

export default function Cakes() {
  const [selectedCake, setSelectedCake] = useState(null);

  const cakes = [
    {
      name: "Strawberry Cheesecake",
      price: "Rp 200.000",
      image:
        "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345296/Kue%20Gina/Strawberry_Cheesecake_xtdswh.jpg",
    },
    {
      name: "Blueberry Cheesecake",
      price: "Rp 180.000",
      image:
        "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345294/Kue%20Gina/Blueberry_Cheesecake_bitzjw.jpg",
    },
    {
      name: "Triple Chocolate Cake",
      price: "Rp 225.000",
      image:
        "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345297/Kue%20Gina/Triple_Chocolate_Cake_xwtwyd.jpg",
    },
    {
      name: "Mix Fruit Cake",
      price: "Rp 325.000",
      image:
        "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345294/Kue%20Gina/Mix_Fruit_Cake_k3faiq.jpg",
    },
    {
      name: "Mango Cake",
      price: "Rp 280.000",
      image:
        "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345294/Kue%20Gina/Mango_Cake_f4oo3f.jpg",
    },
    {
      name: "Mocca Nougat Cake",
      price: "Rp 275.000",
      image:
        "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345295/Kue%20Gina/Mocca_Nougat_Cake_u5cbg6.jpg",
    },
    {
      name: "Oreo Strawberry Cheesecake",
      price: "Rp 255.000",
      image:
        "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345296/Kue%20Gina/Oreo_Strawberry_Cheesecake_it5pwx.jpg",
    },
  ];

  return (
    <>
      <section className="cake-stack">

        <h2>Our Signature Cakes</h2>

        <div className="stack">

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
          className="modal-backdrop"
          onClick={() => setSelectedCake(null)}
        >

          <div
            className="cake-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setSelectedCake(null)}
            >
              ×
            </button>

            <img
              src={selectedCake.image}
              alt={selectedCake.name}
            />

            <div className="modal-info">
              <h3>{selectedCake.name}</h3>
              <p>{selectedCake.price}</p>

              <button>
                Order Now
              </button>
            </div>

          </div>

        </div>

      )}
    </>
  );
}