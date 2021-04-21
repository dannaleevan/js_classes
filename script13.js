/* const books = [
  'Stop',
  'Strong',
  'Blue',
  'Warm'
]
console.log(books);
console.log(books[0]);

console.log(typeof books);

console.log(books.join());
console.log(`Книги, которые я рекомендую: ${books.join()}.`); //соединенеие через запятую с обратными ковычками

const booksInString = 'Stop, Strong, Blue, Warm';  //превращение строки в массив

console.log(booksInString.split(', '));

console.log(books.slice(0, 2));  //начиная с нулевого, вырезает 2 элемента

//добавление элеметов а массив с конца
books.push('Good');
console.log(books);

//забор последнего элемента из массива с конца
books.pop();
console.log(books);

//добавление/забор элементов с начала

books.unshift('Keep');
console.log(books);
books.shift();
console.log(books);

//в обратную сторону отчет
const numbers = [1, 2, 4, 6];
console.log(numbers.reverse());

// конкотинация массивов
const moreBooks =[
  'Join',
  'Stupid'
]

console.log(books.concat(moreBooks));

//показывает индекс
console.log(books.indexOf('Blue'));

const words = 'ИДИ, МАКАР, К РАКАМ';
console.log(words.split(', ').reverce().join());
 Array.prototype.reverse.call(words);
console.log(words);
console.log(words.reverse());
console.log(words.join);
console.log(words.split(' '));
console.log(words.reverse());

const a =[1,2,3];
const b =[4,5,6];
console.log(a.concat(b));*/


//OBJECTS

//способы написания объекта
const config = new Object ();
const config = {}

config.time = '15 min';
config['day-of-week'] = 'monday'; //если нужно исспользовать составное название
console.log(config);

console.log(config['day-of-week']);

console.log('time' in config);  // true обращение к булевому значению
console.log('month' in config);   //false

const needValue = 'time';
console.log(config[needValue]);

//обращение к ключам объекта

console.log(Object.keys(config));  //посмотреть ключи

const newConfig = config; //отссылка на нашу переменную
config.year = 2018;   //добавление ключ/значение
console.log(newConfig);

const newConfig = Object.assign({}, config);    //мы выводим ключ-значение командой Object.assign
console.log(newConfig);
config.year = 2018;  //бобавляем значение в старый config
console.log(Object.assign(config));  //смотрим ключ/значение старого
