const breakpoint = window.matchMedia('(min-width:768px)');

const initMenu = () => {
  const menuBtn = document.querySelector('[data-menu-btn]');
  const quotesBtn = document.querySelector('[data-quotes-btn]');
  const mainNav = document.querySelector('.main-nav');
  const wrapper = document.querySelector('.wrapper');
  const header = document.querySelector('.header__inner');
  const main = document.querySelector('main');
  const footer = document.querySelector('.footer');
  const quotesBlock = document.querySelector('.quotations');

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

    quotesBtn.addEventListener('click', () => {
      if (wrapper.classList.contains('is-quotations-open')) {
        wrapper.classList.remove('is-quotations-open');
        header.style.transform = null;
        main.style.transform = null;
        footer.style.transform = null;
        window.scrollLock.enableScrolling();
      } else {
        wrapper.classList.add('is-quotations-open');
        header.style.transform = `translateY(${quotesBlock.scrollHeight}px)`;
        main.style.transform = `translateY(${quotesBlock.scrollHeight}px)`;
        footer.style.transform = `translateY(${quotesBlock.scrollHeight}px)`;
        window.scrollLock.disableScrolling();
      }
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initMenu};
