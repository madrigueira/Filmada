import './index.scss'

const Movie = () => {

    window.onload = function () {
        const key = 'api_key=ccd836b52efab791af19b7ac4941e7c7'
        const baseURL = 'https://api.themoviedb.org/3'
        const apiURL = baseURL + '/search/movie?query=' + localStorage.getItem("mykey") + '&' + key
        const main = document.getElementById('main')

        getMovies(apiURL)

        function getMovies(url) {
            fetch(url).then(res => res.json()).then(data => {

                showMovies(data.results)

            })
        }

        function showMovies(data) {
            data.forEach(movie => {
                const title = movie.title
                const movieEl = document.createElement('div')
                movieEl.innerHTML = `
                    <h1>${title}</h1>
                `

                main.appendChild(movieEl)
            })
        }
    }


    return (
        <div className='movie' id='main'>
        </div>
    )
}

export default Movie
