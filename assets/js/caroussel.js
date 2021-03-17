export { myButton, myBilly }
let myButton = [...document.querySelectorAll('.myButton')]
let myBilly = document.querySelector('.myBilly')
myButton.forEach(e => {
    e.addEventListener('click', (e) => {
        let i = myButton.indexOf(e.target)
        myBilly.style.transition = `1s`
        if (window.matchMedia("(max-width: 600px)").matches) {
            myBilly.style.transform = `translateX(-${i * 100}%)`
        } else {
            myBilly.style.transform = `translateX(-${i * 25}%)`
        }
    })
});


