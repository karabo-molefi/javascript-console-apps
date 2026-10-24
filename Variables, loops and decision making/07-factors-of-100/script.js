import promptSync from 'prompt-sync';
const prompt = promptSync();


// divide 100 with all numbers from 1 to 100
let num = Number.parseInt(prompt("Enter number: "));
let factors = [];

for (let i = 1; i < num; i++){
    if (num % i == 0){
        factors.push(i)
    }
    }
    
let row ='';
for (let f in factors){
    if(f == (factors.length -1)){
        row+= "and "}
    row +=factors[f];
    row+=`, `;
}

console.log(`The factors of ${num} are ${row.slice(0,-2)}`)