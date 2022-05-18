// accordion menu

const accordionHeaders = document.querySelectorAll(".accordion_header");

accordionHeaders.forEach(accordionHeader => {
  accordionHeader.addEventListener("click", event => {
    const currentlyActiveAccordionHeader = document.querySelector(".accordion_header.active");
    if(currentlyActiveAccordionHeader && currentlyActiveAccordionHeader!==accordionHeader){
      currentlyActiveAccordionHeader.classList.toggle("active");
      currentlyActiveAccordionHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionHeader.classList.toggle("active");
    const accordionBody = accordionHeader.nextElementSibling;
    if(accordionHeader.classList.contains("active")){
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "rem";
    }
    else{
      accordionBody.style.maxHeight = 0;
    }
    accordionHeader.nextElementSibling.style.transition = "500ms";
  });

});

 const currentlyActiveAccordionHeader = document.querySelector(".accordion_header.active");
 if(currentlyActiveAccordionHeader && currentlyActiveAccordionHeader!==accordionHeader) {
   currentlyActiveAccordionHeader.classList.toggle("active");
   currentlyActiveAccordionHeader.nextElementSibling.style.maxHeight = 0;
 }

// activating the slideshow by clicking more.
// const slideShow = document.querySelector('#testimoninal_btn');
const testimonials = document.querySelector('#testimonials');
const slider_container = document.querySelector('.slider_container');

const startSlides = () => {
  testimonials.style.display = "none";
  slider_container.style.display = "block";
  showless_btn.style.display = "flex";
 }
  testimoninal_btn.addEventListener("click", event =>{
    startSlides();
 });

// deactivating the slideshow by clicking show more.
const showless_btn = document.querySelector('#showless_btn');

const stopSlides = () => {
  testimonials.style.display = " flex";
  slider_container.style.display = "none";
  showless_btn.style.display = "none";
}

showless_btn.addEventListener("click", event =>{
  stopSlides();
});

    // for the slideshow
 const slides = document.querySelectorAll('.slide_body');
 const next = document.querySelector('#next');
 const prev = document.querySelector('#prev');
 const auto= true;
 const intervalTime = 5000;
 let slideInterval;
 
 const nextSlide = () => {
   const current = document.querySelector('.current')
   current.classList.remove ('current');
   if(current.nextElementSibling) {
       current.nextElementSibling.classList.add('current');
   } else {
       slides[0].classList.add('current');
   }
   setTimeout(() => current.classList.remove('current'));
 }
 const prevSlide = () => {
   const current = document.querySelector('.current')
   current.classList.remove ('current');
   // check prev slide
   if(current.previousElementSibling){
       current.previousElementSibling.classList.add('current');
   } else {
     
       slides[slides.length - 1].classList.add('current');
   }
   setTimeout(() => current.classList.remove('current'));
 }
 // Button events
 next.addEventListener ('click', e => {
   nextSlide();
   if(auto){
       clearInterval(slideInterval);
       slideInterval = setInterval(nextSlide, intervalTime);
   }
       });
 prev.addEventListener ('click', e => {
   prevSlide();
   if(auto){
       clearInterval(slideInterval);
       slideInterval = setInterval(prevSlide, intervalTime);
   }
       });
 if(auto) {
   slideInterval = setInterval(nextSlide, intervalTime);
 
 }
 
