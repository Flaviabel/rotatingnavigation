let mover = document.getElementById('open')
let container = document.querySelector('.container')
let volver = document.getElementById('close')
let content= document.querySelectorAll('content')

mover.addEventListener('click', () =>
    container.classList.add('rotacion'),
)

volver.addEventListener('click', () =>
    container.classList.remove('rotacion')
)
