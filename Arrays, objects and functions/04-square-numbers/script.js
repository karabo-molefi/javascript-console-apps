var arr3 = [1, 2, 3, 4];

let squares = [];
for (let i = 0; i < arr3.length; i++){
    squares.push(arr3[i]**2);
}
console.log(`${arr3.join(", ")} produces ${squares.join(", ")}`);

let squares2 = Array.from(arr3, a => a **2);
console.log(`${arr3.join(", ")} produces ${squares2.join(", ")}`);
