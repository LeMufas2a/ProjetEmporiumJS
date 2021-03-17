// Caroussel
import { myButton, myBilly } from "./Caroussel.js"
import { dayNight, day, night, body, a, burger } from "./DayDark.js"
import { myNav, myMt, myDiv, h1 } from "./NavBar.js"

let signUp = document.querySelector('.mySign')
let register = document.querySelector('.myRegister')
let sign = document.querySelector('.myS')
let regis = document.querySelector('.myR')

register.style.visibility = 'hidden'

sign.addEventListener('click', () => {
    register.style.visibility = 'hidden'
    signUp.style.visibility = 'visible'
})

regis.addEventListener('click', () => {
    signUp.style.visibility = 'hidden'
    register.style.visibility = 'visible'
})