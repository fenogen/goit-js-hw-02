'use strict'; 


let input;
let total = 0;
const numbers = [];

do {
  input = prompt('Введите целое число');
  if (input === null) {
    alert(`Общая сумма ${total}`);
    break;
  }
  if (input >= 1) {
    input = Number(input);
    total += input;
    numbers.push(input);
    console.log(numbers);
    console.log(`Общая сумма ${total}`);
    continue;
  } else {
    console.log('Было введено не число, попробуйте еще раз');
    break;
  }
} while (true);