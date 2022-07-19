const breakpoint = window.matchMedia('(min-width:768px)');
const SCALE = 2.9;

const modalVideoClose = () => {
  const wrapper = document.querySelector('.wrapper');
  const videoWrp = document.querySelector('.intro__video-wrp');

  if (wrapper.classList.contains('is-video-open')) {
    wrapper.classList.remove('is-video-open');
    videoWrp.style.transform = null;
  }
};

const initIntroVideo = () => {
  const videoBtn = document.querySelector('[data-open-modal="video"]');
  const modalContent = document.querySelector('.modal--video .modal__content');
  const videoWrp = document.querySelector('.intro__video-wrp');
  const wrapper = document.querySelector('.wrapper');

  if (!videoBtn) {
    return;
  }

  const breakpointChecker = () => {
    videoBtn.addEventListener('click', (evt) => {
      evt.preventDefault();

      let videoBottom = (document.documentElement.clientHeight - videoWrp.getBoundingClientRect().bottom) / SCALE;
      let videoWidth = videoWrp.getBoundingClientRect().width;
      let videoHeight = videoWrp.getBoundingClientRect().height;

      if (breakpoint.matches) {
        let width = window.innerWidth - document.documentElement.clientWidth;
        let koefX = -(document.documentElement.clientWidth) / 2 / SCALE;
        let koefY = -(document.documentElement.clientHeight) / 2 / SCALE;
        let videoX = koefX + videoWidth / 2;
        let videoY = koefY + videoHeight / 2;

        modalContent.style.width = width + 1 + 'px';

        if (!wrapper.classList.contains('is-video-open')) {
          wrapper.classList.add('is-video-open');
          videoWrp.style.transform = `scale(${SCALE}) translate(${videoX}px, ${videoY + videoBottom}px)`;
        }
      }
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initIntroVideo, modalVideoClose};
