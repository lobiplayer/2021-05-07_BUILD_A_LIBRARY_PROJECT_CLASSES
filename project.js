/* firt make the parent class Media*/
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._rating = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get rating() {
        return this._rating;
    }
    getAverageRating() {
        return this._rating.reduce((acc, value) => value + acc, 0) / this._rating.length; /* the reduce function sums up all te values in the array, then it will return this divided by the lengths of the array*/
    }
    toggleCheckOutStatus(status) {
        this._isCheckedOut = status;
    }
    addRating(rating) {
        this._rating.push(rating);
    }
}
/* below are the three subclasses created*/
class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

class cd extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
}

/*adding an instance of movies, then add two ratings and then recall the average of Matrix*/
const matrix = new Movie('The Matrix', 'The Director', 130)

matrix.addRating(5);
matrix.addRating(10);

console.log(matrix.getAverageRating())