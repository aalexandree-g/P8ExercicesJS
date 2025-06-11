const myButton = document.getElementById("myButton")
myButton.addEventListener("click", () => {
    const p = document.createElement("p")
    const message = "Bonjour, vous avez cliqué sur le bouton !"
    p.innerText = message
    myButton.insertAdjacentElement("afterend", p)
})