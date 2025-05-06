document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("nav-menu");
    const hamburger = document.getElementById("nav-ham");
    
    let isActive = false;
    
    hamburger.addEventListener("click", () => {
        if (!isActive) {
        container.classList.add("active");
        container.classList.remove("inactive");
        } else {
        container.classList.add("inactive");
        container.classList.remove("active");
        }
        isActive = !isActive;
        hamburger.classList.toggle("active");
    });
    
    const form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const serverIDInput = document.querySelector("#serverID");
        const descriptionInput = document.querySelector("#description");
    
        if (!nameInput || !emailInput || !serverIDInput || !descriptionInput) {
            alert("Form element(s) not found. Please check your HTML IDs.");
            return;
        }
    
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const serverID = serverIDInput.value.trim();
        const description = descriptionInput.value.trim();
    
        if (!name || !email || !serverID || !description) {
            alert("Please fill out all fields.");
            return;
        }
    
        console.log("Bug Report Submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Server ID:", serverID);
        console.log("Description:", description);
    
        alert("Bug report submitted successfully!");
        form.reset();
        });
    } else {
        console.error("Form not found in the DOM.");
    }
    });