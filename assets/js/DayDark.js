export { dayNight, day, night, body, a, burger }
let dayNight = document.querySelectorAll('.myLight')
let day = dayNight[0]
let night = dayNight[1]
let body = document.querySelector('body')
let a = document.querySelectorAll('.myA')
let burger = document.querySelector('.navbar-toggler')
let myNav = document.querySelector('nav')
myNav.style.backgroundColor = 'white'
let footer = document.querySelector('footer')
footer.style.backgroundColor = '#353a40'

night.addEventListener('click', () => {
    body.style.backgroundColor = "black"
    body.style.color = "white"
    burger.style.backgroundColor = "white"
    a.forEach(element => {
        element.style.color = "white"
        myNav.style.backgroundColor = 'black'
    });
    footer.style.backgroundColor = 'black'
})

day.addEventListener('click', () => {
    body.style.backgroundColor = "white"
    body.style.color = "black"
    burger.style.backgroundColor = "white"
    a.forEach(element => {
        element.style.color = "black"
    });
    myNav.style.backgroundColor = 'white'
    footer.style.backgroundColor = '#353a40'
})
