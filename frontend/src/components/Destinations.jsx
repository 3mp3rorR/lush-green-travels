import DestinationCard from "./DestinationCard";

import bali from "../assets/images/bali.jpg";
import paris from "../assets/images/paris.jpg";
import switzerland from "../assets/images/switzerland.jpg";
import dubai from "../assets/images/dubai.jpg";

function Destinations() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold text-gray-800">
          Featured Destinations
        </h2>

        <p className="text-gray-500 mt-4">
          Discover our most loved destinations around the world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <DestinationCard
          image={bali}
          name="Bali"
          country="Indonesia"
          price="999"
        />

        <DestinationCard
          image={paris}
          name="Paris"
          country="France"
          price="1299"
        />

        <DestinationCard
          image={switzerland}
          name="Swiss Alps"
          country="Switzerland"
          price="1499"
        />

        <DestinationCard
          image={dubai}
          name="Dubai"
          country="UAE"
          price="899"
        />

      </div>
    </section>
  );
}

export default Destinations;