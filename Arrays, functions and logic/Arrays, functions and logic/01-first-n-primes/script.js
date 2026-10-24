function getPrimeNumbers(n){
    let primeNumbers = [2,3,5];
    if (n === 1){
        console.log(primeNumbers[0]);
    }
    else if (n === 2){
        console.log(`${primeNumbers[0]}\n${primeNumbers[1]}`);
    }
    else if (n === 3){
        console.log(`${primeNumbers[0]}\n${primeNumbers[0]}\n${primeNumbers[0]}`);
    }
    else {
        for (let i = 5; i < Infinity; i++){
            if ( i % 2 === 0 || i % 3 === 0 || i % 5 === 0){
                continue;
            }
            primeNumbers.push(i)
            if (primeNumbers.length == n){
                break;
            } 
        }
        for (let p of primeNumbers ){
        console.log(p);
    }
    }
    
}

getPrimeNumbers(11);