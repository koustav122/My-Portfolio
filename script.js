// Type js
const typed = new Typed('.multiple-text', {
    strings: [
        'Full-Stack Developer',
        'Web Developer',
        'Frontend Developer',
        'Ethical Hacker'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1200,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
});

// circle skill
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    const dots = parseInt(elem.getAttribute("data-dots"));
    const marked = parseInt(elem.getAttribute("data-percent"));
    const percent = Math.floor(dots * marked / 100);
    const rotate = 360 / dots;
    let points = "";

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

// mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');

// Active menu
const menuLi = document.querySelectorAll('header ul li a');
const sections = document.querySelectorAll('section');
const header = document.querySelector("header");

function activeMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 344 < sections[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky Navbar
window.addEventListener("scroll", function() {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Toggle Icon Navbar
const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

document.onclick = (e) => {
    if (!menuIcon.contains(e.target) && !navlist.contains(e.target)) {
        menuIcon.classList.remove("bx-x");
        navlist.classList.remove("open");
    }
};

// Parallax
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollElements = document.querySelectorAll(".scroll-scale, .scroll-bottom, .scroll-top");
scrollElements.forEach((el) => observer.observe(el));
