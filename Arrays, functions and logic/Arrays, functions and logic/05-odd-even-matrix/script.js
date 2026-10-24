function DisplayArray(arr1, arr2, arr3){
    let evens = new Array();
    let odds = new Array();

    for (let i = 0; i < arr1.length; i++){
        if(arr1[i] % 2 == 0)
            evens.push(arr1[i])
        else
            odds.push(arr1[i])
    };
    for (let i = 0; i < arr2.length; i++){
        if(arr2[i] % 2 == 0)
            evens.push(arr2[i])
        else
            odds.push(arr2[i])
    };
    for (let i = 0; i < arr3.length; i++){
        if(arr3[i] % 2 == 0)
            evens.push(arr3[i])
        else
            odds.push(arr3[i])
    };

    console.log(`EVENS:
        ${evens} 
ODDS:
        ${odds}`);
}

let arr1 = [1,2,3,4,5,6,7];
let arr2 = [10,2,33,99,44,3,324,282];
let arr3 = [34,55,221,2234,321,234,4556,4332189];

DisplayArray(arr1,arr2,arr3);

