const initMainNav = () => {
  const mainNavEl = document.querySelector('.main-nav');

  if (!mainNavEl) {
    return;
  }

  const mainNavBtnEl = document.querySelector('.main-nav__toggle');

  mainNavBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    mainNavEl.classList.toggle('is-active');
    document.body.classList.toggle('is-menu-show');

    if (mainNavEl.classList.contains('is-active')) {
      window.scrollLock.disableScrolling();
    } else {
      window.scrollLock.enableScrolling();
    }

    setTimeout(() => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, 100);
  });
};

export {initMainNav};
