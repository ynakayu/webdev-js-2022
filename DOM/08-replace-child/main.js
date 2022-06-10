'use strict';
const e = document.getElementById('button');
e.addEventListener('click', () => {
  const newList = document.createElement('li');
  newList.setAttribute('id', 'newList');
  const newText = document.createTextNode('new element');
  newList.appendChild(newText);
  const oldList = document.getElementById('oldList');
  const parentNode = oldList.parentNode;
  parentNode.replaceChild(newList, oldList);
}, false);