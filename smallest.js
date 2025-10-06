function smallest(n) {
  let str = String(n);
  let smallest = Number(str[0]);
  const myArr = str.split("");
  for (const num of str) {
    if (smallest > Number(num)) smallest = Number(num);
  }
  const indexNum = str.indexOf(String(smallest));
  myArr.splice(indexNum, 1);
  myArr.unshift(str[indexNum]);
  const joinedArr = Number(myArr.join(""));

  if (joinedArr < n) {
    return [joinedArr, 0, indexNum];
  } else {
    const arr = String(joinedArr).split("");
    arr.shift();
    arr.push(str[indexNum]);
    return [Number(arr.join("")), arr.length - 1, indexNum];
  }
}
// smallest(209917);
// smallest(296837);
// const result = smallest(269045);
const result = smallest(269045);
console.log(result);

// 296837, [239687, 4, 1]
