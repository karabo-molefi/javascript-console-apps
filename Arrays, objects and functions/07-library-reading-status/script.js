var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];


for (let book of library){
    if(book.readingStatus == false)
        console.log(`You still need to read '${book.title}' by ${book.author}.`);
    else
        console.log(`Already read '${book.title}' by ${book.author}.`);
}
