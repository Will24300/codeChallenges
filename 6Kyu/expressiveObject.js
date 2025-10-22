function evaluate(left, op, right) {
  let sumLeft;
  let sumRight;
  for (let key in left) {
    let sum = 0;
    let difference = 0;
    let product = 0;
    let quotient = 0;

    if (left.hasOwnProperty(key)) {
      const nestedObj = left[key];
      for (let nestedKey in nestedObj) {
        if (nestedObj.hasOwnProperty(nestedKey)) {
          if (nestedKey === "add") {
            sum = nestedObj[nestedKey].reduce((a, b) => a + b);
          }
          if (nestedKey === "subtract") {
            difference = nestedObj[nestedKey].reduce((a, b) => a - b);
          }
          if (nestedKey === "multiply") {
            product = nestedObj[nestedKey].reduce((a, b) => a * b);
          }
          if (nestedKey === "divide") {
            quotient = nestedObj[nestedKey].reduce((a, b) => a / b);
          }
        }
      }
    }
    if (key === "add") sumLeft = sum + difference + product + quotient;
    if (key === "subtract") sumLeft = sum - difference - product - quotient;
    if (key === "multiply") sumLeft = sum * difference * product * quotient;
    if (key === "divide") sumLeft = sum / difference / product / quotient;
  }

  for (let key in right) {
    let sum = 0;
    let difference = 0;
    let product = 0;
    let quotient = 0;

    if (right.hasOwnProperty(key)) {
      const nestedObj = right[key];
      for (let nestedKey in nestedObj) {
        if (nestedObj.hasOwnProperty(nestedKey)) {
          if (nestedKey === "add") {
            sum = nestedObj[nestedKey].reduce((a, b) => a + b);
          }
          if (nestedKey === "subtract") {
            difference = nestedObj[nestedKey].reduce((a, b) => a - b);
          }
          if (nestedKey === "multiply") {
            product = nestedObj[nestedKey].reduce((a, b) => a * b);
          }
          if (nestedKey === "divide") {
            quotient = nestedObj[nestedKey].reduce((a, b) => a / b);
          }
        }
      }
    }
    if (key === "add") sumRight = sum + difference + product + quotient;
    if (key === "subtract") sumRight = sum - difference - product - quotient;
    if (key === "multiply") sumRight = sum * difference * product * quotient;
    if (key === "divide") sumRight = sum / difference / product / quotient;
  }

  if (op === "add") {
    return sumLeft + sumRight;
  }
  if (op === "subtract") {
    return sumLeft - sumRight;
  }
  if (op === "multiply") {
    return sumLeft * sumRight;
  }
  if (op === "divide") {
    return sumLeft / sumRight;
  }
}

const left = {
  multiply: {
    add: [1, 2, 3, 4, 5],
    subtract: [5, 6, 7, 8, 9],
    multiply: [1, 2, 3, 4, 5],
    divide: [1, 2, 3, 4, 5],
  },
};
// You will reduce each array based on its key. So you will start of with add(ing) [1,2,3,4,5] => 15
// then subtract(ing) [5, 6, 7, 8, 9] => -25 etc. Once all arrays have been reduced, you will perform the
// root key operation on all the reduced arrays. So in this case, you will multiply each reduced array with
// each other. The order is ALWAYS value of 'add' key first, then 'subtract', then 'multiply' and finally
// 'divide'.
const right = {
  subtract: {
    add: [1, 2, 3, 4, 5],
    subtract: [1, 2, 3, 4, 5],
    multiply: [1, 2, 3, 4, 5],
    divide: [1, 2, 3, 4, 5],
  },
};
// evaluate(left, 'add', right) === -467.0083333333333
evaluate(left, "add", right);
