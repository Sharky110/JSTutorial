// Examples of code
"use strict"; // Using modern style
//document.write(1,2,3);

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '0');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '0');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let movieName = "";
let movieScope = "";
let enough = true;

function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
        movieName = prompt('Введите название фильма?', '');
        movieScope = prompt('Его оценка?', '');

        if (movieName != null && movieScope != null &&
            movieName != '' && movieScope != '' && movieName.length <= 50) {
            personalMovieDB.movies[movieName] = movieScope;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Очень мало');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('Норм');
    } else if (personalMovieDB.count > 30) {
        alert('Киноман!');
    } else {
        alert('Ошибка!');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
}
writeYourGenres();