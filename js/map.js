const container = document.getElementById("nav-menu");
const hamburger = document.getElementById("nav-ham")

var isActive = false;
hamburger.addEventListener("click", () =>{
    if (!isActive){
        container.classList.add("active");
        container.classList.remove("inactive");
        isActive = !isActive;
    }else{
        container.classList.add("inactive");
        container.classList.remove("active");
        isActive = !isActive;
    }

    hamburger.classList.toggle("active");
});