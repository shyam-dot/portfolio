// Simulate form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name && email && subject && message) {
        alert(`✅ Message Sent!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
        document.getElementById("contact-form").reset();
    } else {
        alert("⚠️ Please fill out all fields.");
    }
});

//-----------------------------------------------------------------------------------------------------------------------------
