# Task
Create a JavaScript console application that uses an array of objects to store and process student information.
Your program must display all required answers in the console only.

# Scenario
You are required to create a small student record system for a class. Each student must be represented as an object, and all student objects must be stored inside an array.

Your program must then process the data and display the required results in the console.

## Instructions
1. Create an array called students.
2. The array must contain at least 4 student objects.
3. Each student object must contain the following properties:
    - studentNumber
    - name
    - surname
    - age
    - course
    - isRegistered
4. The program must use console output only.
5. You must create separate functions for the required operations.
6. A single general function is not enough. There must be a different function for each major task.
7. Use map(), filter(), and reduce() where applicable.
8. Create a separate function to sort the students in ascending order.
9. Write clean, readable JavaScript code.

## Required data structure
Each object must follow this structure:

- studentNumber: string or number
- name: string
- surname: string
- age: number
- course: string
- isRegistered: boolean

## Program Requirements
Your application must do the following:

### Part A. Create the data
Create an array named students with at least 4 student objects.

### Part B. Display all students
Create a function that displays all student records in the console.

### Part C. Display full names using map()
Create a function that displays the full name of each student in this format:
Name Surname

### Part D. Display registered students using filter()
Create a function that displays only students whose isRegistered value is true.

### Part E. Display students older than 20 using filter()
Create a function that displays only students whose age is greater than 20.

### Part F. Count total students
Create a function that displays the total number of students in the array.

### Part G. Count registered students using reduce()
Create a function that displays the number of students whose isRegistered value is true.

### Part H. Display course names using map()
Create a function that displays only the course name for each student.

### Part I. Sort students in ascending order
Create a separate function that sorts the students in ascending order and displays the sorted result in the console.
