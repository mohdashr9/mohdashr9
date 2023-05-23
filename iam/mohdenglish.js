// تعديل سلوك النقرة على الروابط
document.addEventListener('click', function(event) {
    if (event.target.matches('a[href^="#"]')) {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
  var birthDate = new Date("2008-12-22");
var currentDate = new Date();
var age = currentDate.getFullYear() - birthDate.getFullYear();

// عرض العمر على الصفحة
document.getElementById("age").innerText = age;
const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('click', () => {
    images.forEach(img => img.classList.remove('active'));
    image.classList.add('active');
  });
});
class Translate{
    constructor(){
document.getElementById("arabic").addEventListener("click", )
    }
    Translate(language){

    }
}
// Get the buttons
const arabicButton = document.getElementById('arabicButton');
const englishButton = document.getElementById('englishButton');
const dutchButton = document.getElementById('dutchButton');

// Add click event listeners to the buttons
arabicButton.addEventListener('click', () => {
  window.location.href = 'mohd.html';
});

englishButton.addEventListener('click', () => {
  window.location.href = 'mohdenglish.html';
});

dutchButton.addEventListener('click', () => {
  window.location.href = 'mohdnd.html';
});
