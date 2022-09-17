const container = document.querySelector('.container'),
displayOn = document.querySelector('.display');

container.addEventListener('click', () => {
    container.classList.toggle('active');
    displayOn.classList.toggle('active');
})

