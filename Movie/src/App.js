import { useEffect, useState } from "react";
import searchImg from "./searchImg.svg";

const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    searchM0vies("superman");
  });
  const API_link = "http://www.omdbapi.com/?i=tt3896198&apikey=3d9ece39";

  const searchM0vies = async (title) => {
    const res = await fetch(`${API_link}&s=${title}`);
    const data = await res.json();
    setMovies(data.search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for Movies"
          value="superman"
          onChange={() => {}}
        />
        <img src={searchImg} alt="name" />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          <MovieCard />
        </div>
      ) : (
        <div>There is no Movies in here</div>
      )}
    </div>
  );
};
const MovieCard = () => {
  return (
    <div className="movie">
      <div>
        <p>year</p>
      </div>

      <div>
        <img src="poster" alt="name" />
      </div>
      <div>
        <span>type</span>
        <h3>title</h3>
      </div>
    </div>
  );
};
export default App;
