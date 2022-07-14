const factSliders = document.querySelectorAll('[data-facts-slider]');
const breakpointL = window.matchMedia('(max-width:1279px)');

// const breakpointXL = window.matchMedia('(max-width:1439px)');
// const breakpointMD = window.matchMedia('(max-width:1023px)');
// const breakpointSM = window.matchMedia('(max-width:767px)');

let swiper;
let pagination;
let prevButton;
let nextButton;

const initSwiper = (slider) => {
  prevButton = slider.closest('[data-facts-slider-container]').querySelector('[data-btn-prev]');
  nextButton = slider.closest('[data-facts-slider-container]').querySelector('[data-btn-next]');
  pagination = slider.closest('[data-facts-slider-container]').querySelector('[data-pagination]');

  swiper = new Swiper(slider, {
    speed: 600,
    allowTouchMove: true,
    watchOverflow: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
};

const initFactsSlider = () => {
  if (!factSliders.length) {
    return;
  }

  for (let i = 0; i < factSliders.length; i++) {
    initSwiper(factSliders[i]);
  }

};

export {initFactsSlider};
