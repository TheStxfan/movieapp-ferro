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