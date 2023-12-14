document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuModal = document.querySelector(".menu-modal");

    menuToggle.addEventListener("click", function () {
        menuModal.classList.toggle("show");
    });
});
