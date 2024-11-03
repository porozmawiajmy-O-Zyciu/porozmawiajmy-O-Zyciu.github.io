document.addEventListener("DOMContentLoaded", function() {
    // Елементи з HTML
    var modal = document.getElementById("videoModal");
    var openModalBtn = document.getElementById("openModal");
    var closeModalBtn = document.getElementById("closeModal");
    var video = document.getElementById("localVideo");

    // Переконуємось, що модальне вікно приховане при завантаженні сторінки
    modal.style.display = "none";  

    // Функція для відкриття модального вікна при натисканні на кнопку
    openModalBtn.onclick = function() {
        modal.classList.remove('fade-out'); // Відновлення прозорості, якщо попередньо було закрито
        modal.style.display = "flex"; // Показуємо модальне вікно
        video.currentTime = 0; // Завжди починаємо відео з початку при відкритті модального вікна
        video.play(); // Відтворення відео після відкриття модального вікна
    }

    // Функція для закриття модального вікна при натисканні на хрестик
    closeModalBtn.onclick = function() {
        modal.classList.add('fade-out'); // Анімація закриття
        setTimeout(function() {
            modal.style.display = "none"; // Ховаємо модальне вікно після анімації
            video.pause(); // Зупиняємо відео при закритті
        }, 300); // Час збігається з анімацією закриття (0.3 секунди)
    }

    // Закриття модального вікна при кліку поза ним
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.add('fade-out'); 
            setTimeout(function() {
                modal.style.display = "none"; 
                video.pause(); 
            }, 300); 
        }
    }
});
