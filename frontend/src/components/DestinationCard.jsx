import { FaStar } from "react-icons/fa";

function DestinationCard({ image, name, country, price, rating }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">{name}</h3>

          <span className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            {rating}
          </span>
        </div>

        <p className="text-gray-500 mt-2">{country}</p>

        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-sm text-gray-400">Starting From</p>

            <h4 className="text-emerald-600 text-2xl font-bold">
              ${price}
            </h4>
          </div>

          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl transition">
            Explore
          </button>
        </div>

      </div>
    </div>
  );
}

export default DestinationCard;