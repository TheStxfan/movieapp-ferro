// Importing api functions
import { getTrendingMovies, getTrendingShows } from "./api.js";
import { createPoster } from "./utils.js";

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

    movieBox.appendChild(createPoster(item, "title"))

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

    serieBox.appendChild(createPoster(item, "name"))

    serieTitle.innerText = item.name
    serieDate.innerText = item.first_air_date

    serieBox.appendChild(serieTitle)
    serieBox.appendChild(serieDate)

    serieIniezione.append(serieBox)
})