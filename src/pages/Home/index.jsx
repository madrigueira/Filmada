import "./index.scss"
import Logo from "../../components/Logo"
import { AiOutlineSearch } from "react-icons/ai"

function Home() {

  function test() {
    const teste = document.getElementById('teste')
    const lek = teste.value
    localStorage.setItem("mykey", lek);
  }

  return (
    <div className="home">
      <div className="container">
        <Logo size="4em" />
        <div className="search">
          <input type="text" id="teste" placeholder="Ex: Avengers Endgame" />
          <a onClick={test} href="./movie"><button><AiOutlineSearch /></button></a>
        </div>
        <p>Pesquise por um filme e seja feliz :)</p>
      </div>
    </div>
  )
}

export default Home
