const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }

    });

},{
    threshold:0.25
});

const elements=document.querySelectorAll(
".home-content,.about-container,.profile-photo,.about-text,.project-card,.contact-form"
);

elements.forEach((el)=>{
    observer.observe(el);
});

const roles = [
    "Computer Science Student",
    "Web Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect(){

    const current = roles[roleIndex];

    if(!deleting){

        typingText.textContent = current.substring(0, charIndex++);
        
        if(charIndex > current.length){
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    }else{

        typingText.textContent = current.substring(0, charIndex--);

        if(charIndex < 0){
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect(); 

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[name="from_name"]').value;
    const email = contactForm.querySelector('input[name="from_email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    const subject = `Portfolio Contact from ${name}`;

    const body = `Hello Astha,

Name: ${name}
Email: ${email}

Message:
${message}`;

    const mailtoLink =
        `mailto:asthaarya42@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});