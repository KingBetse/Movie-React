import { useEffect, useState } from "react";
import searchImg from "./searchImg.svg";
import MovieCard from "./MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [titlee, setTitlee] = useState("");

  const API_link = "http://www.omdbapi.com/?i=tt3896198&apikey=3d9ece39";

  const searchMovies = async (title) => {
    const res = await fetch(`${API_link}&s=${title}`);
    const data = await res.json();
    console.log(title);
    // console.log(data.sea);
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("about");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for Movies"
          value={titlee}
          onChange={(e) => {
            setTitlee(e.target.value);
          }}
        />
        <img src={searchImg} alt="name" onClick={() => searchMovies(titlee)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movies) => (
            <MovieCard movies={movies} />
          ))}
        </div>
      ) : (
        <div>There is no Movies in here</div>
      )}
    </div>
  );
};

export default App;
