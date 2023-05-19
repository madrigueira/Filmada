import "./index.scss";
import { createRoot } from "react-dom/client";
import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import poster404 from "../../content/poster_404.png";

const Search = () => {
  window.onload = function () {
    const key = "&api_key=ccd836b52efab791af19b7ac4941e7c7"; // Chave da API
    const mainURL = "https://api.themoviedb.org/3"; // URL padrão da API
    const nameMovie = localStorage.getItem("nameMovieValue"); // Nome do filme salvo no local storage
    const language = "&language=pt-BR";

    const searchURL =
      mainURL + "/search/movie?query=" + nameMovie + language + key; // URL de pesquisa dos filmes
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
      data.forEach((movie, index) => {
        const movieElement = document.createElement("div");
        movieElement.onclick = function () {
          const IdMovie = movie.id;
          localStorage.setItem("IdMovie", IdMovie);
          window.location.href = "/movie";
        };

        let poster = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
        if (movie.poster_path === null) {
          poster = poster404;
        }

        let year = movie.release_date.substring(0, 4);
        if (year === "") {
          year = "-";
        }

        let average = Math.round(movie.vote_average * 10) / 10;
        if (average === 0) {
          average = "-";
        }

        let title = movie.title;

        // if (index === 0) {
        //   createRoot(movieElement).render(<MovieCard poster={poster} />);
        // } else {
        createRoot(movieElement).render(
          <MovieCard
            poster={poster}
            year={year}
            average={average}
            title={title}
          />
        );
        // }

        movies.appendChild(movieElement);
      });
    }
  };

  return (
    <div className="main-search">
      <div className="container">
        <Header />
        <div id="movies"></div>
      </div>
    </div>
  );
};

export default Search;
