var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 1.222,
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  initialSlide: 2,
  breakpoints: {
    768: {
      // slidesPerView: 1.3,
      spaceBetween: 32,
    },
    1440: {
      // slidesPerView: 2.55,
    },
  },
  navigation: {
    nextEl: "#slide-btn-next",
    prevEl: "#slide-btn-prev",
  },
});
