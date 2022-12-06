'use strict';

let helloFriendQuestion

function helloFriendFunc () {
    helloFriendFunc = +prompt("Hello friend... u really wont talk with me?", ''); 

    if (helloFriendFunc == '') {
        console.log('She or he doesnt talk with u:(')
    } else if (helloFriendFunc == !0) {
        console.log('what?')
    } else {
        console.log('all right')
    }; 

}; 

helloFriendFunc();

const aboutUserDB = {
    count: helloFriendFunc,
    movies: {},
    reaction: {},
    genres: [],
    topFilm: [],
    privat: true
};

console.log(aboutUserDB);

function questionsForTheUser () {
    const a = prompt('One of the last movies you watched?', ''),
          b = prompt('How much would you rate him?', '')
    
    if (a != null && b != null && a != '' && b != '' && a.length < 59) {
        aboutUserDB.movies[a] = b; 
        console.log('done');
    } else {
        console.log('Error404')
    };

};

questionsForTheUser();

function secondQuestionsForTheUser () {
    let c = +prompt('how many films have you watched? "The answer is in numbers only!" ', '');

    while(c == '' || c == null || isNaN(c)){

        c = +prompt('how many films have you watched? "The answer is in numbers only!" ', '');
    }; 
    
    aboutUserDB.reaction = c

    if (aboutUserDB.reaction < 30) {
        console.log('this is a classic user')
    } else if (aboutUserDB.reaction < 50) {
        console.log('average quantity')
    } else if ( aboutUserDB.reaction < 100 ) {
            console.log('lots of')
    } else {
        console.log('Error')
    }

};

secondQuestionsForTheUser();


function writeYourGenres () {

     for (let i = 1; i <= 3; i++) {
        const genres = prompt (` your favorite movie genre  ${i} `); 
        aboutUserDB.genres [i - 1] = genres
     };

     for (let i = 1; i <= 3; i++) {
        const topFilms = prompt (` top 3 favorite movies ${i} `); 
        aboutUserDB.topFilm [i - 1] = topFilms
     };

};

writeYourGenres();