// show menu
const menuBtn = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')
const navCloseBtn = document.getElementById('nav-close')


menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')
})

navCloseBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')

})