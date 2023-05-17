import "./index.scss";
import Logo from "../../components/Logo";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  window.onload = function () {
    nameMovie.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        btnSearch.click();
      }
    });
  };

  function searchMovie() {
    const nameMovie = document.getElementById("nameMovie");
    const nameMovieValue = nameMovie.value;
    localStorage.setItem("nameMovieValue", nameMovieValue);
  }

  return (
    <div className="main-home">
      <div className="container">
        <Logo size="4em" />
        <div className="search">
          <input type="text" id="nameMovie" placeholder="Ex: Vingadores" />
          <a onClick={searchMovie} href="./search" id="btnSearch">
            <AiOutlineSearch />
          </a>
        </div>
        <p>Pesquise por um filme e seja feliz :)</p>
      </div>
    </div>
  );
};

export default Home;
