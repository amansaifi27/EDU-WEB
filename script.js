// Sets course name in form input
function enroll(courseName) {
    document.getElementById("selectedCourse").value = courseName;
    document.getElementById("enrollSection").scrollIntoView({ behavior: "smooth" });
  }
  
  // Handles form submission
  function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById("studentName").value;
    const email = document.getElementById("studentEmail").value;
    const course = document.getElementById("selectedCourse").value;
  
    // Basic confirmation message
    alert(`🎉 Thank you, ${name}!\nYou have successfully enrolled in "${course}".\nConfirmation sent to: ${email}`);
  
    // Reset form
    event.target.reset();
  }
  