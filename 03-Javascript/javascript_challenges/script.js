//Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
let isNumberPositive = (number) => {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isNumberPositive(4));
console.log(isNumberPositive(-12));

//Write a function that takes a number of days and converts it into an age.
//365 days in year so divide by 365. need to log to 2dp.
const convertDaysToAge = (days) => {

    const convertDaysToAge = days / 365;
    let convertDaysToAgeOutput = convertDaysToAge.toFixed(2);
    const message = `${days} days on earth equals ${convertDaysToAgeOutput} earth years. Happy Birthday!`;
    console.log(message);
}
(convertDaysToAge(26747));

//Write a function that takes three numbers and returns the largest of the three numbers.
//
let getLargestNumber = (number1, number2, number3) => {
    let numbers = [number1 , number2 , number3];
    let largest = 0;

    for (let index=0; index < numbers.length; index++) {
        if (numbers[index] > largest) {
            largest = numbers[index];
        }
    }
    return largest;
}
console.log(getLargestNumber(4, 6, 10));



//Write a function that takes an array of names and returns the last name from the array of names.
let getLastName = (names) => {
    let finalName = (names.length - 1);
    
    for (let index=0; index < names.length; index++) {
        if (index == names.length - 1 ) {
            finalName = names[index];
        }
    }
    return finalName;
}
console.log(getLastName(["james", "jimmy", "karin", "grace", "max", "holly"]));

//Write a function that takes an array of numbers and returns true if all of the numbers are positive.
// It should return false if there are one or more negative numbers in the array.
let allNumbersPositive = (numbers) => {

    for (let index=0; index < numbers.length; index++) {
        if (numbers[index] < 0) {
            return false;
        }
    }
    return true;
}
console.log(allNumbersPositive([1, 3, 6, 9 , 13]));
console.log(allNumbersPositive([1, 3, -6, -9 , 13]));