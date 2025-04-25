//Using map() for immutable Replacement
const ninja = ["Neji", "Gara", "Shikaaru", "Akamaru"];
const replaceElement = ninja.map((each, index) =>
  index === 1 ? "updated" : each
);
console.log(replaceElement);

//Using findIndex() and Direct Assignment
const index = ninja.findIndex((element) => element === "Gara");
if (index !== -1) {
  ninja[index] = "updated";
}
console.log(ninja);

//Using forEach() for in-place Modification
const value = ninja.forEach((each, index, array) => {
  if (index === 1) {
    array[index] = "updated";
  }
});
console.log(ninja);

//Using slice() and concatinate() for immutable replacement
const newArray = ninja.slice(0, 1).concat("updated", ninja.slice(2));
console.log(newArray);

//Using Spread Operator and slice () for immutable replacement
const array = ["first", "second", "Third"];
const shallowArray = [...array.slice(0, 1), "Updated", ...array.slice(2)];
console.log(shallowArray, "shallow");
