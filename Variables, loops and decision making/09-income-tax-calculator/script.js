import promptSync from 'prompt-sync';
const prompt = promptSync();

let salary = Number.parseInt(prompt("Enter salary"));
//let salary = 205901;
let taxed = 0;

if (salary >= 1 && salary <= 205900){
    taxed = 0.10 * salary;
}
else if(salary >= 205901 && salary <= 321600){
    taxed = 37062 + (0.26 * (salary - 205900))
}
else if(salary >= 321601 && salary <= 445100){
    taxed = 67144 + (0.31 * (salary - 321600))
}
else if(salary >= 445101 && salary <= 584200 ){
    taxed = 105429 + (0.36 * (salary - 445100))
}
else if(salary >= 584201 && salary <= 744800 ){
    taxed = 155505 + (0.39 * (salary - 584200))
}
else if(salary >= 744801 && salary <= 1577300 ){
    taxed = 218139 + (0.41 * (salary - 744800))
}
else{
    taxed = 559464 + (0.45 * (salary - 1577300))
}


console.log(`
    Salary:     R${salary} 
    Deductions: R${taxed}
    -----------------------
    Net Income: R${salary - taxed}`)

