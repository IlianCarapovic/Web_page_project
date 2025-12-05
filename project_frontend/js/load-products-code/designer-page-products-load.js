import { getAllDesignerPerfumes } from "../../api/get-all-designer-perfumes.js";
import {renderPerfumes} from "../render-perfumes.js";

document.addEventListener("DOMContentLoaded", loadAll);

async function loadAll(){
    const perfumes = await getAllDesignerPerfumes();
    renderPerfumes(perfumes,"products-container")
}