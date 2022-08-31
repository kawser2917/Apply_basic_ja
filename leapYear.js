function leapYear(year){
    let remainder = year%4;
    if (remainder == 0){
        return true;
    }

    else{
        return false;
        }
}

let checkLeapYear = leapYear(2024);
console.log(checkLeapYear);



