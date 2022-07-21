const sliderBlock = document.querySelector('.slider-gallery');

const initNewsSlider = () => {
  let swiper;
  if (!sliderBlock) {
    return;
  } else {

    swiper = new Swiper('.slider-gallery', {
      grabCursor: true,
      navigation: {
        nextEl: '.slider-controls__btn--next',
        prevEl: '.slider-controls__btn--prev',
      },
      pagination: {
        el: ('.slider-gallery__pagination'),
        type: 'fraction',
        clickable: true,
      },
      breakpoints: {
        1440: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      },
    });
  }
};

export {initNewsSlider};
