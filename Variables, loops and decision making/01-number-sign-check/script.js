import promptSync from 'prompt-sync';
const prompt = promptSync();

let num1 = Number.parseInt(prompt("Enter number: "))

console.log(num1)
let ans;

if (num1 > 0)
    ans = "Positive"
else if (num1 < 0)
    ans = "Negative"
else
    ans = "Zero"

console.log(ans)