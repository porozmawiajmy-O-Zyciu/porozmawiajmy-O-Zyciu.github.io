// Получаем элементы
const modal = document.getElementById("videoModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const youtubeVideo = document.getElementById("youtubeVideo");

// Функция для открытия модального окна и загрузки видео
openModalBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Отмена стандартное действие ссылки
    modal.style.display = "block"; // Показать модальное окно
    youtubeVideo.src = "https://www.youtube.com/watch?v=TalgHWd550w";
});

// Функция для закрытия модального окна
closeModalBtn.addEventListener('click', function() {
    modal.style.display = "none"; // СкрЬІть модальное окно
    youtubeVideo.src = ""; // Остановить видео
});

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        youtubeVideo.src = ""; // Остановить видео
    }
});
