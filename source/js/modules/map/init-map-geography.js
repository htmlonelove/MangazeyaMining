import {addMarkers} from './init-map';
import {initMapZoom} from './init-map-zoom';

const mediaPoint = matchMedia('(max-width: 767px)');
let myMap;

const init = (mapEl) => {
  myMap = new window.ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 10,
    controls: [],
    behaviors: mediaPoint.matches ? ['multiTouch'] : ['drag', 'multiTouch'],
  }, {
    searchControlProvider: 'yandex#search',
    suppressMapOpenBlock: true,
  });

  if (mapEl.hasAttribute('data-markers')) {
    const url = mapEl.getAttribute('data-markers');

    fetch(url)
        .then((response) => response.json())
        .then(({markers}) => {
          const collection = addMarkers({
            markers,
            mapInstance: myMap,
            isBalloon: true,
          });

          if (markers.length === 1) {
            collection.toArray()[0].balloon.open();
          }

          window.addEventListener('resize', (e) => {
            collection.toArray().forEach((marker) => {
              if (marker.balloon.isOpen()) {
                marker.balloon.open();
              }
            });
          });

          myMap.events.add('click', (e) => e.get('target').balloon.close());
        });
  }

  initMapZoom(myMap, mapEl);
};

const breakpointChecker = () => {
  if (myMap) {
    if (mediaPoint.matches) {
      myMap.behaviors.disable('drag');
    } else {
      myMap.behaviors.enable('drag');
    }
  }
};

const initMapGeography = () => {
  const mapEl = document.querySelector('.map-geography');

  if (!mapEl) {
    return;
  }

  window.ymaps.ready(() => {
    init(mapEl);
  });

  breakpointChecker();
  mediaPoint.addListener(breakpointChecker);
};

export {initMapGeography};
