const images = [
    "pics/musk.jpg",
    "pics/nadella.jpg",
    "pics/sundar.webp"
]


const imgEl = document.getElementById("img-slide")

function slider() {
    let imgDOM = ""
    for ( let i = 0; i < images.length; i++) {
        imgDOM += `<img alt="Ceo's of companies"  class="team" src="${images[i]}">`
    }
    imgEl.innerHTML = imgDOM
}

slider()






