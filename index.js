document.querySelector("#login").addEventListener('click', function() {
    document.querySelector(".popupLogin").classList.add("active");
  });
  
document.querySelector(".popupLogin .close-btn").addEventListener('click', function() {
    document.querySelector('.popupLogin').classList.remove("active");
  });
  
var women = document.querySelector('#women');
var men = document.querySelector('#men');
var kid = document.querySelector('#kid');

var women1 = document.querySelector('#women1');
var men1 = document.querySelector('#men1');
var kid1 = document.querySelector('#kid1');

var menn = document.querySelector('.men-div');
var womenn = document.querySelector('.women-div');
var kidd = document.querySelector('.kid-div');

women1.addEventListener('click',displayWomen);
women.addEventListener('click',displayWomen);
function displayWomen(){
    menn.style.display = 'none';
    womenn.style.display = 'block';
    kidd.style.display = 'none';
}

men1.addEventListener('click', displayMen);
men.addEventListener('click', displayMen);
function displayMen(){
    menn.style.display = 'block';
    womenn.style.display = 'none';
    kidd.style.display = 'none';
}

kid1.addEventListener('click',displayKid);
kid.addEventListener('click',displayKid);
function displayKid(){
    menn.style.display = 'none';
    womenn.style.display = 'none';
    kidd.style.display = 'block';
}


// img-slider

let currentIndex = 0;

  function showSlide(index) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slideWidth = document.querySelector('.slider-image').width;
    const newPosition = -index * slideWidth;
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % 5;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + 5) % 5;
    showSlide(currentIndex);
  }