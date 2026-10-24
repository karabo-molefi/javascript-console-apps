let person1 = {
    name: 'ryan',
    role: 'lecturer'
}

let getUserAccess = function(person){
    switch(person.role.toLowerCase()){
        case 'student':
            console.log(`${person.name}: Access to read tests`);
            break;
        case 'lecturer':
            console.log(`${person.name}: Access to create and delete tests`);
            break;
        case 'admin':
            console.log(`${person.name}: All access`)
            break;
        default:
            console.log(`${person.name}: trial user`);
    }

}

getUserAccess(person1);