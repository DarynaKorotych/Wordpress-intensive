'use strict';
let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



/* const arr = ['a', 'b', 'c'];
const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
};

const b = 'asd';

// arrObj.b = 'qwerty';
// arrObj['b'] = 'qwerty';
arrObj[b] = 'qwerty';

// console.log(arrObj['b']);
console.log(arrObj.b);
console.log(arrObj); */
// ===============================================
/* let storeName = 'HatHat';
const storeDescription = {
    budget: 10000,
    employees: ['Ivan', 'Jack', 'Maria'],
    products: {
        hatSmall: 150,
        hatBig: 300
    },
    open: false
};

console.log(storeDescription.open); */
// ==============================================
/* const answers = [];
answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your first name?', '');
answers[2] = prompt('How old are you?', ''); */
// ================================================
/* const category = 'toys';

console.log(`category ${category}`); */
// ==================================================
/* let incr = 10,
    decr = 10; */
/* incr++;
decr--; */
/* ++incr;
--decr; */

/* console.log(incr++);
console.log(decr--); */
/* console.log(incr);
console.log(decr); */
// ==========================================



