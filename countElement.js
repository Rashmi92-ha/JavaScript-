//Usig reduce() finding the count  the array element
const array = ["yes", "no", "no", "yes", "none", "no", "none", "no"];
const count = array.reduce((acc, ele) => {
  acc[ele] = (acc[ele] || 0) + 1;
  return acc;
}, {});
console.log(count);

// Using filter() and length
const num = array.filter((ele) => ele === "yes").length;
console.log(num);

//Using for loop
let arr = [1, 4, 6, 3, 554, 33, 2, 1, 1, 554, 6, 4, 3, 33, 33, 4, 6];
let round = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 33) {
    round++;
  }
}
console.log(round);

//using reduce()
const result = arr.reduce((acc, element) => {
  return element === 4 ? acc + 1 : acc;
}, 0);
console.log(result);

//Using foreach()
let recount = 0;
arr.forEach((item) => {
  if (item === 554) {
    recount++;
  }
});
console.log(recount);
