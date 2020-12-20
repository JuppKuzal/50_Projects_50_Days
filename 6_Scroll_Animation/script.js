const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerbottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // get position of an element on the website
        const boxTop = box.getBoundingClientRect().top
        
        if (boxTop < triggerbottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}