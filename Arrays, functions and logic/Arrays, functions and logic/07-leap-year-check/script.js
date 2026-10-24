let isLeapyear = function(year) {return year%4 == 0};

let displayYear = function(year){
    if(isLeapyear(year))
        console.log(`${year} is a leap year`);
    else
        console.log(`${year} is not a leap year`);
}

displayYear(2009)

