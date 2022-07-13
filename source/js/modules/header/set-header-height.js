import {ResizeObserver as ResizeObserverPolyffiled} from '../../vendor/resize-observer.js';
const ResizeObserverCurrent = window.ResizeObserver ? window.ResizeObserver : ResizeObserverPolyffiled;

const body = document.querySelector('body');
const header = document.querySelector('.header');

const setHeaderHeight = () => {
  if (!header) {
    return;
  }

  let headerHeight = header.offsetHeight;

  body.style.setProperty('--headerHeight', headerHeight + 'px');

  const ro = new ResizeObserverCurrent((entries) => {
    for (let entry of entries) {
      let newHeight = entry.contentRect ? entry.contentRect.height : entry.contentBoxSize.blockSize;

      if (headerHeight !== newHeight) {
        body.style.setProperty('--headerHeight', newHeight + 'px');
        headerHeight = newHeight;
      }
    }
  });

  ro.observe(header);
};

export {setHeaderHeight};
