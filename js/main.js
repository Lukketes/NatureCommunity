document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // Abrir/Fechar Menu Suspenso
    menuIcon.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    // Fechar Menu ao Clicar Fora
    document.addEventListener("click", function (e) {
        if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});