let stars = document.querySelector('.circle-stars')
let button = document.querySelector('.round')
button.addEventListener('click', () =>
{
    stars.style.background='rgb(17, 19, 31)'

})


let atom = document.querySelector('.atom-ball-1')
let atom2 = document.querySelector('.atom-ball-2')
let atom3 = document.querySelector('.atom-ball-3')
let button2 = document.querySelector('.round-2')

button2.addEventListener('click', () =>
{
    atom.classList.add('atom-animation')
    atom2.classList.add('atom-animation')
    atom3.classList.add('atom-animation')
})


let rocket = document.querySelector('.container-rocket')
let button3 = document.querySelector('.round-3')
button3.addEventListener('click', () =>
{
    rocket.classList.add('rocket-animation')
})



