// Importing api functions
import { getPopularMovies } from "./api.js";
import { createPoster, createVotesBlock, createBanner, openModal } from "./utils.js";

// Injecting Popular Movies
const movieIniezione = document.querySelector("#movieIniezione")
const movieBannerSlot = document.querySelector("#movieBannerSlot")
movieIniezione.innerText = "Caricamento..."

const popularMovies = await getPopularMovies()

if (!popularMovies) {
    movieIniezione.innerText = "Errore nel caricamento dei film. Riprova più tardi."
} else {
    movieIniezione.innerText = ""
    const movieBanner = createBanner(popularMovies.results, "title")
    if (movieBanner) movieBannerSlot.appendChild(movieBanner)

    popularMovies.results.map((item) => {
        const movieBox = document.createElement("div")
        const movieTitle = document.createElement("h2")
        const movieInfo = document.createElement("div")
        const details = document.createElement("div")
        const dateBlock = document.createElement("div")
        const movieDate = document.createElement("p")
        const date = item.release_date
        const dateFormatted = date !== "—" ? new Date(date).toLocaleDateString("it-IT") : "—"

        movieBox.classList = "card"
        movieInfo.classList = "movieInfo"
        details.classList = "movieDetailsBar"
        dateBlock.classList = "detailsDate"

        movieBox.appendChild(createPoster(item, "title"))

        movieTitle.innerText = item.title
        movieDate.innerText = dateFormatted

        movieInfo.appendChild(movieTitle)
        movieBox.appendChild(movieInfo)
        movieBox.appendChild(details)

        dateBlock.appendChild(movieDate)
        details.appendChild(dateBlock)
        details.appendChild(createVotesBlock(item))

        movieBox.addEventListener("click", () => {
            openModal(item.id, "movie")
        })

        movieIniezione.append(movieBox)
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