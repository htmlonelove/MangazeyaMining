import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';

import {initHeader} from './modules/header/init-header';
import {initMenu} from './modules/header/init-menu';
import {setHeaderHeight} from './modules/header/set-header-height';

import {initFactsSlider} from './modules/sliders/init-facts-slider';
import {initJobSlider} from './modules/sliders/init-job-slider';
import {initValuesSlider} from './modules/sliders/init-values-slider';
import {initHistorySlider} from './modules/sliders/init-history-slider';

import {initMap} from './modules/map/init-map';
import {initMapBusiness} from './modules/map/init-map-business';

import {initFirstLoad} from './modules/init-first-load';
import {initScrollBtn} from './modules/init-scroll-btn';
import {initIntroVideo} from './modules/init-intro-video';
import {loadVideo} from './modules/lazy-video-load';
import {setMobIntroHeight} from './modules/set-mob-intro-height';
import {initTextSplitWordsAnimation} from './modules/text-split-animation-words';
import {initToggleItems} from './modules/toggle-resources-table';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  setHeaderHeight();
  loadVideo();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initFirstLoad();
    initHeader();
    initMenu();
    initTextSplitWordsAnimation();
    initScrollBtn();
    initIntroVideo();
    setMobIntroHeight();
    initModals();
    initCustomSelect();
    initFormValidate();
    initFactsSlider();
    initValuesSlider();
    initHistorySlider();
    initToggleItems();
    initMap();
    initMapBusiness();
    initJobSlider();

    window.sal({
      once: true,
      threshold: 0.5,
    });
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
