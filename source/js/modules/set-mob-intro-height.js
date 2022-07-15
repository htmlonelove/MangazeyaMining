const intro = document.querySelector('.intro');
const introInner = document.querySelector('.intro__inner');
const breakpointMob = window.matchMedia('(max-width: 767px)');

const breakpointChecker = () => {
  if (!intro) {
    return;
  }

  if (breakpointMob.matches) {
    let mobHeight = window.innerHeight;

    intro.style.minHeight = mobHeight + 'px';
    introInner.style.minHeight = mobHeight + 'px';
  } else {
    intro.style.minHeight = null;
    introInner.style.minHeight = null;
  }
};

const setMobIntroHeight = () => {
  breakpointChecker();
  breakpointMob.addListener(breakpointChecker);
};

export {setMobIntroHeight};
