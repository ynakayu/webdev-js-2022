'use strict';
const e = document.getElementById('button');
e.addEventListener('click', () => {
  const elements = document.getElementsByClassName('foo');
  for(let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerText);
  }
}, false);