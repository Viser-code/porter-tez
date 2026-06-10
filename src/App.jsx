import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans antialiased min-h-screen bg-white text-gray-900">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
