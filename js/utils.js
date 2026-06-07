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