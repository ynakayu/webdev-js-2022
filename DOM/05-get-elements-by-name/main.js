'use strict';
const e = document.getElementById('button');
e.addEventListener('click', () => {
  const elements = document.getElementsByName('result');
  console.log(elements[0].value);
}, false);