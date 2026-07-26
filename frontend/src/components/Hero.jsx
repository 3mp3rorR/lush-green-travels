import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 text-white">

        <p className="uppercase tracking-[6px] text-emerald-300 mb-5">
          Luxury Eco Travel
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight max-w-3xl">
          Discover
          <span className="text-emerald-400"> Nature</span>
          <br />
          Like Never Before
        </h1>

        <p className="mt-8 max-w-xl text-lg text-gray-200 leading-8">
          Experience handcrafted journeys, luxury resorts,
          breathtaking landscapes and unforgettable adventures
          with Lush Green Travels.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-xl font-semibold transition">
            Explore Tours
          </button>

          <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl">
            Watch Video
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;