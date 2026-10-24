import promptSync from 'prompt-sync';
const prompt = promptSync();

let myUserName = 'admin';
let myPassword = 'password123';
let isLoggedIn = false;

for(let i = 0; i < 3; i++){

    let userName = prompt('Enter username:');
    let passWord = prompt('Enter password: ');
    
    if (!(userName == myUserName && passWord == myPassword)){
        console.log("Wrong username or password try again.");
        continue;
    }
    else{
        isLoggedIn = true;
        break;
    }
}

if(isLoggedIn)
            console.log("Correct username and password! You are now logged in!");
else
    console.log('Three wrong attempts, goodbye!');
