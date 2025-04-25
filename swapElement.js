//Using a Temporary variable
const array = ["Minato", "Kushina", "Naruto", "Hinata"];
let temp = array[0];
array[0] = array[array.length - 1];
array[array.length - 1] = temp;
console.log(array);

//Using the shift() and pop()
let firstElement = array.shift();
let lastElement = array.pop();

array.unshift(firstElement);
array.push(lastElement);

console.log(array);
