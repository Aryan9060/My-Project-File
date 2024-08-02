
const imgbox = document.querySelectorAll('.imgbox')
const imgbx = document.querySelector('.imgbx')
const image = document.querySelectorAll('.image')


const remove = () => {
    for (let i = 0; i < imgbox.length; i++) {
        imgbox[i].classList.remove('active')
    }
}

const images = () => {
    for (let i = 0; i < image.length; i++) {
        if (i == count) {
            imgbx.innerHTML = `<img src="${count + 1}.jpg" alt="">`
        }
    }
}

let count = 0;

for (let i = 0; i < imgbox.length; i++) {
    imgbox[i].addEventListener('click', () => {
        count = i
        remove()
        images()
        imgbox[i].classList.add('active')
    })

}


