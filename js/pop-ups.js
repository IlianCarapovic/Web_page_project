const openButtons = document.querySelectorAll(".perfume-btn");
const closeButton = document.getElementById("close");
const modal = document.getElementById("modal");

const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");

openButtons.forEach(button => {
    button.addEventListener("click", () => {
        modalTitle.textContent = button.dataset.title;
        modalImg.src = button.dataset.img;
        modalDesc.textContent = button.dataset.desc;

        modal.classList.add("open");
    });
});

closeButton.addEventListener("click", () => {
    modal.classList.remove("open");
});
