import { useState } from "react";
import Navbar from "./components/Navbar";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <Navbar />
      <main className="flex flex-col lg:flex-row gap-4 p-4">
        <div className="w-full lg:w-1/2">
          <div className="collapse collapse-arrow">
            <input
              type="checkbox"
              checked={isOpen1}
              onChange={() => setIsOpen1((open) => !open)}
            />
            <div className="collapse-title text-xl font-medium">
              Movies to Watch
            </div>
            <div className="collapse-content">
              <ul className="list-none p-0">
                {movies?.map((movie) => (
                  <li
                    key={movie.imdbID}
                    className="card card-side bg-base-100 shadow-md mb-4"
                  >
                    <figure className="w-1/4">
                      <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title">{movie.Title}</h3>
                      <p className="text-sm">
                        <span>🗓</span>
                        <span>{movie.Year}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="collapse collapse-arrow">
            <input
              type="checkbox"
              checked={isOpen2}
              onChange={() => setIsOpen2((open) => !open)}
            />
            <div className="collapse-title text-xl font-medium">
              Movies you watched
            </div>
            <div className="collapse-content">
              <div className="mb-4">
                <h2 className="text-xl font-bold">Movies you watched</h2>
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">#️⃣</div>
                    <div className="stat-value">{watched.length}</div>
                    <div className="stat-desc">movies</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">⭐️</div>
                    <div className="stat-value">{avgImdbRating}</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">🌟</div>
                    <div className="stat-value">{avgUserRating}</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">⏳</div>
                    <div className="stat-value">{avgRuntime} min</div>
                  </div>
                </div>
              </div>

              <ul className="list-none p-0">
                {watched.map((movie) => (
                  <li
                    key={movie.imdbID}
                    className="card card-side bg-base-100 shadow-md mb-4"
                  >
                    <figure className="w-1/4">
                      <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title">{movie.Title}</h3>
                      <p className="text-sm">
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p className="text-sm">
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p className="text-sm">
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
