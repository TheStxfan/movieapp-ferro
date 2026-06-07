// Importing api functions
import { getPopularShows } from "./api.js";
import { createPoster, createVotesBlock } from "./utils.js";

// Injecting Popular Series
const serieIniezione = document.getElementById("serieIniezione")
serieIniezione.innerText = "Caricamento..."

const popularShows = await getPopularShows()

if (!popularShows) {
    serieIniezione.innerText = "Errore nel caricamento delle serie. Riprova più tardi."
} else {
    serieIniezione.innerText = ""
    popularShows.results.map((item) => {
        const serieBox = document.createElement("div")
        const serieTitle = document.createElement("h2")
        const serieInfo = document.createElement("div")
        const details = document.createElement("div")
        const dateBlock = document.createElement("div")
        const serieDate = document.createElement("p")

        serieBox.classList = "card"
        serieInfo.classList = "movieInfo"
        details.classList = "movieDetailsBar"
        dateBlock.classList = "detailsDate"

        serieBox.appendChild(createPoster(item, "name"))

        serieTitle.innerText = item.name
        serieDate.innerText = item.first_air_date

        serieInfo.appendChild(serieTitle)
        serieBox.appendChild(serieInfo)
        serieBox.appendChild(details)

        dateBlock.appendChild(serieDate)
        details.appendChild(dateBlock)
        details.appendChild(createVotesBlock(item))

        serieIniezione.append(serieBox)
    })
}