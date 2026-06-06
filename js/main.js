// Importing api functions
import { getTrendingMovies, getTrendingShows } from "./api.js";

// Results
const trendingMovies = (await getTrendingMovies()).results
const trendingSeries = (await getTrendingShows()).results
const posterBaseUrl = "https://image.tmdb.org/t/p/w220_and_h330_face"

// Testing
console.log(trendingMovies[0].release_date)

// Injecting Trending Movies
const movieIniezione = document.getElementById("movieIniezione")

trendingMovies.map((item) => {
    const movieBox = document.createElement("div")
    const movieTitle = document.createElement("h2")
    const movieInfo = document.createElement("div")
    const details = document.createElement("div")
    const moviePoster = document.createElement("img")
    const movieDate = document.createElement("p")

    movieBox.classList = "card"
    movieInfo.classList = "movieInfo"
    details.classList = "movieDetailsBar"

    movieTitle.innerText = item.title
    moviePoster.src = `${posterBaseUrl}${item.poster_path}`
    moviePoster.alt = item.title
    movieDate.innerText = item.release_date

    movieBox.appendChild(moviePoster)
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
    const seriePoster = document.createElement("img")
    const serieDate = document.createElement("p")

    serieBox.classList = "card"

    serieTitle.innerText = item.name
    seriePoster.src = `${posterBaseUrl}${item.poster_path}`
    seriePoster.alt = item.name
    serieDate.innerText = item.first_air_date

    serieBox.appendChild(seriePoster)
    serieBox.appendChild(serieTitle)
    serieBox.appendChild(serieDate)

    serieIniezione.append(serieBox)
})
