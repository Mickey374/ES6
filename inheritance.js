
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//Get Summary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};


//Create a Magazine Object
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}
//Inheritng Prototype from the Constructor
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine object
const mag1 = new Magazine('Mag One', 'Michael Asante', '2019', 'July');

//Use Magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);