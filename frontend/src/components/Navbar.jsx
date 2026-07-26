import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

      <h1
  className={`text-3xl font-bold ${
    scrolled ? "text-emerald-700" : "text-white"
  }`}
>
  🌿 Lush Green Travels
</h1>

<ul
  className={`hidden md:flex gap-8 font-medium ${
    scrolled ? "text-gray-700" : "text-white"
  }`}
>
          <li className="hover:text-emerald-600 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-emerald-600 cursor-pointer transition">
            Destinations
          </li>

          <li className="hover:text-emerald-600 cursor-pointer transition">
            Packages
          </li>

          <li className="hover:text-emerald-600 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-emerald-600 cursor-pointer transition">
            Contact
          </li>

        </ul>

        <button
  className={`px-6 py-3 rounded-xl transition font-semibold ${
    scrolled
      ? "bg-emerald-600 text-white hover:bg-emerald-700"
      : "bg-white text-emerald-700 hover:bg-gray-100"
  }`}
>
  Book Now
</button>

      </div>
    </nav>
  );
}

export default Navbar;