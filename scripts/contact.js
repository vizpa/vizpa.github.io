function initContactForm() {
    const form = document.getElementById("mail");

    if (!form) {
        console.warn("⏳ Form not ready yet. Retrying...");
        setTimeout(initContactForm, 300); // Retry until form is available
        return;
    }

    // Initialize EmailJS
    emailjs.init("2JkUpaGCr2du8Qvw5"); // Your public key

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_qf6n0gv", "template_tzp68ua", form)
            .then(() => {
                alert("✅ Thanks for reaching out!\n\nYour message was sent successfully. I’ll get back to you within 3 business days.");
                
                // Optional: Clear the form fields
                form.reset();

                // Redirect or load home content
                loadContent("home"); // If you're using SPA-style routing
                // window.location.href = "home.html"; // If you want a hard redirect
            })
            .catch((error) => {
                console.error("❌ Email send failed:", error);
                alert("Oops! Something went wrong while sending your message. Please try again later.");
            });
    });
}

// Wait for full DOM and potentially dynamically loaded form
document.addEventListener("DOMContentLoaded", initContactForm);
