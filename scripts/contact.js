// scripts/contact.js

document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    emailjs.init("2JkUpaGCr2du8Qvw5"); // Replace with your public key from EmailJS
  
    const form = document.getElementById("mail");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      emailjs.sendForm("service_qf6n0gv", "template_tzp68ua", form)
        .then(() => {
          alert("Message sent successfully!");
          form.reset();
        })
        .catch((error) => {
          console.error("Email send failed:", error);
          alert("Oops! Something went wrong.");
        });
    });
  });
  