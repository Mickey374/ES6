class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }


    //Add a function
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'Barnes & Nboles';
    }
}


//Instantiate an object
const book1 = new Book('Book One', 'John Cena', '2013');
// console.log(book1);
// book1.revise(2020);
// console.log(book1);

// How to call a static method in a Class
// console.log(Book.topBookStore());

//Magazine Sub-Class
class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

//Instantiate magazine
const mag1 = new Magazine('Mag one', 'Michael Asante','2015', 'July');
console.log(mag1.getSummary());