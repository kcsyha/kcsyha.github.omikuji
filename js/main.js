'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉', '中吉', '凶', '末吉'];
    // const results = ['超吉', '特大吉', '大吉', '中吉', '小吉', '末吉', '凶', '大凶'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.02) {
      btn.textContent = '超吉'; // 2%
    } else if (n < 0.1) {
      btn.textContent = '特大吉'; // 8%
    } else if (n < 0.3) {
      btn.textContent = '大吉'; // 20%
    } else if (n < 0.5) {
      btn.textContent = '中吉'; // 20%
    } else if (n < 0.7) {
      btn.textContent = '小吉'; // 20%
    } else if (n < 0.9) {
      btn.textContent = '末吉'; // 20%
    } else if (n < 0.98) {
      btn.textContent = '凶'; // 8%
    } else {
      btn.textContent = '大凶'; // 2%
    }
  });
}