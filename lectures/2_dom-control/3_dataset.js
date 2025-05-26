let h2 = document.querySelector('h2');
h2.dataset.test = 'Hello Javascript!';
console.log(h2.dataset.test);

let img = document.querySelector('img');
let liList = document.querySelectorAll('li');
let selectedItem = document.querySelector('.selected-item');

liList[0].addEventListener('click', selectItem);
liList[1].addEventListener('click', selectItem);
liList[2].addEventListener('click', selectItem);

function selectItem() {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
}
