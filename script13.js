/* const books = [
  'Stop',
  'Strong',
  'Blue',
  'Warm'
]
// console.log(books);
// console.log(books[0]);

// console.log(typeof books);

// console.log(books.join());
console.log(`Книги, которые я рекомендую: ${books.join()}.`); //соединенеие через запятую с обратными ковычками

const booksInString = 'Stop, Strong, Blue, Warm';  //превращение строки в массив

console.log(booksInString.split(', '));

//console.log(books.slice(0, 2));  //начиная с нулевого, вырезает 2 элемента

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
 */

const words = 'ИДИ, МАКАР, К РАКАМ';
 /*
 console.log(words.split(', ').reverce().join()); */
/* Array.prototype.reverse.call(words);
console.log(words); */
/* console.log(words.reverse());
console.log(words.join); */
console.log(words.split(' '));
/* console.log(words.reverse()); */

const a =[1,2,3];
const b =[4,5,6];
console.log(a.concat(b));
