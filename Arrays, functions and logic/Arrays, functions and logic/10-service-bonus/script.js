let salary = Number.parseInt(prompt('Enter salary amount: '));
let numYears = Number.parseInt(prompt('How long have you been in service? '));
Number.In
let getBonus = (salary, years)=>{
    let bonus = 0;
    if(years >= 5){
        bonus = 0.5*salary
    }    
    console.log(`Salary:    ${salary}`);
    console.log(`Bonus :    ${bonus}`);
    console.log(`Total :    ${salary + bonus}`);
}

getBonus(salary, numYears);