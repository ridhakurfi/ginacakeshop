import "../styles/home.css";
import Carousel from "../components/Carousel";
import CakeShowcase from "../components/netflix";
import Cakes from "../components/bookstack";
import Mason from "../components/Mason";
import Cover from "../components/Cover";

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
            price: "Rp 225,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345297/Kue%20Gina/Triple_Chocolate_Cake_xwtwyd.jpg",
        },
        {
            name: "Mix Fruit Cake",
            price: "Rp 325,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345294/Kue%20Gina/Mix_Fruit_Cake_k3faiq.jpg",
        },
        {
            name: "Mango Cake",
            price: "Rp 280,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345294/Kue%20Gina/Mango_Cake_f4oo3f.jpg",
        },
        {
            name: "Mocca Nougat Cake",
            price: "Rp 275,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345295/Kue%20Gina/Mocca_Nougat_Cake_u5cbg6.jpg",
        },
        {
            name: "Oreo Strawberry Cheesecake",
            price: "Rp 255,000",
            image:
                "https://res.cloudinary.com/ducjx48tv/image/upload/v1782345296/Kue%20Gina/Oreo_Strawberry_Cheesecake_it5pwx.jpg",
        },
    ];

    return (
        <main className="home-page">

            <header className="home-banner">
                MADAM GINA'S CAKE SHOP
            </header>

            <Carousel cakes={cakes} />

            <CakeShowcase cakes={cakes} />

            <Cakes cakes={cakes} />

            <Mason cakes={cakes} />

            <Cover cakes={cakes} />

            {/* TRUST */}

            <section className="home-stats">

                <div className="home-stat-item">
                    🎂 500+ Terjual
                </div>

                <div className="home-stat-item">
                    🚚 Pengiriman Lokal
                </div>

                <div className="home-stat-item">
                    ⭐ Favorit
                </div>

            </section>

            {/* MENU */}

            <section className="home-menu">

                <h2 className="home-menu-title">
                    Menu
                </h2>

                <h3 className="home-menu-category">
                    Kue Tradisional
                </h3>

                <div className="home-menu-item">
                    <span className="home-menu-name">
                        Klepon
                    </span>

                    <span className="home-menu-line"></span>

                    <span className="home-menu-price">
                        Rp 25,000 / Bungkus
                    </span>
                </div>

                <div className="home-menu-item">
                    <span className="home-menu-name">
                        Lemper Ayam
                    </span>

                    <span className="home-menu-line"></span>

                    <span className="home-menu-price">
                        Rp 30,000 / Bungkus
                    </span>
                </div>

                <h3 className="home-menu-category">
                    Kue Kering
                </h3>

                <div className="home-menu-item">
                    <span className="home-menu-name">
                        Nastar
                    </span>

                    <span className="home-menu-line"></span>

                    <span className="home-menu-price">
                        Rp 85,000 / Kotak
                    </span>
                </div>

                <div className="home-menu-item">
                    <span className="home-menu-name">
                        Kastengel
                    </span>

                    <span className="home-menu-line"></span>

                    <span className="home-menu-price">
                        Rp 95,000 / Kotak
                    </span>
                </div>

                <div className="home-menu-item">
                    <span className="home-menu-name">
                        Putri Salju
                    </span>

                    <span className="home-menu-line"></span>

                    <span className="home-menu-price">
                        Rp 80,000 / Kotak
                    </span>
                </div>

            </section>

            {/* ABOUT */}

            <section className="home-about">

                <h2 className="home-about-title">
                    Tentang Kami
                </h2>

                <p className="home-about-text">
                    Kami membuat berbagai macam kue dan makanan tradisional,
                    menggunakan bahan berkualitas dan persiapan lengkap.
                </p>

            </section>

            {/* LOCATION */}

            <section className="home-location">

                <h2 className="home-location-title">
                    Lokasi
                </h2>

                <iframe
                    className="home-location-map"
                    title="Minangkabau International Airport"
                    src="https://www.google.com/maps?q=PDG+Airport&output=embed"
                    loading="lazy"
                ></iframe>

            </section>

            {/* CONTACT */}

            <section className="home-contact">

                <h2 className="home-contact-title">
                    Mau memesan segera?
                </h2>

                <a
                    href="https://wa.me/6281371905444"
                    className="home-contact-button"
                >
                    Hubungi Kami
                </a>

            </section>

        </main>
    );
}

export default Home;