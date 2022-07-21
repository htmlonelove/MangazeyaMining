const cityItems = document.querySelectorAll('[data-city]');

const initCityMap = () => {
  if (!cityItems.length) {
    return;
  }

  for (let i = 0; i < cityItems.length; i++) {
    const cityContent = cityItems[i].querySelector('[data-city-content]');
    const buttonLocation = cityItems[i].querySelector('[data-city-location]');

    buttonLocation.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (cityItems[i].classList.contains('is-hidden')) {
        cityItems[i].classList.remove('is-hidden');
      } else {
        cityItems[i].classList.add('is-hidden');
      }
    });
  }
};

export {initCityMap};
