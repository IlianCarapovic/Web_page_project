export async function getAllNichePerfumes(){
    const res = await fetch("http://localhost:3000/perfumes/perfumes/niche")
    return res.json();
}