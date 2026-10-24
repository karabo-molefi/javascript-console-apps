# Task
Create a JavaScript console application that uses an array of objects to store and process library book information.

Your program must display all required answers in the console only.

# Scenario
You are required to create a small library record system. Each book must be represented as an object, and all book objects must be stored inside an array.

Your program must then process the data and display the required results in the console.

## Instructions
1. Create an array called books.
2. The array must contain at least 4 book objects.
3. Each book object must contain the following properties:
    - bookId
    - title
    - author
    - yearPublished
    - genre
    - isAvailable
4. The program must use console output only.
5. You must create separate functions for the required operations.
6. A single general function is not enough. There must be a different function for each major task.
7. Use map(), filter(), and reduce() where applicable.
8. Create a separate function to sort the books in ascending order.
9. Write clean, readable JavaScript code.

## Required data structure
Each object must follow this structure:

- bookId: string or number
- title: string
- author: string
- yearPublished: number
- genre: string
- isAvailable: boolean

## Program Requirements
Your application must do the following:

### Part A. Create the data
Create an array named books with at least 4 book objects.

### Part B. Display all books
Create a function that displays all book records in the console.

### Part C. Display book titles using map()
Create a function that displays the title of each book.

### Part D. Display available books using filter()
Create a function that displays only books whose isAvailable value is true.

### Part E. Display books published after 2015 using filter()
Create a function that displays only books whose yearPublished is greater than 2015.

### Part F. Count total books
Create a function that displays the total number of books in the array.

### Part G. Count available books using reduce()
Create a function that displays the number of books whose isAvailable value is true.

### Part H. Display genres using map()
Create a function that displays only the genre of each book.

### Part I. Sort books in ascending order
Create a separate function that sorts the books in ascending order and displays the sorted result in the console.
