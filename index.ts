const form = document.getElementById('resume-form') as HTMLFormElement;  // form element
const resumeDisplay = document.getElementById('resume-Display') as HTMLDivElement;  // div to display resume

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();   // prevent page reload on form submit

    // Access form values
    const name = (document.getElementById('name')as HTMLInputElement).value;
    const email = (document.getElementById('email')as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin')as HTMLInputElement).value;  // fixed typo here
    const contact = (document.getElementById('contact')as HTMLInputElement).value;
    const dateOfBirth = (document.getElementById('dob')as HTMLInputElement).value;
    const gender = (document.getElementById('gender')as HTMLInputElement).value;

    // Access textarea fields (no need for type assertion here)
    const education = (document.getElementById('education')as HTMLInputElement).value;
    const experience = (document.getElementById('experience')as HTMLInputElement).value;
    const skills = (document.getElementById('skills')as HTMLInputElement).value;


    
    // Generate the resume content dynamically
    const resumeHtml = `
        <h2><b><u>Resume</u></b></h2>
        <h3><b>Personal Information</b></h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>LinkedIn:</b> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <p><b>Contact:</b> ${contact}</p>
        <p><b>Date Of Birth:</b> ${dateOfBirth}</p>
        <div><strong>Gender:</strong> ${gender}</div>


        <h3><b>Education:</b></h3>
        <div>${education}</div>

        <h3><b>Experience:</b></h3>
        <div>${experience}</div>

        <h3><b>Skills:</b></h3>
        <div>${skills}</div>
    `;

    // Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    } else {
        console.error('Resume display section not found.');
    }
});
