let calculateTax = (salary) =>{
    let outStr = 'Your tax is ';
    if(salary < 8000)
        console.log(`${outStr}R${salary*0.15}`);
    else if(salary > 8000 && salary <12000)
        console.log(`${outStr}R${salary*0.20}`);
    else if(salary>12000)
        console.log(`${outStr}R${salary*0.25}`);
}

let salary = Number.parseInt(prompt('Enter salary: '));

calculateTax(salary);
