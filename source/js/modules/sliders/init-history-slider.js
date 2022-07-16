import {renderFraction} from './render-slider-fraction';

const historySlider = document.querySelector('[data-history-slider]');


let pagination;
let prevButton;
let nextButton;


const enableSwiper = (slider) => {
  prevButton = slider.closest('[data-history-slider-container]').querySelector('[data-btn-prev]');
  nextButton = slider.closest('[data-history-slider-container]').querySelector('[data-btn-next]');
  pagination = slider.closest('[data-history-slider-container]').querySelector('[data-pagination]');

  let mySwiper = new Swiper (slider, {
    speed: 600,
    allowTouchMove: true,
    watchOverflow: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 13,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
    },
  });
};

const initHistorySlider = () => {
  enableSwiper(historySlider);
};

export {initHistorySlider};
