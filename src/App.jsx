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

function Divider() {
  return (
    <div
      className="my-8 border-t border-gray-200 w-3/4 mx-auto"
      aria-hidden="true"
    ></div>
  );
}

function Hero() {
  return (
    <section className="text-center py-12 px-4 bg-gradient-to-r from-yellow-100 to-gray-50 fade-in">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
        Handcrafted Bouquets
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto text-lg">
        Step into a world of gentle colors and soft textures. Each bouquet is
        crafted with care to bring a touch of warmth and whimsy to your day.
        Discover something special, made just for you, at Nana House. Let our
        bouquets brighten your space and lift your spirits.
      </p>
    </section>
  );
}

function Gallery({ highlightOnly = false }) {
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
  // Shuffle and pick 3 random images for highlight
  const getRandomImages = (arr, n) => {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };
  const displayImages = highlightOnly ? getRandomImages(images, 3) : images;

  return (
    <section id="gallery" className="py-12 px-4 bg-white fade-in">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
        {highlightOnly ? "Our Bouquets" : "All Bouquets"}
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {displayImages.map((img, idx) => (
          <div
            key={idx}
            className="bg-yellow-50 rounded-xl shadow-lg p-3 flex items-center justify-center transition-transform hover:scale-105"
          >
            <img
              src={img}
              alt={`Colorful handcrafted bouquet ${idx + 1}`}
              className="rounded-lg object-cover w-full h-72 border border-yellow-200 shadow-md"
            />
          </div>
        ))}
      </div>
      {highlightOnly && (
        <div className="flex justify-center mt-8">
          <Link
            to="/gallery"
            className="px-6 py-2 bg-orange-400 text-white rounded-lg shadow hover:bg-orange-500 transition-colors font-semibold"
          >
            See More
          </Link>
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-12 px-4 bg-gray-50 text-center fade-in">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
      <p className="text-gray-600 mb-3">Follow us on social media:</p>
      <ul className="inline-block text-left">
        <li className="flex items-center gap-2 text-lg mb-2">
          <span role="img" aria-label="TikTok">
            🎵
          </span>
          TikTok:{" "}
          <a
            href="https://www.tiktok.com/@nana.house7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            @nana.house7
          </a>
        </li>
        <li className="flex items-center gap-2 text-lg">
          <span role="img" aria-label="Instagram">
            📸
          </span>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/nanahouse_0919"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            nanahouse_0919
          </a>
        </li>
      </ul>
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
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md py-6 px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-wide text-orange-500 mb-1">
            Nana house
          </h1>
          <span className="text-base text-gray-500 mb-3">
            Gentle handcrafted bouquets for every moment
          </span>
          <nav className="flex gap-6 text-lg font-medium text-gray-700">
            <NavLink to="/" label="Home" />
            <NavLink to="/gallery" label="Gallery" />
            <NavLink to="/contact" label="Contact" />
          </nav>
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/gallery"
              element={
                <>
                  <Divider />
                  <Gallery />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Divider />
                  <Contact />
                </>
              }
            />
          </Routes>
        </main>
        {/* Footer */}
        <footer className="bg-white text-center py-4 text-gray-400 text-sm mt-auto shadow-inner">
          <p>
            &copy; {new Date().getFullYear()} Nana house. All rights reserved.
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
      className="relative px-1 transition-colors duration-200 hover:text-orange-500 focus:text-orange-500 focus:outline-none"
    >
      <span>{label}</span>
      <span
        className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform origin-left duration-300"
        aria-hidden="true"
      ></span>
    </Link>
  );
}

// Tailwind fade-in animation
// Add this to your global CSS (index.css):
// .fade-in { @apply opacity-0 animate-fadeIn; }
// @keyframes fadeIn { to { opacity: 1; } }

export default App;
