'use strict';
/* let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

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
 */





// ================================================
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
/* for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
} */

/* let result = '';
let leng = 7;

for (let i = 1; i < leng; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';

    }
    result += '\n';
}

console.log(result); */

/* first: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) {
                break first;
            }
            console.log(`Third level ${k}`);
        }
    }
} */
// 1

/* for (let i = 5; i < 11; i++) {
    console.log(i);
}
//
let num = 5;
while (num <= 10) {
    console.log(num);
    num++;
} */

// 2
/* for (let i = 20; i >= 10; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
} */

// 3
/* for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
} */

// 4
/* for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
// OR
let num = 2;
while (num <= 16) {
    num++;
    if (num % 2 === 0) {
        continue;
    } else {
        console.log(num);
    }
} */



// 5
/* const arrayOfNumbers = [];


for (let i = 5; i < 11; i++) {

    for (let j = 0; j < i; j++) {
        arrayOfNumbers[i - 5] = i;
    }
}
console.log(arrayOfNumbers); */

// 1*
/* function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];

    }
    console.log(result);

    // Не трогаем
    return result;
}
firstTask(); */

// 2*
/* function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
            if (typeof(data[i]) === 'number') {
                data[i] = data[i] * 2;
            } else if (typeof(data[i]) === 'string') {
                data[i] = `${data[i]} - done`;
            }
    }
    console.log(data);

    // Не трогаем
    return data;
}
secondTask(); */

// 3*
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i];
        
    }
    console.log(result);

    // Не трогаем
    return result;
}
thirdTask();
