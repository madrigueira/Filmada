import "./index.scss";
import Header from "../../components/Header";

const Movie = () => {
  window.onload = function () {
    const key = "&api_key=ccd836b52efab791af19b7ac4941e7c7"; // Chave da API
    const mainURL = "https://api.themoviedb.org/3"; // URL padrão da API
    const nameMovie = localStorage.getItem("nameMovieValue"); // Nome do filme salvo no local storage

    const searchURL = mainURL + "/search/movie?query=" + nameMovie + key; // URL de pesquisa dos filmes
    const movies = document.getElementById("movies"); // Div onde vão aparecer os filmes

    getMovies(searchURL);

    function getMovies(url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          showMovies(data.results);
        });
    }

    function showMovies(data) {
      data.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
          <h3>${movie.title}</h3>
        `;

        movies.appendChild(movieElement);
      });
    }
  };

  return (
    <div className="main-movie">
      <div className="container">
        <Header />
        <div id="movies"></div>
      </div>
    </div>
  );
};

export default Movie;
