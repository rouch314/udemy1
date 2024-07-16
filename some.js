"use strict"

// if(4 === 9) {
//   console.log('Ok!');
// } else {
//   console.log ('ERROR!')
// }

const num = 50;

switch (num) {
  case 49: 
    console.log('ERROR!');
    break;
  case 100:
    console.log('ERROR!'); 
    break;
  case 51:
    console.log('OK!');
    break;
  default:
    console.log('НЕ В ЭТОТ РАЗ!')
    break;
}