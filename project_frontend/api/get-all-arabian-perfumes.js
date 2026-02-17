export async function getAllArabianPerfumes(){
    const res = await fetch("http://localhost:3000/perfumes/arabian")
    return res.json();
}