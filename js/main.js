// Importing api functions
import { getTrendingMovies, getTrendingTvShows } from "./api.js";

// Injecting Trending Movies
const trendingMovies = (await getTrendingMovies()).results
const movieIniezione = document.getElementById("movieIniezione")    // crea una costante che punta all'elemento con id="movieIniezione" (0)

trendingMovies.map((item) => {
    const movieBox = document.createElement("div")  // crea un nuovo div (1)
    movieBox.classList = "movie"                    // assegna al div (1) la classe movie 
    const movieH2 = document.createElement("h2")    // crea una costante contenente l'elemento H2 (2)
    movieH2.innerText = item.title                  // assegna come testo a quella costante H2 (2) il titolo del film (item)
    movieBox.appendChild(movieH2)                   // inserisci la costante H2 (2) nel div (1)
    movieIniezione.append(movieBox)                 // inserisci il div (1) in movieIniezione (0)
})

// Injecting Trending Series
const trendingSeries = (await getTrendingTvShows()).results
const serieIniezione = document.getElementById("serieIniezione")    // crea una costante che punta all'elemento con id="movieIniezione" (0)

trendingSeries.map((item) => {
    const serieBox = document.createElement("div")  // crea un nuovo div (1)
    serieBox.classList = "movie"                    // assegna al div (1) la classe movie 
    const serieH2 = document.createElement("h2")    // crea una costante contenente l'elemento H2 (2)
    serieH2.innerText = item.name                  // assegna come testo a quella costante H2 (2) il titolo del film (item)
    serieBox.appendChild(serieH2)                   // inserisci la costante H2 (2) nel div (1)
    serieIniezione.append(serieBox)                 // inserisci il div (1) in movieIniezione (0)
})