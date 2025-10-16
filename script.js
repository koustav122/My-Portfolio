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
document.addEventListener("DOMContentLoaded", () => {
  const skillSection = document.querySelector(".skills");
  const bars = document.querySelectorAll(".skill-bar .bar span");
  const circles = document.querySelectorAll(".circle");

 
  function buildCircles() {
    circles.forEach(elem => {
      const dots = parseInt(elem.getAttribute("data-dots"));
      const marked = parseInt(elem.getAttribute("data-percent"));
      const percent = Math.floor((dots * marked) / 100);
      const rotate = 360 / dots;
      let points = "";

      
      for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
      }
      elem.innerHTML = points;


      const pointsMarked = elem.querySelectorAll(".points");
      pointsMarked.forEach(p => p.classList.remove("marked"));
      for (let i = 0; i < percent; i++) {
        setTimeout(() => pointsMarked[i].classList.add("marked"), i * 25);
      }
    });
  }


  function animateBars() {
    bars.forEach(bar => {
      const finalWidth =
        bar.classList.contains("html") ? "90%" :
        bar.classList.contains("css") ? "72%" :
        bar.classList.contains("javascript") ? "80%" :
        bar.classList.contains("mongodb") ? "68%" :
        bar.classList.contains("react") ? "75%" :
        bar.classList.contains("python") ? "84%" :
        bar.classList.contains("operting-system") ? "65%" :
        bar.classList.contains("linux") ? "60%" : "0%";

      bar.style.transition = "none";
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.transition = "width 2s ease-in-out";
        bar.style.width = finalWidth;
      }, 150);
    });
  }

  
  function resetAnimations() {
    bars.forEach(bar => {
      bar.style.transition = "width 0.8s ease-out";
      bar.style.width = "0%";
    });

    circles.forEach(c => {
      c.style.transition = "opacity 0.5s ease-out";
      c.style.opacity = "0";
      setTimeout(() => {
        c.innerHTML = "";
        c.style.opacity = "1";
      }, 600);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
         
          animateBars();
          buildCircles();
        } else {
          
          resetAnimations();
        }
      });
    },
    { threshold: 0.3 } 
  );

  observer.observe(skillSection);
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

