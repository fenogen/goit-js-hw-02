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
    numbers.push(input);
    console.log(numbers);
    
    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
        console.log(`Общая сумма ${total}`);
        break;
  }

  } else {
    console.log('Было введено не число, попробуйте еще раз');
    break;
  }
} while (true);