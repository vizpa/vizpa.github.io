// 🟢 Function for the top navigation submenu
function toggleTopSubmenu(event) {
    event.preventDefault();
    event.stopPropagation(); // stop it from closing immediately

    const submenu = document.getElementById("portfolio-submenu");
    

    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";

    if (submenu.style.display === "block") {
        document.addEventListener("click", function closeMenu(e) {
            if (!e.target.closest('.dropdown')) {
                submenu.style.display = "none";
                document.removeEventListener("click", closeMenu);
            }
        });
    }
}


// 🟢 Function for the side navigation submenu
function toggleSideSubmenu(event) {
    event.preventDefault();
    event.stopPropagation(); // stop it from closing immediately

    const submenu = document.getElementById("side-portfolio-submenu");

    // Toggle the submenu visibility
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";

    // Close the submenu when clicking outside (only if submenu is open)
    if (submenu.style.display === "block") {
        document.addEventListener("click", function closeMenu(e) {
            if (!e.target.closest('.dropdown')) {
                submenu.style.display = "none";
                document.removeEventListener("click", closeMenu);  // Remove the event listener after closing
            }
        });
    }
}

// 🟢 Function to hide the submenu
function hideSubmenu() {
    const submenu = document.getElementById("portfolio-submenu");
    if (submenu) {
        submenu.style.display = "none";  // Hide the submenu
    }
}
