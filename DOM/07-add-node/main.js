'use strict';
const e = document.getElementById('button');
e.addEventListener('click', () => {
  const li = document.createElement('li');
  const text = document.createTextNode('test');
  li.appendChild(text);
  const listElement = document.getElementById('list');
  listElement.appendChild(li); // <li>test</li>
}, false);