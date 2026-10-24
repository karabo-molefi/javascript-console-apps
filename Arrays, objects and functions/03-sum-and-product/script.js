let arr2 = [1, 2, 3, 4, 5, 6];

let sum = 0;
let product = 1;

for (let i = 0; i < arr2.length; i++){
    sum += arr2[i];
    product *= arr2[i];
}

console.log(sum);
console.log(product);

let sum1 = arr2.reduce((sum, current) => sum + current,0);

let sum2 = arr2.reduce(function(sum, current){return sum + current;} ,0);

console.log(sum2);

let prod1 = arr2.reduce((prod, current)=> prod * current, 1);
let prod2 = arr2.reduce(function(prod, current){return prod * current;},1);

console.log(prod1);
console.log(prod2);
