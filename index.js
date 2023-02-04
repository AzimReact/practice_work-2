let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '') 
    }
}
start();

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
    if (PersonalMovieDB.count < 10) {
        console.log('malo');
    } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count <= 30) {
        console.log('lubitel');
    } else if (PersonalMovieDB.count > 30) {
        console.log('kinoman');
    }  else {
        console.log('oshibka');
    }    
}
detectPersonalLevel();

function ShowMyDB(hidden) {
    if (!hidden) {
        console.log(PersonalMovieDB);
    }
}
ShowMyDB(PersonalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3;  i++) {
        PersonalMovieDB.genres[i] = prompt(`Which your lovely genre by number ${ i+1 }?`, '')
    }
}
writeYourGenres();


