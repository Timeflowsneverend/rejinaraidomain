import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import img1 from "./assets/WhatsApp Image 2025-07-25 at 7.36.39 PM (1).jpeg";
import img2 from "./assets/WhatsApp Image 2025-07-25 at 7.36.39 PM.jpeg";
import img3 from "./assets/WhatsApp Image 2025-07-25 at 7.36.38 PM (2).jpeg";
import img4 from "./assets/WhatsApp Image 2025-07-25 at 7.36.38 PM (1).jpeg";
import img5 from "./assets/WhatsApp Image 2025-07-25 at 7.36.38 PM.jpeg";
import img6 from "./assets/WhatsApp Image 2025-07-25 at 7.36.37 PM.jpeg";
import img7 from "./assets/WhatsApp Image 2025-07-25 at 7.35.45 PM (3).jpeg";
import img8 from "./assets/WhatsApp Image 2025-07-25 at 7.35.45 PM (2).jpeg";
import img9 from "./assets/WhatsApp Image 2025-07-25 at 7.35.45 PM (1).jpeg";
import img10 from "./assets/WhatsApp Image 2025-07-25 at 7.35.45 PM.jpeg";
import img11 from "./assets/WhatsApp Image 2025-07-25 at 7.35.44 PM (2).jpeg";
import img12 from "./assets/WhatsApp Image 2025-07-25 at 7.35.44 PM (1).jpeg";
import img13 from "./assets/WhatsApp Image 2025-07-25 at 7.35.44 PM.jpeg";
import img14 from "./assets/WhatsApp Image 2025-07-25 at 7.35.43 PM (1).jpeg";
import img15 from "./assets/WhatsApp Image 2025-07-25 at 7.35.43 PM.jpeg";
import { useState } from "react";

function Divider() {
  return <div className="gradient-divider" aria-hidden="true"></div>;
}

function Hero() {
  return (
    <section className="text-center py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 fade-in">
      <div className="max-w-4xl mx-auto px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 sm:mb-6 hero-title">
          Handcrafted Bouquets
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed hero-subtitle px-2">
          Step into a world of gentle colors and soft textures. Each bouquet is
          crafted with care to bring a touch of warmth and whimsy to your day.
          Discover something special, made just for you, at Nana House. Let our
          bouquets brighten your space and lift your spirits.
        </p>
      </div>
    </section>
  );
}

function BouquetModal({ open, image, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-4 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-orange-500 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <img
          src={image}
          alt="Bouquet large preview"
          className="rounded-xl w-full h-72 object-contain mb-4 border border-orange-100 shadow"
        />
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2 gradient-text">
            Bouquet Details
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            A beautiful handcrafted bouquet, perfect for any occasion.
          </p>
          <button
            onClick={onClose}
            className="mt-2 px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition-colors font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Gallery({
  highlightOnly = false,
  modalOpen,
  setModalOpen,
  modalImage,
  setModalImage,
}) {
  // List of all images
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];
  // Shuffle and pick 4 random images for highlight
  const getRandomImages = (arr, n) => {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };
  const displayImages = highlightOnly ? getRandomImages(images, 3) : images;

  const handleImageClick = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <section
      id="gallery"
      className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-gradient-to-b from-white to-orange-50 fade-in"
    >
      <BouquetModal
        open={modalOpen}
        image={modalImage}
        onClose={handleModalClose}
      />
      <div className="max-w-6xl mx-auto px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center gradient-text mb-6 sm:mb-8 hero-title">
          {highlightOnly ? "Our Bouquets" : "All Bouquets"}
        </h2>
        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
          {displayImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(img)}
              tabIndex={0}
              role="button"
              aria-label="View bouquet details"
              onKeyPress={(e) => {
                if (e.key === "Enter") handleImageClick(img);
              }}
            >
              <img
                src={img}
                alt={`Colorful handcrafted bouquet ${idx + 1}`}
                className="image-hover rounded-xl object-cover w-full h-64 sm:h-56 md:h-64 lg:h-80 border-2 border-orange-100 shadow-lg"
              />
            </div>
          ))}
        </div>
        {highlightOnly && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <Link
              to="/gallery"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-base sm:text-lg pulse-button"
            >
              See More Bouquets
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 text-center fade-in"
    >
      <div className="max-w-4xl mx-auto px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-6 sm:mb-8 hero-title">
          Get In Touch
        </h2>
        <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl px-2">
          Follow us on social media for the latest updates and beautiful
          bouquets:
        </p>
        <div className="grid gap-4 sm:gap-6 md:gap-8 max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span
                role="img"
                aria-label="TikTok"
                className="text-2xl sm:text-3xl"
              >
                🎵
              </span>
              <div className="text-left">
                <p className="text-gray-600 text-xs sm:text-sm">Follow us on</p>
                <a
                  href="https://www.tiktok.com/@nana.house7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-bold text-base sm:text-lg transition-colors"
                >
                  TikTok: @nana.house7
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span
                role="img"
                aria-label="Instagram"
                className="text-2xl sm:text-3xl"
              >
                📸
              </span>
              <div className="text-left">
                <p className="text-gray-600 text-xs sm:text-sm">Follow us on</p>
                <a
                  href="https://www.instagram.com/nanahouse_0919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 font-bold text-base sm:text-lg transition-colors"
                >
                  Instagram: nanahouse_0919
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Gallery highlightOnly={true} />
      <Divider />
      <Contact />
    </>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 flex flex-col">
        {/* Header */}
        {!modalOpen && (
          <header className="bg-white/90 backdrop-blur-sm shadow-lg py-3 sm:py-4 px-4 flex flex-col items-center sticky top-0 z-50">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide gradient-text mb-1 hero-title">
              Nana House
            </h1>
            <span className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-3 hero-subtitle text-center px-2">
              Gentle handcrafted bouquets for every moment
            </span>
            <nav className="flex gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base font-semibold text-gray-700 px-2">
              <NavLink to="/" label="Home" />
              <NavLink to="/gallery" label="Gallery" />
              <NavLink to="/contact" label="Contact" />
            </nav>
          </header>
        )}
        <main className="flex-1 pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/gallery"
              element={
                <Gallery
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  modalImage={modalImage}
                  setModalImage={setModalImage}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* Footer */}
        <footer className="bg-white/90 backdrop-blur-sm text-center py-4 sm:py-6 text-gray-500 text-xs sm:text-sm mt-auto shadow-inner px-2">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Nana House. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="nav-link relative px-2 sm:px-3 py-1 sm:py-2 transition-all duration-300 hover:text-orange-500 focus:text-orange-500 focus:outline-none rounded-lg hover:bg-orange-50 text-center"
    >
      <span className="relative z-10">{label}</span>
    </Link>
  );
}

// Tailwind fade-in animation
// Add this to your global CSS (index.css):
// .fade-in { @apply opacity-0 animate-fadeIn; }
// @keyframes fadeIn { to { opacity: 1; } }

export default App;
