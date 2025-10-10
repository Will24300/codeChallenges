var arr = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];
function split(arr) {
  const firstArr = [];
  const secondArr = [];
  for (const subArr of arr) {
    secondArr.push([subArr.length]);
    for (const subSubArr of subArr) {
      firstArr.push(subSubArr);
    }
  }
  return [[...firstArr], [...secondArr]];
}
split(arr);

//Test.assertSimilar(split(arr) , [[1,2,3,4,5,6,7,8,9,10],[[1],[2],[3],[4]]])

// Test.assertSimilar(join(arr1,arr2) , [[1],[2,3],[4,5,6],[7,8,9,10]])
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  arr2 = [[1], [2], [3], [4]];
function join(arr1, arr2) {
  const result = [];
  let index = 0;
  const sizes = [];
  for (const arr of arr2) {
    for (const subArr of arr) {
      sizes.push(subArr);
    }
  }
  for (const size of sizes) {
    const chunk = arr1.slice(index, index + size);
    result.push(chunk);
    index += size;
  }
  return result;
}
join(arr1, arr2);
