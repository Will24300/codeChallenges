function solution(array) {
  const max = Math.max(...array);
  let dup = 0;
  let missing = max + 1;
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
      dup = array[i];
    }
  }
  const numbers = [];
  for (let i = 1; i <= max; i++) {
    numbers.push(i);
  }
  const str = array.join("");

  for (const num of numbers) {
    if (!str.includes(num)) {
      missing = num;
    }
  }

  return [missing, dup];
}

const res = solution([2, 4, 1, 6, 3, 4]);
// const res = solution([2,2]);
// const res = solution([ 2, 3, 1, 3, 4, 5 ]);
console.log(res);
