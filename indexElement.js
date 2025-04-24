const anime = ["rocklee", "jiraya", "ithciraku", "minato", "kushina"];
let index = 3;
console.log(anime[index]);

//Finding index Element using if
if (index >= 0 && index < anime.length) {
  console.log(anime[index], "index using if");
} else {
  console.log("invalid index");
}

//Finding index Element using forEach with condition
index = 4;
const indexElement = anime.forEach((value, each) => {
  if (each === index) {
    console.log(value);
  }
});

//Finding index Element using at() method
const element = anime.at(2);
console.log(element);

//Finding index element using find()
const elementArr = anime.find((_, i) => i === index);
console.log(elementArr);
