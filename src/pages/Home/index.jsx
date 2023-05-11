import "./index.scss";
import Logo from "../../components/Logo";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
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
          <input
            type="text"
            id="nameMovie"
            placeholder="Ex: Avengers Endgame"
          />
          <a onClick={searchMovie} href="./movie">
            <AiOutlineSearch />
          </a>
        </div>
        <p>Pesquise por um filme e seja feliz :)</p>
      </div>
    </div>
  );
};

export default Home;
