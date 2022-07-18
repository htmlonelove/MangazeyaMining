const breakpoint = window.matchMedia('(min-width:768px)');

const initMenu = () => {
  const menuBtn = document.querySelector('[data-menu-btn]');
  const mainNav = document.querySelector('.main-nav');
  const wrapper = document.querySelector('.wrapper');
  const header = document.querySelector('.header__inner');
  const main = document.querySelector('main');
  const footer = document.querySelector('.footer');

  if (!menuBtn && !mainNav) {
    return;
  }

  const breakpointChecker = () => {
    menuBtn.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (wrapper.classList.contains('is-menu-active')) {
        wrapper.classList.remove('is-menu-active');
        window.scrollLock.enableScrolling();

        if (breakpoint.matches) {
          mainNav.style.transform = null;
          header.style.transform = null;
          main.style.transform = null;
          footer.style.transform = null;
        }
      } else {
        let menuWidth = mainNav.clientWidth;
        let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        let transform = menuWidth - scrollBarWidth;

        wrapper.classList.add('is-menu-active');
        window.scrollLock.disableScrolling();

        if (breakpoint.matches) {
          mainNav.style.transform = `translateX(-${menuWidth}px)`;
          header.style.transform = `translate(-${menuWidth}px, 0)`;
          main.style.transform = `translateX(-${transform}px)`;
          footer.style.transform = `translateX(-${transform}px)`;
        }
      }
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initMenu};
