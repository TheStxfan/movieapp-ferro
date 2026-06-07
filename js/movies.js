// Importing api functions
import { getPopularMovies } from "./api.js";
import { createPoster, createVotesBlock } from "./utils.js";

// Results
const popularMovies = (await getPopularMovies()).results

// Injecting Popular Movies
const movieIniezione = document.getElementById("movieIniezione")

popularMovies.map((item) => {
    const movieBox = document.createElement("div")
    const movieTitle = document.createElement("h2")
    const movieInfo = document.createElement("div")
    const details = document.createElement("div")
    const dateBlock = document.createElement("div")
    const movieDate = document.createElement("p")

    movieBox.classList = "card"
    movieInfo.classList = "movieInfo"
    details.classList = "movieDetailsBar"
    dateBlock.classList = "detailsDate"

    movieBox.appendChild(createPoster(item, "title"))

    movieTitle.innerText = item.title
    movieDate.innerText = item.release_date

    movieInfo.appendChild(movieTitle)
    movieBox.appendChild(movieInfo)
    movieBox.appendChild(details)

    dateBlock.appendChild(movieDate)
    details.appendChild(dateBlock)
    details.appendChild(createVotesBlock(item))
    
    movieIniezione.append(movieBox)
})