var form = document.getElementById('resume-form'); // form element
var resumeDisplay = document.getElementById('resume-Display'); // div to display resume
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload on form submit
    // Access form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value; // fixed typo here
    var contact = document.getElementById('contact').value;
    var dateOfBirth = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    // Access textarea fields (no need for type assertion here)
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHtml = "\n        <h2><b><u>Resume</u></b></h2>\n        <h3><b>Personal Information</b></h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>LinkedIn:</b> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n        <p><b>Contact:</b> ").concat(contact, "</p>\n        <p><b>Date Of Birth:</b> ").concat(dateOfBirth, "</p>\n        <div><strong>Gender:</strong> ").concat(gender, "</div>\n\n        \n    };\n\n        <h3><b>Education:</b></h3>\n        <div><ul><li>").concat(education, "</li></ul></div>\n\n        <h3><b>Experience:</b></h3>\n        <div><ul><li>").concat(experience, "</li></ul></div>\n\n        <h3><b>Skills:</b></h3>\n        <div><ul><li>").concat(skills, "</li></ul></div>\n    ");
    // Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error('Resume display section not found.');
    }
});
