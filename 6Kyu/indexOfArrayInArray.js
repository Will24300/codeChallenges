var arrayToSearch = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
var query = [1, 2];
var searchArray = function (arrayToSearch, query) {
  if (query.length !== 2) throw new Error();
  for (const arr of arrayToSearch) {
    if (arr.length !== 2) {
      throw new Error();
    }

    if (query[0] === arr[0] && query[1] === arr[1]) {
      return arrayToSearch.indexOf(arr);
    }
  }
  return -1;
};
searchArray(arrayToSearch, query);
