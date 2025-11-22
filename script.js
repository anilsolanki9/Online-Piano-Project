let keys = document.querySelectorAll('.container div');

let keyMap = {
  Q: '0',
  W: '1',
  E: '2',
  R: '3',
  T: '4',
  Y: '5',
  U: '6',
  I: '7',
  O: '8',
  P: '9',
  A: '10',
  S: '11',
  D: '12',
  F: '13',
  G: '14',
  H: '15',
  J: '16',
  K: '17',
  L: '18',
  M: '19',
  N: '20',
  1: '21',
  2: '22',
  3: '23',
  4: '24',
  5: '25',
  6: '26',
  7: '27',
  8: '28',
  9: '29',
  0: '30',
  Z: '31',
  X: '32',
  C: '33',
  V: '34',
  B: '35',
};
keys.forEach(function (key) {
  key.addEventListener('click', function () {
    console.log(keyMap[key.textContent]);
    const aud = new Audio(`./assets/${keyMap[key.textContent]}.mp3`);
    aud.currentTime = 0;
    aud.play();
  });
});

window.addEventListener('keydown', function (dets) {
  let key = dets.key.toUpperCase();
  const aud = new Audio(`./assets/${keyMap[key]}.mp3`);
  aud.currentTime = 0;
  aud.play();
  keys.forEach(function (btn) {
    if (btn.innerHTML === key) {
      if (btn.classList.contains('key')) {
        btn.classList.add('animate');

        setTimeout(() => {
          btn.classList.remove('animate');
        }, 300);
      } else {
        btn.classList.add('SharpAnimate');

        setTimeout(() => {
          btn.classList.remove('SharpAnimate');
        }, 300);
      }
    }
  });
});
