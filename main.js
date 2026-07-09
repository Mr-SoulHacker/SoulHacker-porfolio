/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})

sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*===== SCROLL SKILLS =====*/

sr.reveal('.section-title', {
    origin: 'top',
    distance: '30px'
});

sr.reveal('.skills__desc', {
    origin: 'top',
    distance: '30px',
    delay: 200
});

sr.reveal('.skill__card', {
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 300,
    interval: 150
});
/*SCROLL PORTFOLIO*/
// sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})


function openPDF() {
    window.open('Baranidharan jaisankar.pdf', '_blank');}

const roles = [
    "Java Developer",
    "Spring Boot Developer",
    "Software Engineer",
    "Backend Engineer",
    "Cloud Engineer",
    "REST API Developer",
    "Database Designer",
    "Tech Enthusiast"
];

const role = document.getElementById("role");

let index = 0;

setInterval(() => {

    // Fade out
    role.classList.add("fade");

    setTimeout(() => {

        // Change text
        index = (index + 1) % roles.length;
        role.textContent = roles[index];

        // Fade back in
        role.classList.remove("fade");

    },450);

},1500);
// Title
sr.reveal('.home__title', {
    origin: 'left',
    distance: '80px',
    duration: 1200
});

// Profession
sr.reveal('.home__profession', {
    origin: 'left',
    distance: '80px',
    duration: 1200,
    delay: 250
});

// Description
sr.reveal('.home__description', {
    origin: 'left',
    distance: '80px',
    duration: 1200,
    delay: 450
});

// Button
sr.reveal('.home__button', {
    origin: 'left',
    distance: '80px',
    duration: 1200,
    delay: 650
});

// Laptop Image
sr.reveal('.home__img', {
    origin: 'right',
    distance: '120px',
    duration: 1600,
    delay: 400,
    scale: 0.9
});
role.classList.add("fade");

setTimeout(() => {
    role.textContent = roles[index];
    role.classList.remove("fade");
}, 450);



const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor(){

    currentX += (mouseX - currentX) * 0.25;
    currentY += (mouseY - currentY) * 0.25;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();



const hoverItems = document.querySelectorAll(
    "a, button, .button, img"
);

hoverItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.width = "38px";
        cursor.style.height = "38px";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.width = "18px";
        cursor.style.height = "18px";

    });

});




const buttons = document.querySelectorAll(".magnetic-btn");

buttons.forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect=button.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        button.style.setProperty("--x",`${x}px`);
        button.style.setProperty("--y",`${y}px`);

    });

});





const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 18;
        const rotateX = (rect.height / 2 - y) / 18;

        card.style.transform = `
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
        `;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });

});
const particles = document.querySelector(".particles");

particles.innerHTML = "";

for (let i = 0; i < 50; i++) {

    const dot = document.createElement("span");

    const size = 2 + Math.random() * 6;

    dot.style.left = Math.random() * 100 + "%";
    dot.style.width = size + "px";
    dot.style.height = size + "px";
    dot.style.opacity = 0.2 + Math.random() * 0.6;

    dot.style.animationDuration = (8 + Math.random() * 8) + "s";
    dot.style.animationDelay = Math.random() * 10 + "s";

    particles.appendChild(dot);
}





sr.reveal('.contact-card',{

origin:'left',

distance:'60px',

interval:200

});

sr.reveal('.contact-form',{

origin:'right',

distance:'60px',

delay:300

});


/*================ CONTACT SECTION =================*/

// Scroll Reveal

sr.reveal('.contact-left', {
    origin: 'left',
    distance: '120px',
    duration: 1400
});

sr.reveal('.contact-right', {
    origin: 'right',
    distance: '120px',
    duration: 1400,
    delay: 200
});

sr.reveal('.contact-info', {
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 500
});


/*================ INPUT LINE ANIMATION =================*/

const inputs = document.querySelectorAll(
'.contact-field input, .contact-field textarea'
);

inputs.forEach(input=>{

    input.addEventListener('focus',()=>{

        input.parentElement.classList.add('active');

    });

    input.addEventListener('blur',()=>{

        if(input.value===""){

            input.parentElement.classList.remove('active');

        }

    });

});


/*================ SEND BUTTON =================*/

const sendBtn=document.querySelector(".send-btn");

sendBtn.addEventListener("mouseenter",()=>{

    sendBtn.style.transform="translateX(12px) scale(1.05)";

});

sendBtn.addEventListener("mouseleave",()=>{

    sendBtn.style.transform="translateX(0px) scale(1)";

});


/*================ PARALLAX TITLE =================*/

const title=document.querySelector(".contact-title");

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX-window.innerWidth/2)/70;
    const y=(e.clientY-window.innerHeight/2)/70;

    title.style.transform=
    `translate(${x}px,${y}px)`;

});


/*================ SVG FLOAT =================*/

const shape=document.querySelector(".contact-shape");

let angle=0;

function animateShape(){

    angle+=0.01;

    shape.style.transform=
    `translateY(${Math.sin(angle)*10}px)
     rotate(${Math.sin(angle)*6}deg)`;

    requestAnimationFrame(animateShape);

}

animateShape();



/*================ EMAILJS =================*/

emailjs.init({
    publicKey: "Jlu4zKxvrqp5gyxle"
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const sendBtn = document.querySelector(".send-btn");
  

 sendBtn.disabled = true;
    emailjs.sendForm(
        "service_lo7mk7w",
        "template_c0qok9r",
        this
    )
    .then(() => {

       sendBtn.disabled = false;

        setTimeout(() => {

            contactForm.reset();

            sendBtn.disabled = false;

            showToast(
    "success",
    "Message Sent",
    "Thanks! I'll get back to you soon."
);

        },1200);

    })
    .catch((error)=>{

        console.error(error);

        sendBtn.innerHTML = originalHTML;
        sendBtn.disabled = false;

        showToast(
    "error",
    "Message Failed",
    "Something went wrong. Please try again."
);
    });

});



function showToast(type, title, message){

    const toast = document.getElementById("toast");
    const icon = document.getElementById("toast-icon");
    const toastTitle = document.getElementById("toast-title");
    const toastMessage = document.getElementById("toast-message");

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    if(type === "success"){

        icon.className = "bx bx-check-circle";
        icon.style.color = "#22c55e";

        toast.style.borderLeftColor = "#22c55e";

    }else{

        icon.className = "bx bx-error-circle";
        icon.style.color = "#ef4444";

        toast.style.borderLeftColor = "#ef4444";

    }

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3500);

}

/*================ LOADER ================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1800);

});

/*================ PREMIUM SCROLL INDICATOR ================*/

const indicator = document.getElementById("scrollIndicator");

const progressCircle = document.querySelector(".progress-circle");

const radius = 26;

const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = circumference;

progressCircle.style.strokeDashoffset = circumference;

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollTop / scrollHeight;

    progressCircle.style.strokeDashoffset =
        circumference - progress * circumference;

    if(scrollTop > 350){

        indicator.classList.add("show");

    }else{

        indicator.classList.remove("show");

    }

});

indicator.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const pill = document.querySelector(".nav-pill");
const navLinks = document.querySelectorAll(".nav__link");

function updatePill(link){

    pill.style.width = link.offsetWidth + "px";

    pill.style.left = link.parentElement.offsetLeft + "px";

}

updatePill(document.querySelector(".nav__link.active"));

navLinks.forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        updatePill(link);

    });

});

document.querySelector(".nav__list").addEventListener("mouseleave",()=>{

    updatePill(document.querySelector(".nav__link.active"));

});

