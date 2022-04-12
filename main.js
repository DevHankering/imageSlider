
let slideIndex = 1;

const showSlides = (n) => {
    const slides = document.getElementsByClassName("img");
    const dots = document.getElementsByClassName("dot");

    if(n>slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }

    for(let i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    for(let i=0; i<dots.length; i++){
      if(dots[i].classList.contains("active")){
          dots[i].classList.remove("active");
      }
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex -1].classList.add("active");
    console.log("My slide position is", slideIndex - 1);
}

const plusSlides = (n) => {
    showSlides(slideIndex = slideIndex + n);
}

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

showSlides(slideIndex);

setInterval(function(){
showSlides(++slideIndex)
},2000)