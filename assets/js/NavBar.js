export { myNav, myMt, myDiv, h1}
let myNav = document.querySelector('nav')
let myMt = document.querySelector('.myNav')
let myDiv = myNav.querySelector("div")
let h1 = document.querySelector('h1')
h1.style.fontSize = ('50px')
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        myNav.classList.remove("mt-5")
        myDiv.classList.remove("flex-column")
        myMt.classList.remove("mt-5")
        myDiv.classList.remove("pt-5")
        myNav.classList.add("fixed-top")
        myNav.classList.add("w-100")
        myNav.style.transition = "1s"
        h1.style.fontSize = ('25px')
        h1.classList.remove("mt-5")

    } else {
        myNav.classList.add("mt-5")
        myDiv.classList.add("flex-column")
        myMt.classList.add("mt-5")
        myDiv.classList.add("pt-5")
        myNav.classList.remove("fixed-top")
        myNav.style.transition = "1s"
        h1.style.fontSize = ("50px")
    }
})