'use strict';
const e = document.getElementById('button');
e.addEventListener('click', () => {
  const li = document.createElement('li');
  const text = document.createTextNode('test');
  li.appendChild(text);
  list.appendChild(li); // <li>test</li>
}, false);