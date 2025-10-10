function sc(chars) {
  const names = [
    "dog",
    "cat",
    "bat",
    "cock",
    "cow",
    "pig",
    "fox",
    "ant",
    "bird",
    "lion",
    "wolf",
    "deer",
    "bear",
    "frog",
    "hen",
    "mole",
    "duck",
    "goat",
  ];
  const myArr = [];
  for (const name of names) {
    function myFunc(str, target) {
      for (let char of target) {
        if (!str.includes(char)) {
          return false;
        } else {
          myArr.push(target);
        }
      }
    }
    myFunc(chars, name);
  }
  console.log(myArr);
}
sc("bcaatt");
// ("bcaatt", 2);
