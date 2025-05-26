let inputBox = document.querySelector('#input-box');
let img = document.querySelector('img');

//inputBox.addEventListener('keypress', function (event) {
//  console.log('keypress');
//});

//inputBox.addEventListener('keydown', function (event) {
//  console.log('keydown');
//});

//inputBox.addEventListener('keyup', function (event) {
//  console.log('event.key', event.key);
//  console.log('event.keyCode', event.keyCode);
//});

inputBox.addEventListener('blur', function (event) {
  alert('blur');
});

inputBox.addEventListener('change', function (event) {
  alert('change');
});

img.addEventListener('error', function (event) {
  console.log('error');
  event.target.src = '../../img/apple.jpg';
});
