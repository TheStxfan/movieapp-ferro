import { getMovieDetail, getSerieDetail } from "./api.js";

export const posterBaseUrl = "https://image.tmdb.org/t/p/w500"

export function createPoster(item, titleField) {
    if (item.poster_path) {
        const img = document.createElement("img")
        img.src = `${posterBaseUrl}${item.poster_path}`
        img.alt = item[titleField]
        return img
    } else {
        const placeholder = document.createElement("div")
        placeholder.classList = "poster-placeholder"
        placeholder.innerText = "Nessuna immagine"
        return placeholder
    }
}

export function createVotesBlock(item) {
    const votesBlock = document.createElement("div")
    const voto = document.createElement("p")
    const totVoti = document.createElement("p")

    votesBlock.classList = "detailsVotes"
    voto.innerText = "Avg: " + item.vote_average.toFixed(1)
    totVoti.innerText = "Votes: " + item.vote_count

    votesBlock.appendChild(voto)
    votesBlock.appendChild(totVoti)
    return votesBlock
}

// Chiusura Modal
const modal = document.querySelector("#detailModal")
const modalClose = document.querySelector("#modalClose")

modalClose.addEventListener("click", () => {
    modal.classList.remove("modal-visible")
})

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("modal-visible")
    }
})

// Apertura Modal
export async function openModal(id, type) {
    const modalBody = document.querySelector("#modalBody")

    modalBody.innerText = "Caricamento..."
    modal.classList.add("modal-visible")

    // Prima prova in italiano
    let data = type === "movie" ? await getMovieDetail(id, "it-IT") : await getSerieDetail(id, "it-IT")

    if (!data) {
        modalBody.innerText = "Errore nel caricamento dei dettagli."
        return
    }

    // Se l'overview è vuoto, rifai in inglese come fallback
    if (!data.overview) {
        data = type === "movie" ? await getMovieDetail(id, "en-US") : await getSerieDetail(id, "en-US")
    }

    const title = data.title || data.name
    const date = data.release_date || data.first_air_date || "—"
    const overview = data.overview || "Nessuna descrizione disponibile."
    const vote = data.vote_average ? data.vote_average.toFixed(1) : "—"
    const votes = data.vote_count || 0
    const posterUrl = data.poster_path ? `${posterBaseUrl}${data.poster_path}` : null

    modalBody.innerHTML = ""

    if (posterUrl) {
        const img = document.createElement("img")
        img.src = posterUrl
        img.alt = title
        img.classList = "modal-poster"
        modalBody.appendChild(img)
    }

    const info = document.createElement("div")
    info.classList = "modal-info"

    const h2 = document.createElement("h2")
    h2.innerText = title

    const dateP = document.createElement("p")
    dateP.innerText = "Data di uscita: " + date

    const voteP = document.createElement("p")
    voteP.innerText = "Valutazione: " + vote + " (" + votes + " voti)"

    const overviewP = document.createElement("p")
    overviewP.classList = "modal-overview"
    overviewP.innerText = overview

    info.appendChild(h2)
    info.appendChild(dateP)
    info.appendChild(voteP)
    info.appendChild(overviewP)
    modalBody.appendChild(info)
}