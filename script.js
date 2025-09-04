/*let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    
    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter  out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText,3000);*/

// Make sure Typed.js library is included before this script
const typed = new Typed('.multiple-text', {
    strings: [
        'Full-Stack Developer',
        'Web Developer',
        'Frontend Developer',
        'Ethical Hacker'
    ],
    typeSpeed: 100,     // typing speed in ms
    backSpeed: 100,     // deleting speed in ms
    backDelay: 1200,    // pause before deleting
    startDelay: 500,    // optional delay before starting
    loop: true,         // repeat indefinitely
    showCursor: true,   // show blinking cursor
    cursorChar: '|',    // customize cursor
});

/* circle skill -----------------------------------*/
// const circles = document.querySelectorAll('.circle');
// circles.forEach(elem=>{
//     var dots = elem.getAttribute("data-dots");
//     var marked = elem.getAttribute("data-percent");
//     var percent = Math.floor(dots*marked/100);
//     var points = "";
//     var rotate = 360 / dots;

//     for(let i = 0 ; i < dots ; i++){
//         points += `<div class="points" style="--i${i}; --rot:${rotate}deg"></div>`;
//     }
//     elem.innerHTML = points;

//     const pointsMarked = elem.querySelectorAll('.points');
//     for(let i = 0; i<percent ; i++){
//         pointsMarked[i].classList.add('marked')
//     }
// })

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