let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Измените значение 2000 на время задержки между слайдами в миллисекундах
}

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex -= 2;
    showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
    showSlides();
});
jQuery(document).ready(function ($) {

 $(".regular").slick({
        dots: true,
  //       infinite: true,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
		// autoplay: true,
  //       arrows: true,
  //       mobileFirst: true,
  //       easing: 'easeOutElastic',
  //       speed: 800,
        autoplay: true,
        autoplaySpeed:9000,
        speed:700,
        mobileFirst: true,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
        respondTo:'min',
        cssEase:'linear',
        prevArrow: '<span class="icon-angle-left"></span>',
        nextArrow: '<span class="icon-angle-right"></span>'
      });

$('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
$('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        prevArrow: '<span class="icon-angle-left"></span>',
        nextArrow: '<span class="icon-angle-right"></span>',
        responsive: [
            {
              breakpoint: 450,
              settings: {
                dots: false,
                slidesToShow: 3,  
                centerPadding: '0px',
                }
            },
            {
              breakpoint: 420,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    });





 });	
$('.spotlight__item').click(function() {
  
  $(this).toggleClass('item--active');
  
})

