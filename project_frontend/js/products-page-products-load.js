import {getAllPerfumes} from "../api/get-all-perfumes.js";
import {renderPerfumes} from "./render-perfumes.js";

document.addEventListener("DOMContentLoaded",loadAll);

async function loadAll(){
    const perfumes = await getAllPerfumes();
    renderPerfumes(perfumes,"products-container")
}