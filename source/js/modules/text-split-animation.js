const splitText = (target) => {
  const results = window.Splitting({
    target,
    by: 'lines',
    whitespace: true,
  });

  const lines = results[0].lines.map((line, index) => {
    const words = [];

    line.forEach((word) => {
      if (word.closest('b') || word.closest('.section-title__blue-word')) {
        words.push(`<b>${word.textContent}</b>`);
      } else if (word.closest('.section-title__desktop-hidden')) {
        words.push(`<span class="section-title__desktop-hidden">${word.textContent}</span>`);
      } else if (word.closest('.section-title__mobile-hidden')) {
        words.push(`<span class="section-title__mobile-hidden">${word.textContent}</span>`);
      } else if (word.closest('.section-title__320-show')) {
        words.push(`<span class="section-title__320-show">${word.textContent}</span>`);
      } else if (word.closest('.section-title__320-hidden')) {
        words.push(`<span class="section-title__320-hidden">${word.textContent}</span>`);
      } else if (word.closest('.section-title__unicode')) {
        words.push(`<span class="section-title__unicode">${word.textContent}</span>`);
      } else {
        words.push(word.textContent);
      }
    });

    return `<div class="line" style="--line-index: ${index}"><div class="line-inner">${words.join(' ')}</div></div>`;
  });

  target.textContent = '';
  target.insertAdjacentHTML('beforeend', lines.join(' '));
};

const initTextSplitAnimation = () => {
  const textElements = document.querySelectorAll('[data-lines-animation]');

  if (!textElements.length) {
    return;
  }

  textElements.forEach(splitText);
};

export {initTextSplitAnimation, splitText};
