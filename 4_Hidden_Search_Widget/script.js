const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    //make active if it isnt
    search.classList.toggle('active')
    //select the input if it isnt
    input.focus()
})