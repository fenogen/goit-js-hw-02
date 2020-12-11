

'use strict';

const formatString = function (string) {

    const textArray = string.split('');

    const textLength = textArray.length;

    if (textLength > 40) {
        textArray.length = 40;
        const textString = textArray.join('');
        const textEnd = textString + '...';
        console.log(textEnd);
        console.log(`Общая длина строки: ${textEnd.length}`);
    }
    else {                                                           // -----> с использованием else
        console.log(string);
        console.log(`Общая длина строки: ${string.length}`);
    }
    return;
}

formatString('Curabitur ligula sapien, tincidunt non.');

formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');

formatString('Curabitur ligula sapien.');

formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');

