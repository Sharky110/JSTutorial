// Examples of code
"use strict"; // Using modern style
//document.write(1,2,3);

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        this.count = +prompt('Сколько фильмов вы посмотрели?', '0');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы посмотрели?', '0');
        }
    },
    rememberMyFilms: function () {
        let movieName = "";
        let movieScope = "";

        for (let i = 0; i < this.count; i++) {
            movieName = prompt('Введите название фильма?', '');
            movieScope = prompt('Его оценка?', '');

            if (movieName != null && movieScope != null &&
                movieName != '' && movieScope != '' && movieName.length <= 50) {
                personalMovieDB.movies[movieName] = movieScope;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Очень мало');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert('Норм');
        } else if (personalMovieDB.count > 30) {
            alert('Киноман!');
        } else {
            alert('Ошибка!');
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        let genre = '';
        for (let i = 0; i < 3; i++) {
            genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (genre != null && genre != '') {
                personalMovieDB.genres[i] = genre;
            } else {
                i--;
            }
        }
        for (let i = 0; i < personalMovieDB.genres.length; i++) {
            console.log(`Любимый жанр #${i+1} - это ${personalMovieDB.genres[i]}`);
        }
    },
    toggleVisibleMyDB: function () {
        this.private = !this.private;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();