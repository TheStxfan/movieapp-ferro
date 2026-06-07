// Importing api functions
import { getPopularShows } from "./api.js";
import { createPoster, createVotesBlock } from "./utils.js";

// Results
const popularShows = (await getPopularShows()).results

// Injecting Popular Series
const serieIniezione = document.getElementById("serieIniezione")

popularShows.map((item) => {
    const serieBox = document.createElement("div")
    const serieTitle = document.createElement("h2")
    const serieInfo = document.createElement("div")
    const details = document.createElement("div")
    const dateBlock = document.createElement("div")
    const serieDate = document.createElement("p")

    serieBox.classList = "card"
    serieInfo.classList = "serieInfo"
    details.classList = "serieDetailsBar"
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