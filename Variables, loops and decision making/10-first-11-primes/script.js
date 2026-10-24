let numberOfFirstPrimeNumbers = 11
let counter = 0;
for( let i = 0; i < Infinity; i ++){
    if(i == 0 || i == 1) 
        continue
    else if (i == 2 || i == 3 || i == 5){
        console.log(i)
        counter++
    }
    else if (i > 3 && ( i % 2 == 0 || i % 3 == 0 || i % 5 == 0)){
        continue
    }
    else{
        counter++
        console.log(`${i}`);
    }
    if(counter == numberOfFirstPrimeNumbers){
        break
    }
}
