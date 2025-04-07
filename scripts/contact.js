// scripts/contact.js
function initContactForm() {
    emailjs.init("2JkUpaGCr2du8Qvw5"); // replace with your EmailJS public key

    const form = document.getElementById("contact-form");
    if (!form) {
        console.warn("Contact form not found");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_qf6n0gv", "template_tzp68ua", form)
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            }, (error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send message. Please try again later.");
            });
    });
}

// Expose it to global scope
window.initContactForm = initContactForm;