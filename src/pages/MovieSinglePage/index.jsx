import './index.scss'

const Movie = () => {
    window.onload = function () {
        const key = "?api_key=ccd836b52efab791af19b7ac4941e7c7"; // Chave da API
        const mainURL = "https://api.themoviedb.org/3"; // URL padrão da API
        const idMovie = localStorage.getItem("IdMovie"); // Nome do filme salvo no local storage
    
        const movieURL = mainURL + "/movie/" + idMovie + key; // URL de pesquisa dos filmes

        fetch(movieURL).then((resp) => resp.json()).then((data) => {
            const movie = document.getElementById('movie')
            movie.innerHTML = `
                <h1>${data.title}</h1>
            `
        })

      };


  return (
    <div className='main-movie'>
        <div id="movie"></div>
    </div>
  )
}

export default Movie