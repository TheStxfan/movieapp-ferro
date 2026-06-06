// Importing api functions
import { getTrendingMovies, getTrendingTvShows } from "./api.js";

// console.log(await getTrendingMovies())

const trendingMovies = (await getTrendingMovies()).results

console.log(trendingMovies)

// Injecting 
const movieIniezione = document.getElementById("movieIniezione")    // crea una costante che punta all'elemento con id="movieIniezione" (0)

trendingMovies.map((item) => {
    const movieBox = document.createElement("div")  // crea un nuovo div (1)
    movieBox.classList = "movie"                    // assegna al div (1) la classe movie 
    const movieH2 = document.createElement("h2")    // crea una costante contenente l'elemento H2 (2)
    movieH2.innerText = item.title                  // assegna come testo a quella costante H2 (2) il titolo del film (item)
    movieBox.appendChild(movieH2)                   // inserisci la costante H2 (2) nel div (1)
    movieIniezione.append(movieBox)                 // inserisci il div (1) in movieIniezione (0)
})