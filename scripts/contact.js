function initContactForm() {
    console.log("🔧 initContactForm is running...");

    emailjs.init("2JkUpaGCr2du8Qvw5"); // replace with actual key

    const form = document.getElementById("contact-form");
    if (!form) {
        console.warn("⚠️ Form not found");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        console.log("📨 Form submitted");

        emailjs.sendForm("service_qf6n0gv", "template_tzp68ua", form)
            .then(() => {
                alert("✅ Message sent successfully!");
                form.reset();
            }, (error) => {
                console.error("❌ EmailJS error:", error);
                alert("Failed to send message.");
            });
    });
}

// 👇 make sure it's globally accessible
window.initContactForm = initContactForm;
