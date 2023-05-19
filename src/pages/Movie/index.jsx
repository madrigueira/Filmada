import "./index.scss";
import Header from "../../components/Header";
import { mainURL, key, language } from "../../assets/apiConfig";

const Movie = () => {
  window.onload = function () {
    const idMovie = localStorage.getItem("IdMovie"); // Nome do filme salvo no local storage
    const movieURL = mainURL + "/movie/" + idMovie + "?" + key + "&" + language; // URL de pesquisa dos filmes

    fetch(movieURL)
      .then((resp) => resp.json())
      .then((data) => {
        const movie = document.getElementById("movie");
        movie.innerHTML = `
                <h1>${data.title}</h1>
            `;
        document.querySelector(".main-movie").style.backgroundImage =
          "linear-gradient(transparent 0%, #12131b 60%), url('https://image.tmdb.org/t/p/w1280/" +
          data.backdrop_path +
          "')";
        // "https://image.tmdb.org/t/p/w500/" + data.backdrop_path;
      });
  };

  return (
    <div className="main-movie">
      <Header />
      <div id="movie"></div>
    </div>
  );
};

export default Movie;
