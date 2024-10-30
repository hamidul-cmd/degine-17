const hamburger = document.querySelector(".hamburger");
const navmanu = document.querySelector(".nav-manu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navmanu.classList.toggle("active");
    document.body.classList.toggle("no-scroll")
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navmanu.classList.remove("active");
    document.body.classList.remove("no-scroll")
}))