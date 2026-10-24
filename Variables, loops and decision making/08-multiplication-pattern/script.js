let rows = 15

for (let i = 1; i < rows; i++){
    let row='';
    for(let j =1; j<= i; j++){
        row+='-'
        row+=j*i
        row+='-'
    }
    console.log(row);
}