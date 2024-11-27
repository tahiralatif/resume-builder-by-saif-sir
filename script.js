let educationContainer = document.querySelector(".education-container")
let addEducationBtn = document.querySelector(".add-education")

addEducationBtn.addEventListener("click", ()=>{
    let educationField = document.createElement("textarea")
    educationField.setAttribute("placeholder", "Education")
    educationField.setAttribute("class", "educationField")
    educationField.setAttribute("rows", "10")
    educationField.setAttribute("cols", "60")

    educationContainer.prepend(educationField)


})
let experienceContainer = document.querySelector(".experience-container")
let addExperienceBtn = document.querySelector(".add-experience")

addExperienceBtn.addEventListener("click", ()=>{
    let experienceField = document.createElement("textarea")
    experienceField.setAttribute("placeholder", "Experience")
    experienceField.setAttribute("class", "experienceField")
    experienceField.setAttribute("rows", "10")
    experienceField.setAttribute("cols", "60")

    experienceContainer.prepend(experienceField)


})


// generate resume button click krna hy ✅
// form ka sara data utana hy ✅
// resume mai data dalna hy ✅
// form ko hide krna hy ✅
// then resume ko show krna hy ✅

document.querySelector(".generate-resume").addEventListener("click", ()=>{
    let name = document.querySelector(".nameField").value
    let title = document.querySelector(".titleField").value
    let linkedin = document.querySelector(".linkedinField").value
    let facebook = document.querySelector(".facebookField").value
    let twitter = document.querySelector(".twitterField").value
    let portfolio = document.querySelector(".PortfolioField").value
    let aboutme = document.querySelector(".about-meField").value
    let skills = document.querySelector(".skillsField").value
   
    let skillsArray = skills.split(",");

   
    // education

    let education = document.querySelectorAll(".educationField")
    let educationString = ""
    education.forEach(element => {
        educationString += `<p>✨ ${element.value}</p>`
    });
    let experience = document.querySelectorAll(".experienceField")
    let experienceString = ""
    education.forEach(element => {
        experienceString += `<p>✨ ${element.value}</p>`
    });

   
    
    document.querySelector(".linkedin").setAttribute("href", linkedin)
    document.querySelector(".facebook").setAttribute("href", facebook)
    document.querySelector(".twitter").setAttribute("href", twitter)
    document.querySelector(".portfolio").setAttribute("href", portfolio)
    
   let skillsContainer = document.querySelector(".skills")

   let mySkills = ""
   skillsArray.forEach(element => {
    mySkills += ` <div class="skill-item">${element}</div>`
   });

   skillsContainer.innerHTML = mySkills

   document.querySelector(".name").innerHTML = name;
   document.querySelector(".title").innerHTML = title;
   document.querySelector(".experience").innerHTML = experienceString;
   document.querySelector(".education").innerHTML = educationString;
   document.querySelector(".about-me").innerHTML = aboutme;

   document.querySelector(".form").style.display = "none"
   document.querySelector(".resume-container").style.display = "flex"
   document.querySelector(".generate-resume").style.display = "none"
    
})

document.querySelector(".download-resume").addEventListener("click", ()=>{

    const element = document.querySelector('.resume-container');
const opt = {
  margin:       1,
  filename:     'myfile.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};
 
// New Promise-based usage:
html2pdf().from(element).set(opt).save();
 
// // Old monolithic-style usage:
// html2pdf(element, opt);
})