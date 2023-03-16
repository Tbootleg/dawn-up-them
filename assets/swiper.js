const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 100,
  direction: 'horizontal',
  slidesPerView:8,
  loop: true,
  setWrapperSize: true,
  autoHeight: true,

  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});