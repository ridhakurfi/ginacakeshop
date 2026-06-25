import { useState } from "react";
import "../styles/home.css";

function Home() {
    const cakes = [
        
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % cakes.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + cakes.length) % cakes.length);
    };

    return (
        <div className="home">
            <section className="banner">MADAM GINA'S CAKE SHOP</section>
            <section className="hero">
                <img
                    src={cakes[current].image}
                    alt={cakes[current].name}
                    className="hero-image"
                />

                <div className="hero-overlay">
                    <h1>{cakes[current].name}</h1>
                    <p>{cakes[current].price}</p>

                    <a
                        href="https://wa.me/6281371905444"
                        className="order-btn"
                    >
                        Pesan Sekarang
                    </a>
                </div>

                <button className="arrow left" onClick={prevSlide}>
                    ❮
                </button>

                <button className="arrow right" onClick={nextSlide}>
                    ❯
                </button>

                <div className="dots">
                    {cakes.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${current === index ? "active" : ""
                                }`}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}
                </div>
            </section>

            {/* TRUST */}
            <section className="stats">
                <div>🎂 500+ Terjual</div>
                <div>🚚 Pengiriman Lokal</div>
                <div>⭐ Favorit</div>
            </section>

            {/* MENU */}
            <section className="menu">
                <h2>Menu</h2>

                <h3>Kue Tradisional</h3>

                <div className="menu-item">
                    <span className="menu-name">Klepon</span>
                    <span className="menu-line"></span>
                    <span className="menu-price">Rp 25,000 / Bungkus</span>
                </div>

                <div className="menu-item">
                    <span className="menu-name">Lemper Ayam</span>
                    <span className="menu-line"></span>
                    <span className="menu-price">Rp 30,000 / Bungkus</span>
                </div>

                <h3>Kue Kering</h3>

                <div className="menu-item">
                    <span className="menu-name">Nastar</span>
                    <span className="menu-line"></span>
                    <span className="menu-price">Rp 85,000 / Kotak</span>
                </div>

                <div className="menu-item">
                    <span className="menu-name">Kastengel</span>
                    <span className="menu-line"></span>
                    <span className="menu-price">Rp 95,000 / Kotak</span>
                </div>

                <div className="menu-item">
                    <span className="menu-name">Putri Salju</span>
                    <span className="menu-line"></span>
                    <span className="menu-price">Rp 80,000 / Kotak</span>
                </div>
            </section>

            {/* ABOUT */}
            <section className="about">
                <h2>Tentang Kami</h2>

                <p>
                    Kami membuat berbagai macam kue dan makanan tradisional, menggunakan bahan berkualitas dan persiapan lengkap.
                </p>
            </section>

            {/* LOCATION */}
            <section className="location">
                <h2>Lokasi</h2>

                <iframe
                    title="Minangkabau International Airport"
                    src="https://www.google.com/maps?q=PDG+Airport&output=embed"
                    loading="lazy"
                ></iframe>
            </section>

            {/* CONTACT */}
            <section className="contact">
                <h2>Mau memesan segera?</h2>

                <a
                    href="https://wa.me/6281371905444"
                    className="contact-btn"
                >
                    Hubungi Kami
                </a>
            </section>
        </div>
    );
}

export default Home;