const projects = document.querySelector("#projects");
const aboutMe = document.querySelector("#about-me");
const contact = document.querySelector("#contact");
const nameWinfred = document.querySelector(".nameWinfred");
const nameEffects1 = document.querySelector(".nameEffects1");
const nameEffects2 = document.querySelector(".nameEffects2");
const aboutMeContainer = document.querySelector("#aboutMeContainer");
const projectsContainer = document.querySelector("#projectsContainer");
const navBar = document.querySelector("#navBar");
const navUl = document.querySelector("#navUl");


projects.addEventListener("click", goToProjects);
aboutMe.addEventListener("click", goToAboutMe);
contact.addEventListener("click", goToContact);
window.addEventListener("scroll", backgroundChange);

a = 255;

// ///////////////////////////////////////////////////////
function goToAboutMe () {
    window.scrollTo({
        top: 0,
    })
    nameWinfred.classList.toggle("nameWinfred2");
    nameWinfred.classList.toggle("nameWinfred");
    nameEffects1.classList.toggle("nameEffects1");
    nameEffects1.classList.toggle("nameEffects2");
    nameEffects2.classList.toggle("nameEffects2");
    nameEffects2.classList.toggle("nameEffects1");
    
}
function goToProjects () {
    x = projectsContainer.offsetTop;
    window.scrollTo({
        top: x,
    })
}
function goToContact () {
    x = 0;
    x = contactContainer.offsetTop;
    window.scrollTo({
        top: x,
    })
}
///////////////////////////////////////////////////////

function backgroundChange () {
    x = window.pageYOffset;
    y = window.pageYOffset;
    a = a - 5;
    b = 255;
    h = aboutMeContainer.offsetTop / 2;
    if (window.scrollY < h) {
        navUl.style = "background-color: rgb("+b+","+b+","+b+")";
        nameWinfred.classList.toggle("nameWinfred2");
        nameWinfred.classList.toggle("nameWinfred");
        nameEffects1.classList.toggle("nameEffects1");
        nameEffects1.classList.toggle("nameEffects2");
        nameEffects2.classList.toggle("nameEffects2");
        nameEffects2.classList.toggle("nameEffects1");
        
    }
    if (window.scrollY > h && window.scrollY <= projectsContainer.offsetTop) {
        projectsContainer.style = "background-color: rgb("+a+","+a+","+a+")";
        navUl.style = "background-color: rgb("+a+","+a+","+a+")";
    }
}

///////////////////////////////////////////////////////

