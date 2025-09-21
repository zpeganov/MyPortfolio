// document.addEventListener('DOMContentLoaded', function() {
//   const trigger = document.querySelector('.portfolio-section');
//   const content = document.querySelector('.expand-section');

//   trigger.addEventListener('click', function() {
//     content.classList.toggle('expanded');
//   });
// });

const trigger = document.querySelectorAll('.portfolio-section');
const content = document.querySelectorAll('.expand-section');


trigger.forEach((triggerElement, index) => {
  triggerElement.addEventListener('click', function() {
    content[index].classList.toggle('expanded');
  });
});