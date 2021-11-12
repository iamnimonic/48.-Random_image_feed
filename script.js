const container = document.querySelector('.container')

let baseUrl = 'https://source.unsplash.com/random/400'
let count = 50

for( let i = 0; i < count; i++) {
    let img_el = document.createElement('img')
    img_el.classList.add('cell')
    img_el.src = `https://source.unsplash.com/random/${randomSize()}`
    container.appendChild(img_el)
}

function randomNum() {
    return Math.floor(Math.random()*10 + 300)
}

function randomSize() {
    return `${randomNum()}x${randomNum()}`
}