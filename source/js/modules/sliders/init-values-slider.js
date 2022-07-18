
const valuesSlider = document.querySelector('[data-values-slider]');


let prevButton;
let nextButton;


const enableSwiper = (slider) => {
  prevButton = slider.closest('[data-values-slider-container]').querySelector('[data-btn-prev]');
  nextButton = slider.closest('[data-values-slider-container]').querySelector('[data-btn-next]');

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

const initValuesSlider = () => {
  if (valuesSlider) {
    enableSwiper(valuesSlider);
  }
};

export {initValuesSlider};
