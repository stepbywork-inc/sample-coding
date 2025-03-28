//ua判定
document.addEventListener('DOMContentLoaded', function () {
  const human = document.querySelector('.js-human');
  const coins = document.querySelectorAll('.js-coin');

  window.addEventListener('scroll', function () {
    const humanRect = human.getBoundingClientRect();

    coins.forEach(coin => {
      const coinRect = coin.getBoundingClientRect();

      if (humanRect.bottom > coinRect.top) {
        coin.classList.add('is-got');
      } else {
        coin.classList.remove('is-got');
      }
    });
  });
})
window.addEventListener('load', function () {
})
window.addEventListener('scroll', function () {
});

