'use strict';
const getRectangle 
  = new Function('height', 'width', 'return height * width');
console.log(getRectangle(3, 5));