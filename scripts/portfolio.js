// document.addEventListener('DOMContentLoaded', function() {
//   const trigger = document.querySelector('.portfolio-section');
//   const content = document.querySelector('.expand-section');

//   trigger.addEventListener('click', function() {
//     content.classList.toggle('expanded');
//   });
// });
function openSection(){
const trigger = document.querySelectorAll('.portfolio-section');
const content = document.querySelectorAll('.expand-section');


trigger.forEach((triggerElement, index) => {
  triggerElement.addEventListener('click', function() {
    content[index].classList.toggle('expanded');
  });
});
}
const typedTextSpan = document.querySelector('.typed-text');
const textArray = ['Peganov, Zacharia', 'Software Developer']
let textArrayIndex = 0;
let charIndex = 0;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

document.addEventListener('DOMContentLoaded', openSection);