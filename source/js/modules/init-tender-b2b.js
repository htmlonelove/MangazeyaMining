
const initTenderB2b = () => {
  const id = 'b2b-center-market-js';

  if (!document.getElementById(id)) {
    return;
  }

  const script = document.createElement('script');

  script.src = '//www.b2b-center.ru/js/public/iframe.js';
  script.id = id;
  script.charset = 'utf-8';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);
};

export {initTenderB2b};
