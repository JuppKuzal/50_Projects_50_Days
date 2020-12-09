const panels = document.querySelectorAll('.panel')

//loop through panels
panels.forEach((panel) => {
    //add an mouseover (=hover) EventListener to each of them
    panel.addEventListener('mouseover', () => {
        //remove the CSS class "active" from all cards
        removeActiveClasses()
        //add the CSS class "active" on hover
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}