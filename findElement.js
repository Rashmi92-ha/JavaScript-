//Using includes()
const fruits = ["Apple", "Banana", "Graphe", "Mango", "Jackfruit"];
const newFruit = fruits.includes("Graphe");
console.log(newFruit);

//using indexOf()
const indexFruit = fruits.indexOf("Mango") !== -1;
console.log(indexFruit);

//Using find()
const users = [
  {
    name: "Rashmi",
    age: 24,
  },
  {
    name: "Chandrakanth",
    age: 26,
  },
];

const userName = users.find(each => each.name === "Rashmi");
console.log(userName)
