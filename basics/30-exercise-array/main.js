'use strict';
const scores = [100, 90, 80, 70, 60];
let sum = 0;
for(let i = 0; i < scores.length; i++) {
  sum += scores[i];
}

const average = sum / scores.length;
console.log(sum);
console.log(average);