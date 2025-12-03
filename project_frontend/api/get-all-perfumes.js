export async function getAllPerfumes(){
    const res = await fetch("http://localhost:3000/perfumes")
    return res.json();
}