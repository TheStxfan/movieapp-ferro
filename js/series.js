// Importing api functions
import { getPopularShows } from "./api.js";
import { createPoster, createVotesBlock, openModal } from "./utils.js";

// Injecting Popular Series
const serieIniezione = document.querySelector("#serieIniezione")
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
        const date = item.first_air_date
        const dateFormatted = date !== "—" ? new Date(date).toLocaleDateString("it-IT") : "—"

        serieBox.classList = "card"
        serieInfo.classList = "movieInfo"
        details.classList = "movieDetailsBar"
        dateBlock.classList = "detailsDate"

        serieBox.appendChild(createPoster(item, "name"))

        serieTitle.innerText = item.name
        serieDate.innerText = dateFormatted

        serieInfo.appendChild(serieTitle)
        serieBox.appendChild(serieInfo)
        serieBox.appendChild(details)

        dateBlock.appendChild(serieDate)
        details.appendChild(dateBlock)
        details.appendChild(createVotesBlock(item))

        serieBox.addEventListener("click", () => {
            openModal(item.id, "tv")
        })

        serieIniezione.append(serieBox)
    })
}

document.querySelector("#hamburger").addEventListener("click", () => {
    document.querySelector("#menu").classList.toggle("menu-open")
})

document.addEventListener("click", (e) => {
    const menu = document.querySelector("#menu")
    const hamburger = document.querySelector("#hamburger")
    if (!menu.contains(e.target) && e.target !== hamburger) {
        menu.classList.remove("menu-open")
    }
})