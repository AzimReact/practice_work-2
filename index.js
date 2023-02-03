const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
// console.log(numberOfFilms);

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

if (PersonalMovieDB.count < 10) {
    console.log('malo');
} else if (PersonalMovieDB.count > 10 && PersonalMovieDB < 30) {
    console.log('lubitel');
} else if (PersonalMovieDB.count > 30) {
    console.log('kinoman');
}  else {
    console.log('oshibka');
}

for (let i = 0; i < 2; i++) {

    let a = prompt('Какой последний фильм ты посмотрел?', '')
    let b = +prompt('На сколько ты его оценишь?', '')

    if(a != null && b != null && a != '' && b != '' && a.length < 50){

        PersonalMovieDB.movies[a] = b
        console.log('done');
    } else{

        i--
        console.log("error");
    }
}

console.log(PersonalMovieDB);

