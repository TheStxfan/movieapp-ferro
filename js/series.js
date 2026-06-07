// Importing api functions
import { getPopularShows } from "./api.js";

// Results
const popularShows = (await getPopularShows()).results
const posterBaseUrl = "https://image.tmdb.org/t/p/w220_and_h330_face"

// Injecting Popular Series
const serieIniezione = document.getElementById("serieIniezione")

popularShows.map((item) => {
    const serieBox = document.createElement("div")
    const serieTitle = document.createElement("h2")
    const serieInfo = document.createElement("div")
    const details = document.createElement("div")
    const dateBlock = document.createElement("div")
    const serieDate = document.createElement("p")
    const votesBlock = document.createElement("div")
    const voto = document.createElement("p")
    const totVoti = document.createElement("p")

    serieBox.classList = "card"
    serieInfo.classList = "serieInfo"
    details.classList = "serieDetailsBar"
    dateBlock.classList = "detailsDate"
    votesBlock.classList = "detailsVotes"

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

    voto.innerText = "Avg: " + item.vote_average.toFixed(1)
    totVoti.innerText = "Votes: " + item.vote_count

    serieInfo.appendChild(serieTitle)
    serieBox.appendChild(serieInfo)
    serieBox.appendChild(details)

    dateBlock.appendChild(serieDate)
    votesBlock.appendChild(voto)
    votesBlock.appendChild(totVoti)
    details.appendChild(dateBlock)
    details.appendChild(votesBlock)
    
    serieIniezione.append(serieBox)
})