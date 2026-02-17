import {getAllArabianPerfumes} from "../../api/get-all-arabian-perfumes.js";
import {renderPerfumes} from "./render-perfumes.js";

document.addEventListener("DOMContentLoaded",loadAll)

async function loadAll(){
    const perfumes = await getAllArabianPerfumes()
    renderPerfumes(perfumes,"products-container")
}
