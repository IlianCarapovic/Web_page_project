import {getAllNichePerfumes} from "../api/get-all-niche-perfumes.js";
import {renderPerfumes} from "./render-perfumes.js";

document.addEventListener("DOMContentLoaded",loadAll);

async function loadAll(){
    const perfumes = await getAllNichePerfumes();
    renderPerfumes(perfumes,"products-container")
}