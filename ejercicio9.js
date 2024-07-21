const numbers = [1, 2, 3, 5, 45, 37, 58];
let Total = 0;

function sumNumbers(numberList) {
    for(let i=0; i < numbers.length; i++) {Total+=numbers[i]}
    return(Total);
}

console.log(sumNumbers(numbers));