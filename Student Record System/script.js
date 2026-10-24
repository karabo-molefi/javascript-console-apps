/*Part A. Create the data
Create an array named students with at least 4 student objects.
*/

let students = [
    {
        studentNumber: '001',
        name: 'Lawrence',
        surname: 'Pattison',
        age: 20,
        course: 'PRG281',
        isRegistered: true
    },
    {
        studentNumber: '002',
        name: 'Cindy',
        surname: 'Lesiba',
        age: 23,
        course: 'LPR281',
        isRegistered: true
    },
    {
        studentNumber: '003',
        name: 'Katnis',
        surname: 'Everdean',
        age: 19,
        course: 'MAT281',
        isRegistered: true
    },
    {
        studentNumber: '004',
        name: 'Zukhanye',
        surname: 'Mgidi',
        age: 18,
        course: 'INL281',
        isRegistered: false
    }
]

/*
Part B. Display all students
Create a function that displays all student records in the console.
*/

let displayAllStudents = function(){
    students.forEach(s => {
        console.log(s)
    });
}

displayAllStudents();

/*
Part C. Display full names using map()
Create a function that displays the full name of each student in this format:
Name Surname
*/

let displayFullNames = function(){
    let names = students.map(s => s.name);
    let surnames = students.map(s => s.surname);
    for (i = 0; i < names.length; i++){
        console.log(`${names[i]} ${surnames[i]}`);
    }
}

displayFullNames();

/*
Part D. Display registered students using filter()
Create a function that displays only students whose isRegistered value is true.
*/

let showRegisteredStudents = function(){
    let registeredStudents = students.filter(s => s.isRegistered == true);
    console.log(registeredStudents);
}

showRegisteredStudents();

/*
Part E. Display students older than 20 using filter()
Create a function that displays only students whose age is greater than 20.
*/

let showStudentsAgeAbove20 = function(){
    let olderThanTwentyStudents = students.filter(s => s.age > 20);
    console.log(olderThanTwentyStudents);
}

showStudentsAgeAbove20();

/*
Part F. Count total students
Create a function that displays the total number of students in the array.
*/

let totalStudents = function(students){
    console.log(`Total number of students: ${students.length}`);
}

totalStudents(students);

/*
Part G. Count registered students using reduce()
Create a function that displays the number of students whose isRegistered value is true.
*/

let countRegistered = function(){
    let registered = students.map(s=>s.isRegistered == true).reduce((sum,current)=> sum + current,0)
    console.log(`Number of registered students: ${registered}`)
}

countRegistered()


/*
Part H. Display course names using map()
Create a function that displays only the course name for each student.
*/

let showCourseNames = function(){
    let courseNames = students.map(s => s.course)
    courseNames.forEach(c => console.log(c))
}

showCourseNames();

/*

Part I. Sort students in ascending order
Create a separate function that sorts the students in ascending order and displays the sorted result in the console.
*/

let sortedStudents = function(){
    let order = students.toSorted((a,b) => a.name.localeCompare(b.name))

    console.log(order);
}

sortedStudents();