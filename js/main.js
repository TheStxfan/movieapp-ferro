// Importing api functions
import { posterBaseUrl, getTrendingMovies, getTrendingShows } from "./api.js";

// Results
const trendingMovies = (await getTrendingMovies()).results
const trendingSeries = (await getTrendingShows()).results

// Injecting Trending Movies
const movieIniezione = document.getElementById("movieIniezione")

trendingMovies.map((item) => {
    const movieBox = document.createElement("div")
    const movieTitle = document.createElement("h2")
    const movieInfo = document.createElement("div")
    const details = document.createElement("div")
    const movieDate = document.createElement("p")

    movieBox.classList = "card"
    movieInfo.classList = "movieInfo"
    details.classList = "movieDetailsBar"

    if (item.poster_path) {
        const moviePoster = document.createElement("img")
        moviePoster.src = `${posterBaseUrl}${item.poster_path}`
        moviePoster.alt = item.title
        movieBox.appendChild(moviePoster)
    } else {
        const placeholder = document.createElement("div")
        placeholder.classList = "poster-placeholder"
        placeholder.innerText = "Nessuna immagine"
        movieBox.appendChild(placeholder)
    }

    movieTitle.innerText = item.title
    movieDate.innerText = item.release_date

    movieInfo.appendChild(movieTitle)
    movieBox.appendChild(movieInfo)
    movieBox.appendChild(details)
    details.appendChild(movieDate)
    
    movieIniezione.append(movieBox)
})

// Injecting Trending Series
const serieIniezione = document.getElementById("serieIniezione")

trendingSeries.map((item) => {
    const serieBox = document.createElement("div")
    const serieTitle = document.createElement("h2")
    const serieDate = document.createElement("p")

    serieBox.classList = "card"

    if (item.poster_path) {
        const seriePoster = document.createElement("img")
        seriePoster.src = `${posterBaseUrl}${item.poster_path}`
        seriePoster.alt = item.name
        serieBox.appendChild(seriePoster)
    } else {
        const placeholder = document.createElement("div")
        placeholder.classList = "poster-placeholder"
        placeholder.innerText = "Nessuna immagine"
        serieBox.appendChild(placeholder)
    }

    serieTitle.innerText = item.name
    serieDate.innerText = item.first_air_date

    serieBox.appendChild(serieTitle)
    serieBox.appendChild(serieDate)

    serieIniezione.append(serieBox)
})