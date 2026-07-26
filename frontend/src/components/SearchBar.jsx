import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
} from "react-icons/fa";

function SearchBar() {
  const [searchData, setSearchData] = useState({
    destination: "",
    date: "",
    travelers: 2,
  });

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    console.log(searchData);

    // Later we'll call our backend API here
  };

  return (
    <div className="max-w-6xl mx-auto -mt-20 relative z-30 px-6">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 grid md:grid-cols-4 gap-5 border border-white">

        {/* Destination */}
        <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4">

          <FaMapMarkerAlt className="text-emerald-600 text-xl" />

          <div className="w-full">
            <p className="text-xs text-gray-500">Destination</p>

            <input
              name="destination"
              value={searchData.destination}
              onChange={handleChange}
              placeholder="Where do you want to go?"
              className="w-full outline-none"
            />
          </div>

        </div>

        {/* Date */}

        <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4">

          <FaCalendarAlt className="text-emerald-600 text-xl" />

          <div className="w-full">
            <p className="text-xs text-gray-500">Travel Date</p>

            <input
              type="date"
              name="date"
              value={searchData.date}
              onChange={handleChange}
              className="w-full outline-none"
            />

          </div>

        </div>

        {/* Travelers */}

        <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4">

          <FaUsers className="text-emerald-600 text-xl" />

          <div className="w-full">
            <p className="text-xs text-gray-500">Travelers</p>

            <input
              type="number"
              min="1"
              name="travelers"
              value={searchData.travelers}
              onChange={handleChange}
              className="w-full outline-none"
            />

          </div>

        </div>

        {/* Button */}

        <button
          onClick={handleSearch}
          className="bg-emerald-600 hover:bg-emerald-700 rounded-2xl text-white text-lg font-semibold flex justify-center items-center gap-3 transition duration-300"
        >
          <FaSearch />

          Search
        </button>

      </div>
    </div>
  );
}

export default SearchBar;