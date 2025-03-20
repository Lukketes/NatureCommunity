// Script do Carrossel
let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector(".carousel-inner");
    const totalSlides = document.querySelectorAll(".carousel-item").length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Iniciar o carrossel automaticamente (opcional)
setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos

// Script para abrir/fechar os filtros
document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.getElementById("filterButton");
    const filterDetails = document.getElementById("filterDetails");

    filterButton.addEventListener("click", function () {
        filterDetails.classList.toggle("show");
    });
});