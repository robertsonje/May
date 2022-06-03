function sumOfOddDigits(number) {
    if (number >= 1000000) {
        console.log("Input number is more than six digits large");
    } else {
        let digits = "" + (parseInt(number) % 1000000);
        let accumulator = 0;
        let singleDigit = 0;
        for (let i = 0; i < 6; i++) {
            singleDigit = Number(digits[i]);
            if ((singleDigit % 2) == 1) {
                accumulator += singleDigit;
            }
        }
        console.log("Sum of odd digits of " + number + " is " + accumulator);
    }
}

function sumOfOddPlacedDigits(number) {
    if (number >= 1000000) {
        console.log("Input number is more than six digits large");
    } else {
        let digits = "" + parseInt(number);
        let accumulator = 0;
        for (let i = 0; i < 6; i += 2) {
            accumulator += Number(digits[i]);
        }
        console.log("Sum of odd placed digits of " + number + " is " + accumulator);
    }
}

sumOfOddPlacedDigits(123456);
sumOfOddPlacedDigits(234567);
sumOfOddPlacedDigits(123456.789);
sumOfOddPlacedDigits(999999);
sumOfOddPlacedDigits(888888);
sumOfOddPlacedDigits(1000000);