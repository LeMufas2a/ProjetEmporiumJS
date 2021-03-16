let myButton = [...document.querySelectorAll('.myButton')]
let myBilly = document.querySelector('.myBilly')

myButton.forEach(e => {
    e.addEventListener('click', (e) => {
        let i = myButton.indexOf(e.target)
        myBilly.style.transform = `translateX(-${i * 25}%)`
        myBilly.style.transition = `1s`
    })
});
