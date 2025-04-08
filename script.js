// Show the form based on the selected service
function showForm(serviceName) {
    const formContainer = document.getElementById("service-form");
    const serviceInput = document.getElementById("service");
    serviceInput.value = serviceName;
    formContainer.style.display = "block";
}

// Handle form submission
document.getElementById("serviceRequestForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    this.reset();
    document.getElementById("service-form").style.display = "none";
});
