const PersonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        PersonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
        while ( PersonalMovieDB.count == "" || 
                PersonalMovieDB.count == null || 
                isNaN(PersonalMovieDB.count ) ) {
            PersonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '') 
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
    
            let a = prompt('Какой последний фильм ты посмотрел?', '')
            let b = +prompt('На сколько ты его оценишь?', '')
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                PersonalMovieDB.movies[a] = b
                console.log('done');
            } else {
                i--
                console.log("error");
            }
        }
    },
    detectPersonalLevel: function () {
        if (PersonalMovieDB.count < 10) {
            console.log('malo');
        } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count <= 30) {
            console.log('lubitel');
        } else if (PersonalMovieDB.count > 30) {
            console.log('kinoman');
        }  else {
            console.log('oshibka');
        }    
    },
    ShowMyDB: function(hidden) {
        if (!hidden) {
            console.log(PersonalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3;  i++) {
            PersonalMovieDB.genres[i] = prompt(`Ваш любимый фильм под номером ${ i+1 }?`)
            
            while(!PersonalMovieDB.genres[i]) {
                PersonalMovieDB.genres[i] = prompt(`Ваш любимый фильм под номером ${ i+1 }?`)
            }

            //--------------------2version
            // let genre  = prompt(`Ваш любимый фильм под номером ${ i+1 }?`)

            // if (genre === '' || genre === null) {
            //     console.log('Вы ввели некорректные данные или ввели не все!');
            //     i--
            // } else {
            //     PersonalMovieDB.genres[i] = genre
            // }

                        //--------------------3version
            // let genres  = prompt(`Введите фильмы через запятую`)

            // if (genres === '' || genres === null) {
            //     console.log('Вы ввели некорректные данные или ввели не все!');
            //     i--
            // } else {
            //     PersonalMovieDB.genres = genres.split(', ')
            //     PersonalMovieDB.genres.sort();
            // }
        };
        PersonalMovieDB.genres.sort()

        PersonalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        })
        console.log(PersonalMovieDB.genres);

    },
    toggleVisibleMyDB: function() {
        PersonalMovieDB.privat = !PersonalMovieDB.privat
    }

};
// PersonalMovieDB.start()
// PersonalMovieDB.rememberMyFilms();
// PersonalMovieDB.detectPersonalLevel();
// PersonalMovieDB.ShowMyDB(PersonalMovieDB.privat);
// PersonalMovieDB.writeYourGenres();

// 2. Задание
// PersonalMovieDB.toggleVisibleMyDB()
// console.log(PersonalMovieDB.privat);

// 3. Задание
PersonalMovieDB.writeYourGenres()



// --------------------------------Practice_work-4-------------------------------------------

// Колбэк-функция (или обратный вызов) - это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия.

// 0. Что такое callback-функция( функция обратного вызова)

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback()
// }

// learnJS(python, function() {
//     console.log('Сегодня понял колбеки функции');
// })

// 1. Цикл for in - для пробежки по обьекту

// const myObject = {
//     count: 30,
//     movies: {},
//     actors: {
//         comedy: "adam sendler",
//         anime: "naruto uzumaki"
//     },
//     genres: [],
//     privat: false
// }

// for (let key in myObject) {
//     console.log(key); // - ключи 
//     console.log(myObject[key]); // - свойства
// }

// 2. Как узнать длину элементов обьекта
// console.log(Object.keys(myObject).length);

//3. Как вытащить значения объекта в объекте 

// for (let key in myObject) {
//     if (typeof(myObject[key]) === 'object') {
//         for (let i in myObject[key]) {
//             console.log(myObject[key][i]);
//         }
//     } else console.log(myObject[key]);
// }

//3. Деструктуризация объекта (es6)

// const {comedy, anime} = myObject.actors;
// console.log(comedy);

// 4. Удаление объекта
// delete myObject.count

// 5. Объекты != функции?

// const person = {
//     name: 'azim',
//     age: 23, 
//     hasJob: false, 
//     sayHi: function () {
//         console.log("Hi", this.name );
//     }

// }

// person.sayHi()

// 6. Сортировка. Метод сорт сравнивает строки и раставляет по алфавиту, но можно и числа отсортировать (метод сорт под капотом использует алгоритм быстрой сортировки)

// const arr = [1, 45, 34, 2, 222]

// arr.sort(compareFunction)

// function compareFunction(a, b){
//     return a - b
// }

// console.log(arr);

// 7. Псевдомассивы - массивы без методов

// 8. Передача по ссылке и по значениям. Пока что умею делать поверхностную копию объекта

// Object.assign(объект который хотим скопировать, новый объект)

// 9. Оператор разворота spread ...


//10. ООП 

// const human = {
//     age: 0,
//     hasBody: true,
//     body: {

//     }
// }

// const azim = Object.create(human)
// console.log(azim);