// this is more optimize and reusable script.

// Mtlb ye kh ye script.js ki trha ii hy bas ye tora optimize version hy

// Function to create and add new text areas
function addField(containerSelector, placeholderText, fieldClass) {
    const container = document.querySelector(containerSelector);
    const field = document.createElement("textarea");
    field.setAttribute("placeholder", placeholderText);
    field.setAttribute("class", fieldClass);
    field.setAttribute("rows", "10");
    field.setAttribute("cols", "60");
    container.prepend(field);
}

// Add event listeners for education and experience fields
document.querySelector(".add-education").addEventListener("click", () => {
    addField(".education-container", "Education", "educationField");
});

document.querySelector(".add-experience").addEventListener("click", () => {
    addField(".experience-container", "Experience", "experienceField");
});

// Generate Resume
document.querySelector(".generate-resume").addEventListener("click", () => {
    // Collect form data
    const name = document.querySelector(".nameField").value;
    const title = document.querySelector(".titleField").value;
    const linkedin = document.querySelector(".linkedinField").value;
    const facebook = document.querySelector(".facebookField").value;
    const twitter = document.querySelector(".twitterField").value;
    const portfolio = document.querySelector(".PortfolioField").value;
    const aboutMe = document.querySelector(".about-meField").value;
    const skills = document.querySelector(".skillsField").value.split(",");

    // Generate Education and Experience Strings
    const generateFieldString = (fieldSelector) => {
        const fields = document.querySelectorAll(fieldSelector);
        return Array.from(fields).map(field => `<p>✨ ${field.value}</p>`).join("");
    };

    const educationString = generateFieldString(".educationField");
    const experienceString = generateFieldString(".experienceField");

    // Update Resume Fields
    document.querySelector(".linkedin").setAttribute("href", linkedin);
    document.querySelector(".facebook").setAttribute("href", facebook);
    document.querySelector(".twitter").setAttribute("href", twitter);
    document.querySelector(".portfolio").setAttribute("href", portfolio);
    document.querySelector(".name").innerHTML = name;
    document.querySelector(".title").innerHTML = title;
    document.querySelector(".about-me").innerHTML = aboutMe;
    document.querySelector(".education").innerHTML = educationString;
    document.querySelector(".experience").innerHTML = experienceString;

    // Update Skills
    const skillsContainer = document.querySelector(".skills");
    skillsContainer.innerHTML = skills.map(skill => `<div class="skill-item">${skill.trim()}</div>`).join("");

    // Show Resume and Hide Form
    document.querySelector(".form").style.display = "none";
    document.querySelector(".resume-container").style.display = "flex";
    document.querySelector(".generate-resume").style.display = "none";
});

// Download Resume as PDF
document.querySelector(".download-resume").addEventListener("click", () => {
    const element = document.querySelector(".resume-container");
    const options = {
        margin: 1,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
});
