

'use strict'; 

let input;
let total = 0;
const numbers = [];                                   // ----> сделать через let если нужно обнуление (см.ниже)

do {
  input = prompt('Введите целое число');

  if (input === null) {
    break;
  }


  // if (input >= 1 || input < 1)                   // ------> не корректно!
 if (Number(input) > 1 || Number(input) < 1) {    
    input = Number(input);
    numbers.push(input);
    console.log(numbers);
    
  } else {
    console.log('Было введено не число, попробуйте еще раз');
    // numbers = [];                                // ----> позволяет обнулить счетчик если уже были введены цифры
  }

} while (true);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

alert(`Общая сумма ${total}`);


  