export { signUp, register, sign, regis }
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