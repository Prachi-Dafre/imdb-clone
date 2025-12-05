import React from "react";

const MovieCard = ({ poster, title, year, rating }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={poster}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">Release Year: {year}</p>

        <div className="mt-2 inline-block bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full">
          ⭐ {rating}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
