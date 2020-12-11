

'use strict';


const calculateEngravingPrice = function (message, pricePerWord) {
    const textArray = message.split(' ');
    const indexTotal = textArray.length;
    const totalCost = indexTotal * pricePerWord;
    console.log(`Цена гравировки всех слов в строке составляет ${totalCost}`);
    return;
};


calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10); // 80

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20); // 160

calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40); // 240

calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20); // 120
 