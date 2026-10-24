/*
Part A. Create the data
Create an array named books with at least 4 book objects.
*/

let books = [
    {
        bookId: "01",
        title: "Pride and Prejudice",
        Author: "Jane Austen",
        yearPublished: 1813,
        genre: "Classic Romance",
        isAvailable: true
    },
    {
        bookId: "02",
        title: "The Hobbit",
        Author: "J.R.R. Tolkien",
        yearPublished: 1937,
        genre: "Fantasy",
        isAvailable: true
    },
    {
        bookId: "03",
        title: "1984",
        Author: "George Orwell",
        yearPublished: 1949,
        genre: "Dystopian Fiction",
        isAvailable: false
    },
    {
        bookId: "04",
        title: "Sapiens: A Brief History of Humankind",
        Author: "Yuval Noah Harari",
        yearPublished: 2011,
        genre: "Non-Fiction",
        isAvailable: true
    },
    {
        bookId: "05",
        title: "Educated",
        Author: "Tara Westover",
        yearPublished: 2018,
        genre: "Memoir",
        isAvailable: false
    },
    {
        bookId: "06",
        title: "Project Hail Mary",
        Author: "Andy Weir",
        yearPublished: 2021,
        genre: "Science Fiction",
        isAvailable: true
    }
]

/*
Part B. Display all books
Create a function that displays all book records in the console.
*/

function displayAllBooks(){
    books.forEach(b => console.log(b));
}

displayAllBooks();


/*
Part C. Display book titles using map()
Create a function that displays the title of each book.
*/

function displayTitles(){
    let bookTitles = books.map(b => b.title);
    console.log(bookTitles);
}

displayTitles();

/*
Part D. Display available books using filter()
Create a function that displays only books whose isAvailable value is true.
*/

function displayAvailableBooks(){
    let availableBooks = books.filter(b => b.isAvailable != false);
    console.log(availableBooks);
}

displayAvailableBooks();

/*
Part E. Display books published after 2015 using filter()
Create a function that displays only books whose yearPublished is greater than 2015.
*/

function displayBooksPublishedAfter2015(){
    let booksPublishedAfter2015 = books.filter(b => b.yearPublished > 2015);
    console.log(booksPublishedAfter2015);
}

displayBooksPublishedAfter2015();


/*
Part F. Count total books
Create a function that displays the total number of books in the array.
*/

function totalBooks(){
    console.log(`Total number of books: ${books.length}`);
}

totalBooks();


/*
Part G. Count available books using reduce()
Create a function that displays the number of books whose isAvailable value is true.
*/

function totalAvailableBooks(){
    let availableBooks = books.map(b => b.isAvailable === true);
    let countAvailabeBooks = availableBooks.reduce((sum, current) => sum += current,0);
    console.log(`There are ${countAvailabeBooks} books available`);
}

totalAvailableBooks();

/*Part H. Display genres using map()
Create a function that displays only the genre of each book.
*/

function displayGenres(){
    let genres = books.map(b => b.genre);
    console.log(genres);
}

displayGenres();

/*
Part I. Sort books in ascending order
Create a separate function that sorts the books in ascending order and displays the sorted result in the console.
*/

function sortBooks(){
    let sortedBooks = books.slice().sort((a,b) => a.title.localeCompare(b.title));
    console.log(sortedBooks);
}

sortBooks();