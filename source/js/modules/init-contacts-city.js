const cityItems = document.querySelectorAll('[data-city-item]');
const citiTabsControl = document.querySelector('[data-city-controls]');
const cityContactsHeader = document.querySelector('[data-city-tabs] [data-city-header]');
const key = "8a4e1581d453aea5e9d8aa34f5a6fb50"

async function getWeatherData (cityName, temp, time) {
  try {
    // const response = await fetch(`http://api.weatherstack.com/current?access_key=${key}&query=${cityName}`); // раскоментировать
    const response = await fetch(`http://api.weatherstack.com/current?access_keyDELETE=${key}&query=${cityName}`); // удалить
    const city = await response.json();

    const dateTime = city.location.localtime;
    const temperature = city.current.temperature;


    temp.textContent = temperature;
    time.textContent = new Date(dateTime).toLocaleTimeString().slice(0,-3);

  } catch (error) {
    console.warn(error);
    console.log('Данные о погоде не загрузились');
    temp.textContent = '-';
    return error;
  }
}

const initWeatherCity = () => {
  for (let i = 0; i < cityItems.length; i++) {
    let idCity = cityItems[i].dataset.cityId;
    let nameCity = cityItems[i].dataset.cityItem;

    const cityTemperature = cityItems[i].querySelector('[data-city-temperature]');
    const cityTime = cityItems[i].querySelector('[data-city-time]');
    getWeatherData(nameCity, cityTemperature, cityTime);
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
};

export {initContactsCity};
