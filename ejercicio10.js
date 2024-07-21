const numbers = [12, 21, 38, 5, 45, 37, 6];
let Total=0;

function average(numberList) {
  for(let i=0; i < numbers.length; i++) {Total+=numbers[i]}
  return(Total/2);
}

console.log(average(numbers));