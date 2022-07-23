let carousel = new Swiper(".testimonial__middle", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  speed:700,

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },

  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: ".testimonial__middle--pagination",
    clickable: true,
  },
});