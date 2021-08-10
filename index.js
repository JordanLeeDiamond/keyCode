let bannerText = document.getElementById("banner")
let keyValue = document.getElementById("keyValue")
let keyCode = document.getElementById("keyCode")
let charCode = document.getElementById("charCode")
let key = document.getElementById("key")

document.addEventListener("keydown", (e) => {
    bannerText.textContent = e.keyCode
    keyValue.textContent = e.key
    keyCode.textContent = e.code
    charCode.textContent = e.charCode
    console.dir(e)
})
