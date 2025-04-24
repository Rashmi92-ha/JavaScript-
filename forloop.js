const anime = ["naruto", "sasuke", "Hinata", "Sakura"];

//Using for loop;
for (i = 0; i < anime.length; i++) {
  let elements = anime[i];
  console.log(elements);
}

//Using foEach
anime.forEach((each) => console.log(each));

//using for...of
for (let character of anime) {
  console.log(character);
}
