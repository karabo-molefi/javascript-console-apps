let colors = ["Red", "Green", "White", "Black"];

// 1. Using join() with a ", " separator
console.log(colors.join(", "));

// 2. Using a loop (no trailing separator)
let str = '';
for (let i = 0; i < colors.length; i++){
    str += colors[i];
    if (i < colors.length - 1){
        str += ", ";
    }
}
console.log(str);

// 3. Using join() with a "+" separator
console.log(colors.join("+"));
