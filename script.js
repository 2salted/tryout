let currentStep = 0;
const form = document.getElementById("myForm");
const fieldsets = form.getElementsByTagName("fieldset");

function showStep(step) {
  for (let i = 0; i < fieldsets.length; i++) {
    fieldsets[i].style.display = "none";
  }
  fieldsets[step].style.display = "block";
}

function nextStep() {
  if (currentStep < fieldsets.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // You can customize the success and error messages below

  // Success message
  const successMessage = document.createElement("p");
  successMessage.textContent = "Form submitted successfully!";
  document.body.appendChild(successMessage);

  // Error message
  const errorMessage = document.createElement("p");
  errorMessage.textContent = "Form submission failed!";
  document.body.appendChild(errorMessage);

  // Submit the form data using FormSubmit
  fetch(event.target.action, {
    method: "POST",
    body: new FormData(event.target),
  })
    .then(function (response) {
      if (response.ok) {
        // Show success message
        successMessage.style.display = "block";
        form.reset();
      } else {
        // Show error message
        errorMessage.style.display = "block";
      }
    })
    .catch(function (error) {
      // Show error message
      errorMessage.style.display = "block";
      console.error(error);
    });
});

// Show the first step initially
showStep(currentStep);
