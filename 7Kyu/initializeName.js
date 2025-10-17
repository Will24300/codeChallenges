function initializeNames(name) {
  const myArr = name.split(" ");
  let firstName;
  let lastName;
  let middle = "";
  if (myArr.length < 3) return name;
  else {
    firstName = myArr.shift();
    lastName = myArr.pop();
    for (const char of myArr) {
      middle += `${char[0]}. `;
    }
  }
  return `${firstName} ${middle}${lastName}`;
}
// const result = initializeNames('Alice Betty Catherine Davis');
const result = initializeNames("Jack Ryan");
console.log(result);
