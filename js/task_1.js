
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

console.log('Пример вызова функции непосредстевнно по индексу:');

const addIndex = function (array, index) {
        
    const name = array[index];
    const prefix = index + 1;

    console.log(`${prefix} - ${name}`);
    return;
}

addIndex(clients, 0)
addIndex(numbers, 5)