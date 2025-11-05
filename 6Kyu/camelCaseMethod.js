String.prototype.camelCase = function () {
  const arr = this.split(" ");
  let str = "";
  for (const word of arr) {
    str += word.slice(0, 1).toUpperCase() + word.slice(1).toLocaleLowerCase();
  }
  return str;
};

"hello world".camelCase();
