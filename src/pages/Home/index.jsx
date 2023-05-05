import "./index.scss"
import Logo from "../../components/Logo"
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"

function Home() {

  window.onload = function () {

  }

  function test() {
    const teste = document.getElementById('teste')
    const lek = teste.value

    console.log(lek)
  }


  return (
    <div className="home">
      <div className="container">
        <Logo size="4em" />
        <div className="search">
          <input type="text" id="teste" placeholder="Ex: Avengers Endgame" />
          <a onClick={test}><button><AiOutlineSearch /></button></a>
        </div>
        <p>Pesquise por um filme e seja feliz :)</p>
      </div>
    </div>
  )
}

export default Home
