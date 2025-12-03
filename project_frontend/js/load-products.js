document.addEventListener("DOMContentLoaded", loadPerfumes);

async function loadPerfumes() {
    const container = document.getElementById("products-container");

    const res = await fetch("http://localhost:3000/perfumes");
    const perfumes = await res.json();

    container.innerHTML = "";

    perfumes.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        const filename = p.image_path;
        let imgURL;

        if (
            /^[a-zA-Z0-9-_]+\.(jpg|jpeg|png|webp|avif)$/i.test(filename)
            && !filename.includes("/")
        ) {
            // Backend-uploaded image
            imgURL = `http://localhost:3000/uploads/perfumes/${filename}`;
        }
        else {
            // Frontend image (relative path)
            imgURL = `../${filename}`;
        }

        card.innerHTML = `
            <button class="perfume-btn"
                data-title="${p.name}"
                data-img="${imgURL}"
                data-desc="${p.description}"
                data-sillage="${p.sillage_value}"
                data-longevity="${p.longevity_value}"
                data-top="${p.top_notes}"
                data-middle="${p.middle_notes}"
                data-base="${p.base_notes}">
                <img src="${imgURL}" class="image">
            </button>
        `;

        container.appendChild(card);
    });

    attachPopupListeners();
}
