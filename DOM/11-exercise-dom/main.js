'use strict';
const e = document.getElementById('button');
e.addEventListener('click', () => {
  const textBox = document.getElementById('textBox');
  const li = document.createElement('li');
  const text = document.createTextNode(textBox.value);
  li.appendChild(text);
  list.appendChild(li); // <li>test</li>
}, false);