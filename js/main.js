var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  // keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
    arrowLeftRight: true,
  },

  // autoplay
  autoplay: {
    delay: 5000,
    // reverseDirection: true,
  },
});
