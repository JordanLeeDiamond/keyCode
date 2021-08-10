let bannerText = document.getElementById("banner")
let keyValue = document.getElementById("keyValue")
let keyCode = document.getElementById("keyCode")
let charCode = document.getElementById("charCode")
let key = document.getElementById("key")

document.addEventListener("keydown", () => {
    bannerText.textContent = event.keyCode
    keyValue.textContent = event.key
    keyCode.textContent = event.code
    charCode.textContent = event.charCode
    console.dir(event)
})
