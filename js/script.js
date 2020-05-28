// Examples of code
"use strict"; // Using modern style
//document.write(1,2,3);

const numberOfFilms = prompt('Сколько фильмов вы посмотрели?','0');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false
};

const lastMovie1 = prompt('Один из последних фильмов?','');
const movieScope1 = prompt('Его оценка?','');

const lastMovie2 = prompt('Один из последних фильмов?','');
const movieScope2 = prompt('Его оценка?','');

personalMovieDB.movies[lastMovie1] = movieScope1;
personalMovieDB.movies[lastMovie2] = movieScope2;


console.log(personalMovieDB);