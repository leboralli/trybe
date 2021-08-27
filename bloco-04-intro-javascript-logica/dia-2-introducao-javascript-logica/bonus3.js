let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMult = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    numbersMult.push(numbers[index] * numbers[index + 1]);
  } else {
    numbersMult.push(numbers[index] * 2);
  }
}

console.log(numbersMult);

if (numbers[10] == null){
  console.log("é nulo");
}
