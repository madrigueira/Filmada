import "./index.scss"
import Logo from "../../components/Logo"
import { AiOutlineSearch } from "react-icons/ai"

const Home = () => {

  window.onload = function () {
    const movieNameInput = document.getElementById('name-movie')
    const submit = document.getElementById('submit-movie')
    const result = document.getElementById('result')

    const getMovie = () => {
      let movieName = movieNameInput.value
      let url = `http://www.omdbapi.com/?t=${movieName}&apikey=6e61684a`

      fetch(url).then((resp) => resp.json()).then((data) =>
        result.innerHTML = `<img src=${data.Poster}/>`
      )
    }

    submit.addEventListener("click", getMovie)
  }

  return (
    <div className="home">
      <div className="container">
        <Logo size="4em" />
        <div className="search">
          <input type="text" id="name-movie" placeholder="Ex: Avengers Endgame" />
          <button id="submit-movie"><AiOutlineSearch /></button>
        </div>
        <p>Pesquise por um filme e seja feliz :)</p>
        <div id="result"></div>
      </div>
    </div>
  )
}

export default Home
