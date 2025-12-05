export async function getAllDesignerPerfumes(){
    const res = await fetch("http://localhost:3000/perfumes/designer ")
    return res.json();
}