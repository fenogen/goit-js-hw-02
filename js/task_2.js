// Напиши скрипт подсчета стоимости гравировки украшений. 
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова,
// и возвращающую цену гравировки всех слов в строке.


'use strict';

const text = 'Proin sociis natoque et magnis parturient montes mus';
const price = 10;

const calculateEngravingPrice = function (message, pricePerWord) {
    const textArray = message.split(' ');
    const indexTotal = textArray.length;
    const totalCost = indexTotal * pricePerWord;
    console.log(`Цена гравировки всех слов в строке составляет ${totalCost}`);
    return;
};

// calculateEngravingPrice(text, price);

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
 