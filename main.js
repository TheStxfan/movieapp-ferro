import movies from "./movies.json" with { type: "json" }

console.log(movies[0])

const movieIniezione = document.getElementById("movieIniezione")

movies.map((item) => {
    const movieBox = document.createElement("div")

    movieBox.classList = "movie"

    const movieH2 = document.createElement("h2")

    movieH2.innerText = item.title

    movieBox.appendChild(movieH2)

    movieIniezione.append(movieBox)
})