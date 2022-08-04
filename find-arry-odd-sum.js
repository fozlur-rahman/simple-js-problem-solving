function findOddSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 != 0) {
            sum = sum + number;
        }
    }
    return sum;
}
const myNumbers = [5, 7, 8, 10, 45, 30];
const getOddSum = findOddSum(myNumbers);
console.log(getOddSum);