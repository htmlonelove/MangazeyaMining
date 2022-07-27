import {renderFraction} from './render-slider-fraction';


const sliderBlock = document.querySelector('.slider-gallery');

const initNewsSlider = () => {
  let swiper;
  if (!sliderBlock) {
    return;
  } else {

    swiper = new Swiper('.slider-gallery', {
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 1],
        },
      },
      grabCursor: true,
      navigation: {
        nextEl: '.slider-controls__btn--next',
        prevEl: '.slider-controls__btn--prev',
      },
      pagination: {
        el: ('.slider-gallery__pagination'),
        type: 'custom',
        renderCustom: renderFraction,
      },
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
};

export {initNewsSlider};
