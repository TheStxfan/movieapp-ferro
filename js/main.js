// Importing api functions
import { getTrendingMovies, getTrendingShows } from "./api.js";
import { createPoster, createBanner, openModal } from "./utils.js";

// Injecting Trending Movies
const movieIniezione = document.querySelector("#movieIniezione")
const movieBannerSlot = document.querySelector("#movieBannerSlot")
movieIniezione.innerText = "Caricamento..."

const trendingMovies = await getTrendingMovies()

if (!trendingMovies) {
    movieIniezione.innerText = "Errore nel caricamento dei film. Riprova più tardi."
} else {
    movieIniezione.innerText = ""
    const movieBanner = createBanner(trendingMovies.results, "title")
    if (movieBanner) movieBannerSlot.appendChild(movieBanner)

    trendingMovies.results.map((item) => {
        const movieBox = document.createElement("div")
        const movieTitle = document.createElement("h2")
        const movieInfo = document.createElement("div")
        const details = document.createElement("div")
        const movieDate = document.createElement("p")
        const date = item.release_date
        const dateFormatted = date !== "—" ? new Date(date).toLocaleDateString("it-IT") : "—"

        movieBox.classList = "card"
        movieInfo.classList = "movieInfo"
        details.classList = "movieDetailsBar"

        movieBox.appendChild(createPoster(item, "title"))

        movieTitle.innerText = item.title
        movieDate.innerText = dateFormatted

        movieInfo.appendChild(movieTitle)
        movieBox.appendChild(movieInfo)
        movieBox.appendChild(details)
        details.appendChild(movieDate)

        movieBox.addEventListener("click", () => {
            openModal(item.id, "movie")
        })

        movieIniezione.append(movieBox)
    })
}

// Injecting Trending Series
const serieIniezione = document.querySelector("#serieIniezione")
const serieBannerSlot = document.querySelector("#serieBannerSlot")
serieIniezione.innerText = "Caricamento..."

const trendingSeries = await getTrendingShows()

if (!trendingSeries) {
    serieIniezione.innerText = "Errore nel caricamento delle serie. Riprova più tardi."
} else {
    serieIniezione.innerText = ""

    trendingSeries.results.map((item) => {
        const serieBox = document.createElement("div")
        const serieTitle = document.createElement("h2")
        const serieDate = document.createElement("p")
        const date = item.first_air_date
        const dateFormatted = date !== "—" ? new Date(date).toLocaleDateString("it-IT") : "—"

        serieBox.classList = "card"

        serieBox.appendChild(createPoster(item, "name"))

        serieTitle.innerText = item.name
        serieDate.innerText = dateFormatted

        serieBox.appendChild(serieTitle)
        serieBox.appendChild(serieDate)

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