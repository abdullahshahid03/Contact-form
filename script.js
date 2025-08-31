document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  // Create a message container
  const messageBox = document.createElement("div");
  messageBox.id = "formMessage";
  form.prepend(messageBox);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset message box
    messageBox.style.display = "none";
    messageBox.textContent = "";
    messageBox.className = "";

    // Validation
    if (!name || !email || !subject || !message) {
      showMessage("⚠️ All fields are required!", "error");
      return;
    }

    if (!emailRegex.test(email)) {
      showMessage("❌ Please enter a valid email address!", "error");
      return;
    }

    // If passed validation
    showMessage("✅ Form submitted successfully!", "success");
    form.reset();
  });

  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.style.display = "block";
    messageBox.className = type === "success" ? "success-box" : "error-box";
  }
});
