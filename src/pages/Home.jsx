import { useState } from "react";
import "../styles/home.css";
import CakeShowcase from "../components/netflix";
import Cakes from "../components/bookstack";
import Mason from "../components/Mason";
import Cover from "../components/Cover";
import Carousel from "../components/Carousel";

function Home() {
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

    return (
        <div className="home">
            <section className="banner">MADAM GINA'S CAKE SHOP</section>
            <Carousel cakes={cakes}></Carousel>
            <CakeShowcase cakes={cakes}></CakeShowcase>
            <Cakes cakes={cakes}></Cakes>
            <Mason cakes={cakes}></Mason>
            <Cover cakes={cakes}></Cover>
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