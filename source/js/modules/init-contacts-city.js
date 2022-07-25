const cityItems = document.querySelectorAll('[data-city-item]');
const citiTabsControl = document.querySelector('[data-city-controls]');
const cityContactsHeader = document.querySelector('[data-city-tabs] [data-city-header]');

// const API_KEY = '3af947368395bd318640a7cea988f178';

async function getWeatherData (id, element) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`);
    const city = await response.json();

    const temperature = city.main.temp;

    element.textContent = (temperature - 273).toFixed(0);

  } catch (error) {
    console.warn(error);
    console.log('Данные о погоде не загрузились');
    element.textContent = '-';
    return error;
  }
}

const initWeatherCity = () => {
  for (let i = 0; i < cityItems.length; i++) {
    let idCity = cityItems[i].dataset.cityId;

    const cityTemperature = cityItems[i].querySelector('[data-city-temperature]');

    getWeatherData(idCity, cityTemperature);
  }
};

const initMapCity = () => {
  for (let i = 0; i < cityItems.length; i++) {
    const buttonLocation = cityItems[i].querySelector('[data-city-location]');

    buttonLocation.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (cityItems[i].classList.contains('is-hidden')) {
        cityItems[i].classList.remove('is-hidden');

        if (citiTabsControl) {
          setTimeout(() => {
            citiTabsControl.classList.remove('is-hidden');
          }, 500);
        }

        if (cityContactsHeader) {
          setTimeout(() => {
            cityContactsHeader.classList.remove('is-hidden');
          }, 500);
        }

      } else {
        cityItems[i].classList.add('is-hidden');

        if (citiTabsControl) {
          citiTabsControl.classList.add('is-hidden');
        }

        if (cityContactsHeader) {
          cityContactsHeader.classList.add('is-hidden');
        }
      }
    });
  }
};

const initCityVideo = () => {
  for (let i = 0; i < cityItems.length; i++) {
    const cityVideo = cityItems[i].querySelector('[data-city-video]');

    cityVideo.addEventListener('loadedmetadata', () => {
      cityItems[i].addEventListener('mouseenter', () => {
        cityVideo.play();
      });

      cityItems[i].addEventListener('mouseleave', () => {
        cityVideo.pause();
      });
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

  initCityVideo();
  initMapCity();
  initTabsCity();
  initWeatherCity();
  // initTimeCity();
};

export {initContactsCity};
