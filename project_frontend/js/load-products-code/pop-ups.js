document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modal");

    const modalTitle = document.getElementById("modal-title");
    const modalImg = document.getElementById("modal-img");
    const modalDesc = document.getElementById("modal-desc");

    const modalTopNotes = document.getElementById("top-notes");
    const modalMiddleNotes = document.getElementById("middle-notes");
    const modalBaseNotes = document.getElementById("base-notes");

    const sillageSlider = document.getElementById("sillage-slider");
    const sillageValue = document.getElementById("sillage-value");

    const longevitySlider = document.getElementById("longevity-slider");
    const longevityValue = document.getElementById("longevity-value");

    const closeButton = document.getElementById("close");

    function updateSliderFill(slider) {
        const value = slider.value;
        const max = slider.max;
        const percent = (value / max) * 100;
        slider.style.background = `linear-gradient(to right, red ${percent}%, #ddd ${percent}%)`;
    }

    window.attachPopupListeners = function () {
        const buttons = document.querySelectorAll(".perfume-btn");

        buttons.forEach(button => {
            button.addEventListener("click", () => {

                modalTitle.textContent = button.dataset.title;
                modalImg.src = button.dataset.img;
                modalDesc.textContent = button.dataset.desc;

                modalTopNotes.textContent = button.dataset.top;
                modalMiddleNotes.textContent = button.dataset.middle;
                modalBaseNotes.textContent = button.dataset.base;

                sillageSlider.value = button.dataset.sillage ?? 1;
                sillageValue.textContent = sillageSlider.value;
                updateSliderFill(sillageSlider);

                longevitySlider.value = button.dataset.longevity ?? 1;
                longevityValue.textContent = longevitySlider.value;
                updateSliderFill(longevitySlider);

                modal.classList.add("open");
            });
        });
    };

    closeButton.addEventListener("click", () => {
        modal.classList.remove("open");
    });
});
