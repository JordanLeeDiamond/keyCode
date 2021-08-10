const bannerText = document.getElementById("banner")
const keyValue = document.getElementById("keyValue")
const keyCode = document.getElementById("keyCode")
const charCode = document.getElementById("charCode")
const key = document.getElementById("key")

document.addEventListener("keydown", (e) => {
    bannerText.textContent = e.keyCode
    keyValue.textContent = e.key
    keyCode.textContent = e.code
    charCode.textContent = e.charCode
    console.dir(e)
})
