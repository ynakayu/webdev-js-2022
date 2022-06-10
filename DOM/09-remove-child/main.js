'use strict';
const e = document.getElementById('button');
e.addEventListener('click', () => {
  const parentElement = document.getElementById('list');
  const elements = parentElement.getElementsByTagName('li');
  const removeIndex = elements.length - 1;
  // console.log(elements.length);
  parentElement.removeChild(elements[removeIndex]);
}, false);