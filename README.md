# goit-js-hw-02

Модуль 2 - Массивы. Функции

Task #1. Функция logItems(array), которая получает массив и использует цикл for,
который для каждого элемента массива будет выводить в консоль сообщение в
формате[номер элемента]-[значение элемента]. Нумерация начинаться с 1.

Task #2. Скрипт подсчета стоимости гравировки украшений. Функция
calculateEngravingPrice(message, pricePerWord), которая ринимает строку(в строке
будут только слова и пробелы) и цену гравировки одного слова, и возвращающую
цену гравировки всех слов в строке.

Task #3. Фукцния findLongestWord(string), которая принимает параметром
произвольную строку (в строке будут только слова и пробелы) и возвращает самое
длинное слово в этой строке.

Task #4. Функция formatString(string) которая принимает строку и форматирует ее
если необходимо. Если длина строки не превышает 40 символов, функция возвращает
ее в исходном виде. Если длина больше 40 символов, то функция обрезает строку до
40 - ка символов и добавляет в конец строки троеточие '...', после чего
возвращает укороченную версию.

Task #5. Функция checkForSpam(message), принимающую 1 параметр message - строку.
Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово
то функция возвращает true, если запрещенных слов нет функция возвращает false.
Слова в строке могут быть в произвольном регистре.

Task #6. Скрипт со следующим функционалом: При загрузке страницы пользователю
предлагается в prompt ввести число. Ввод сохраняется в переменную input и
добавляется в массив чисел numbers. Операция ввода числа пользователем и
сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel
в prompt. После того как пользователь прекратил ввод нажав Cancel, если массив
не пустой, необходимо посчитать сумму всех элементов массива и записать ее в
переменную total. Используется цикл for или for...of. После чего в консоль
выводится строка 'Общая сумма чисел равна [сумма]'. 🔔 Дополнительно делатся
проверка того, что пользователь ввел именно число, а не произвольный набор
символов. В случае некорректного ввода, показывается alert с текстом 'Было
введено не число, попробуйте еще раз', при этом результат prompt в массив чисел
незаписывается, после чего снова пользователю предлагается ввести число в
prompt.
