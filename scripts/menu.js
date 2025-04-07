// 🟢 Open Side Navigation
function openNav() {
    document.getElementById("sideNavigation").style.width = "200px";
}

// 🟢 Close Side Navigation
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
}

// 🟢 Function to Load Page Content Dynamically
function loadContent(page) {
    fetch(`${page}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Page ${page} not found`);
            }
            return response.text();
        })
        .then(data => {
            // Load the HTML content into the main container
            document.getElementById("main-content").innerHTML = data;

            // Scroll to top
            window.scrollTo(0, 0);

            // Hide dropdowns if open
            hideSubmenu();

            // Remove active classes from nav links and submenu
            document.querySelectorAll(".topnav a, .sidenav a, #mini-menu .mini-link, .submenu a")
                .forEach(link => link.classList.remove("active", "active-submenu"));

            // Highlight the correct main nav link (if it exists)
            document.querySelectorAll(`[onclick*="loadContent('${page}')"]`)
                .forEach(link => link.classList.add("active"));

            // ✅ Always activate the UX submenu if page is one of the UX case studies
            const uxPages = [
                "prtf_ux",
                "prtf_ux01_SweetBakery",
                "prtf_ux02_TDesign",
                "prtf_ux03_HealthyPatterns"
            ];
            if (uxPages.includes(page)) {
                const uxLink = document.getElementById("submenu-ux");
                if (uxLink) {
                    uxLink.classList.add("active-submenu");
                }
            }
            if (uxPages.includes(page)) {
                const uxLink = document.getElementById("submenu-ux-side");
                if (uxLink) {
                    uxLink.classList.add("active-submenu");
                }
            }

            // ✅ Always activate the Data submenu if page is one of the Data case studies
            const prtfPages = [
                "prtf_dt01_ImpactCollision",
                "prtf_dt02_LanguageIdentifier"
            ];
            if (prtfPages.includes(page)) {
                const prtfLink = document.getElementById("submenu-data");
                if (prtfLink) {
                    prtfLink.classList.add("active-submenu");
                }
            }
            if (prtfPages.includes(page)) {
                const prtfLink = document.getElementById("submenu-data-side");
                if (prtfLink) {
                    prtfLink.classList.add("active-submenu");
                }
            }
        })
        .catch(error => {
            console.error('Error loading content:', error);
            document.getElementById("main-content").innerHTML = `<h2>Page not found</h2>`;
        });

    // Close the sidenav if mobile
    closeNav();
}

// Function to Load Home Page on First Load
function initializePage() {
    loadContent('home'); // Load home page content
    document.querySelector(`[onclick="loadContent('home')"]`).classList.add("active");
}

// Run initializePage() after the document loads
document.addEventListener("DOMContentLoaded", initializePage);

document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname.split("/").pop(); // Get current page filename

    // Map each page to its corresponding link ID
    let pageMap = {
        "home.html": "homeLink",
        "about.html": "aboutLink",
        "prtf_ux.html": "portfolioLink",
        "contact.html": "contactLink"
    };

    // Find the matching link and add the "active" class
    if (pageMap[path]) {
        document.getElementById(pageMap[path]).classList.add("active");
    }
});

// 🟢 Function to swap icons
function swapIcon(element, imagePath) {
    element.src = imagePath; // Change only the hovered image
}

