// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.


'use strict'; 

const checkForSpam = function (message) {
    let messageLow = message.toLowerCase();
    const messageArray = messageLow.split(' ');
    console.log(messageArray);
    const question = messageArray.includes('sale') || messageArray.includes('spam') || messageArray.includes('[spam]')
        ? 'true' : 'false';
    console.log(question);
    return;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true