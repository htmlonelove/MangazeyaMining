const cityItems = document.querySelectorAll('[data-city-item]');
const citiTabsControl = document.querySelector('[data-city-controls]');

const initMapCity = () => {
  for (let i = 0; i < cityItems.length; i++) {
    const buttonLocation = cityItems[i].querySelector('[data-city-location]');

    buttonLocation.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (cityItems[i].classList.contains('is-hidden')) {
        cityItems[i].classList.remove('is-hidden');

        if (!citiTabsControl) {
          return;
        }

        citiTabsControl.classList.remove('is-hidden');
      } else {
        cityItems[i].classList.add('is-hidden');

        if (!citiTabsControl) {
          return;
        }

        citiTabsControl.classList.add('is-hidden');
      }
    });
  }
};

const initTabsCity = () => {
  const cityNavButtons = document.querySelectorAll('[data-city-nav]');

  cityNavButtons.forEach((buttonNav) => {
    buttonNav.addEventListener('click', () => {
      let array = Array.from(cityNavButtons);
      let index = array.indexOf(buttonNav);

      array.forEach((button, i) => {
        if (i === index) {
          button.classList.add('is-active');
          for (let j = 0; j < cityItems.length; j++) {
            if (i === j) {
              cityItems[j].classList.add('is-active');
            } else {
              cityItems[j].classList.remove('is-active');
            }
          }
        } else {
          button.classList.remove('is-active');
        }
      });
    });
  });
};

const initContactsCity = () => {
  if (!cityItems.length) {
    return;
  }

  initMapCity();
  initTabsCity();
};

export {initContactsCity};
