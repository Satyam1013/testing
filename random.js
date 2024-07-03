let currentNumber = 1;
const maxNumber = 4;

setInterval(() => {
    console.log(currentNumber);
    currentNumber = (currentNumber % maxNumber) + 1;
}, 1000);