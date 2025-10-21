var searchArray = function (arrayToSearch, query) {
  let index;
  if (query.length !== 2) throw new Error("Something went wrong");
  for (var i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i].length !== 2) {
      throw new Error("Something went wrong");
    }
    for (let y = 0; y < arrayToSearch[i].length; y++) {
      if (arrayToSearch[i][y] === query[y]) {
        index = i;
        break;
      } else {
        index = -1;
      }
    }
  }
  console.log(index);
  return index;
};
searchArray(
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  [9, 2]
);
