import React from "react";
import MovieCard from "./components/MovieCard";
import Timer from "./components/Timer";

const movies = [
  {
    poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1500_.jpg",
    title: "Inception",
    year: 2010,
    rating: 8.8,
  },
  {
    poster: "https://m.media-amazon.com/images/I/81kO5Z5zZbL._SL1500_.jpg",
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
  },
  {
    poster: "https://m.media-amazon.com/images/I/91yJ1CPZQCL._SL1500_.jpg",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-6">Movie List</h1>

      {/* Movie List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            poster={movie.poster}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>

      {/* Timer Component */}
      <div className="mt-10">
        <Timer />
      </div>

    </div>
  );
};

export default App;
