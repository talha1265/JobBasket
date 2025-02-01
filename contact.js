document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        
        // Simulate form data collection
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        // Fake submission process
        console.log("Submitting form...");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        
        // Simulate a delay for submission
        setTimeout(() => {
            alert("Your message has been sent successfully!");
            
            // Optionally clear the form
            document.querySelector("form").reset();
        }, 1000);
    });
});
