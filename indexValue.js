const arrayOfObject = [
  {
    id: 1,
    name: "zenitsu",
  },
  {
    id: 2,
    name: "nezuko Kamado",
  },
  {
    id: 3,
    name: "Tanjiro kamado",
  },
];

const elements = arrayOfObject.findIndex((each) => each.id === 2);
console.log(elements);
console.log(arrayOfObject[elements]);
