// Importing api functions
import { getPopularMovies } from "./api.js";

// Results
const popularMovies = (await getPopularMovies()).results
const posterBaseUrl = "https://image.tmdb.org/t/p/w220_and_h330_face"

// Injecting Popular Movies
const movieIniezione = document.getElementById("movieIniezione")

popularMovies.map((item) => {
    const movieBox = document.createElement("div")
    const movieTitle = document.createElement("h2")
    const moviePoster = document.createElement("img")
    const movieInfo = document.createElement("div")
    const details = document.createElement("div")
    const dateBlock = document.createElement("div")
    const movieDate = document.createElement("p")
    const votesBlock = document.createElement("div")
    const voto = document.createElement("p")
    const totVoti = document.createElement("p")

    movieBox.classList = "card"
    movieInfo.classList = "movieInfo"
    details.classList = "movieDetailsBar"
    dateBlock.classList = "detailsDate"
    votesBlock.classList = "detailsVotes"

    movieTitle.innerText = item.title

    moviePoster.src = `${posterBaseUrl}${item.poster_path}`
    moviePoster.alt = item.title

    movieDate.innerText = item.release_date

    voto.innerText = "Avg: " + item.vote_average.toFixed(1)
    totVoti.innerText = "Votes: " + item.vote_count

    movieBox.appendChild(moviePoster)
    movieInfo.appendChild(movieTitle)
    movieBox.appendChild(movieInfo)
    movieBox.appendChild(details)

    dateBlock.appendChild(movieDate)
    votesBlock.appendChild(voto)
    votesBlock.appendChild(totVoti)
    details.appendChild(dateBlock)
    details.appendChild(votesBlock)
    
    movieIniezione.append(movieBox)
})