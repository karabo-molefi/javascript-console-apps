import promptSync from 'prompt-sync';
const prompt = promptSync();

let expression = prompt('Enter the expression: ');

let splitExpression = expression.split(" ");

let op1 = Number.parseInt(splitExpression[0]);
let op2 = Number.parseInt(splitExpression[2]);

switch (splitExpression[1]){
    case '+':
        console.log(op1+op2);
        break;
    case '-':
        console.log(op1-op2);
        break;
    case '*':
        console.log(op1*op2);
        break;
    case '/':
        console.log(op1/op2);
        break;
    default:
        console.log('Invalid');
}
