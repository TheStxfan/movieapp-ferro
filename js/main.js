// Importing api functions
import { getTrendingMovies, getTrendingTvShows } from "./api.js";

// Results
const trendingMovies = (await getTrendingMovies()).results
const trendingSeries = (await getTrendingTvShows()).results
const posterBaseUrl = "https://image.tmdb.org/t/p/w220_and_h330_face"

// Testing

// Injecting Trending Movies
const movieIniezione = document.getElementById("movieIniezione")

trendingMovies.map((item) => {
    const movieBox = document.createElement("div")
    const movieH2 = document.createElement("h2")
    const moviePoster = document.createElement("img")

    movieBox.classList = "movie"

    movieH2.innerText = item.title
    moviePoster.src = `${posterBaseUrl}${item.poster_path}`
    moviePoster.alt = item.title

    movieBox.appendChild(moviePoster)
    movieBox.appendChild(movieH2)
    movieIniezione.append(movieBox)
})

// Injecting Trending Series
const serieIniezione = document.getElementById("serieIniezione")

trendingSeries.map((item) => {
    const serieBox = document.createElement("div")
    const serieH2 = document.createElement("h2")
    const seriePoster = document.createElement("img")

    serieBox.classList = "movie"

    serieH2.innerText = item.name
    seriePoster.src = `${posterBaseUrl}${item.poster_path}`
    seriePoster.alt = item.name

    serieBox.appendChild(seriePoster)
    serieBox.appendChild(serieH2)
    serieIniezione.append(serieBox)
})
