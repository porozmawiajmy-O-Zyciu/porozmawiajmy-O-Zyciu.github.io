let slideIndex = 0;
let bottomVisible = false;

function moveLeft() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');
    const bottomLeft = document.getElementById('bottom-left');
    const bottomRight = document.getElementById('bottom-right');
    
    if (bottomVisible) {
        bottomLeft.classList.add('hidden');
        bottomRight.classList.add('hidden');
        bottomVisible = false;
    } else {
        slideIndex = (slideIndex > 0) ? slideIndex - 1 : items.length - 3; // Zmiana indeksu
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}

function moveRight() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');
    const bottomLeft = document.getElementById('bottom-left');
    const bottomRight = document.getElementById('bottom-right');
    
    if (!bottomVisible) {
        bottomLeft.classList.remove('hidden');
        bottomRight.classList.remove('hidden');
        bottomVisible = true;
    } else {
        slideIndex = (slideIndex < items.length - 1) ? slideIndex + 1 : 0; // Zmiana indeksu
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}