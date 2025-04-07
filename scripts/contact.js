function initContactForm() {
    const form = document.getElementById("mail");

    if (!form) {
        console.warn("⏳ Form not ready yet. Retrying...");
        setTimeout(initContactForm, 300); // Keep retrying every 300ms
        return;
    }

    emailjs.init("2JkUpaGCr2du8Qvw5"); // Replace with your public key

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_qf6n0gv", "template_tzp68ua", form)
            .then(() => {
                alert("✅ Message sent successfully!");
                form.reset();
            })
            .catch((error) => {
                console.error("❌ Email send failed:", error);
                alert("Oops! Something went wrong while sending your message. Please try again later.");
            });
    });
}

document.addEventListener("DOMContentLoaded", initContactForm);
