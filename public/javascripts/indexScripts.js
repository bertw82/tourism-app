const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pictures = document.querySelectorAll('.slideshow-pictures');
const slideShowImages = document.querySelectorAll('.slideshow-pictures img');

/**
 *  slideshow functionality
 * coded with much help from: https://betterprogramming.pub/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9
 */
 let slideIndex = 1;
 let myTimer;
 
 window.addEventListener("load", () => {
   showSlides(slideIndex);
   myTimer = setInterval(() => {changeSlides(1)}, 4000);
 });
 
 // next and prev control
 function changeSlides(n){
   clearInterval(myTimer);
   if (n < 0){
     showSlides(slideIndex -= 1);
   } else {
    showSlides(slideIndex += 1); 
   }
   if (n === -1){
     myTimer = setInterval(() => {changeSlides(n + 2)}, 4000);
   } else {
     myTimer = setInterval(() => {changeSlides(n + 1)}, 4000);
   }
 }
 
 // show pictures
 function showSlides(n){
   const pictures = document.querySelectorAll('.slideshow-pictures');
   if (n > pictures.length) {slideIndex = 1}
   if (n < 1) {slideIndex = pictures.length}
   for (let i = 0; i < pictures.length; i++) {
     pictures[i].style.display = "none";
   }
   pictures[slideIndex-1].style.display = "block";
 }
 
 // prev button listener
 prevButton.addEventListener('click', () => {
   changeSlides(-1);
 });
 
 // // next button listener
 nextButton.addEventListener('click', () => {
   changeSlides(1);
 });
 
 // slideshow media query for different image size for mobile
 const mediaQuery = window.matchMedia('(max-width: 767px)');
 
 function handleMobileChange(e) {
   if (e.matches) {
     console.log('mobile');
     for (let i = 0; i < slideShowImages.length; i++)
       slideShowImages[i].src = `images/slideshow-img/mobile-slide-${i + 1}.jpg`;
   } else {
     for (let i = 0; i < slideShowImages.length; i++)
       slideShowImages[i].src = `images/slideshow-img/tablet-slide-${i + 1}.jpg`;
     console.log('tablet');
   }
 }
 
 mediaQuery.addEventListener('change', handleMobileChange);
 
 handleMobileChange(mediaQuery);