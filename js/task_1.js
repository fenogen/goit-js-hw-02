
// Напиши функцию logItems(array), которая получает массив и использует цикл for, 
// который для каждого элемента массива будет выводить в консоль сообщение в формате[номер элемента]-[значение элемента].

// Нумерация должна начинаться с 1. 
// К примеру для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', 
// а для индекса 2 выведет '3 - Ajax'.


'use strict';

const clients = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


const logItems = function (array) {
        
    for (const item of array) {
        const index = array.indexOf(item);
        const prefix = index + 1;
        console.log(`${prefix} - ${item}`);
    }
    return;
}
logItems(clients);
logItems(numbers);


// ------------------------- Пример вызова функции непосредстевнно по индексу:

const addIndex = function (array, index) {
        
    const name = array[index];
    const prefix = index + 1;

    console.log(`${prefix} - ${name}`);
    return;
}

addIndex(clients, 0)
addIndex(numbers, 5)