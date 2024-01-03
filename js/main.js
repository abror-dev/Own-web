// Dark night mode

let elBody = document.querySelector("body");
let darkLightbtn = document.querySelector('.dark-light-btn');
darkLightbtn.addEventListener('click', function() {
  elBody.classList.toggle('dark-content');
})

// Typing txt

const texts = ['Web Developer', 'Student', 'Programmer']
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();
