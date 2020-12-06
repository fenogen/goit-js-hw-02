// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'


'use strict';

console.log('hello')

const text = 'The quick brown fox jumped over the lazy dog';

const textArray = text.split(' ');
console.log(textArray);

for (let i = 0; i < textArray.length; i += 1) {
    
    const item = textArray[i]
    const itemLength = item.length
    console.log(`${item} - ${itemLength}`);
    if (itemLength > itemLength + 1);
    console.log(itemLength);
    // if (Math.max(item.length) > Math.min(item.length)) {
}

// for (const word of textArray) {
//     // console.log(word);

//     const sumOfLetter = word.length;
//     console.log(sumOfLetter);

// }

// const textString = textArray.join(' ');
// console.log(textString);



// const findLongestWord = function ( ...arg) {
//     console.log(arg);
// };

// findLongestWord(textArray);