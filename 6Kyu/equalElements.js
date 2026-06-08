function areEqual(arr) {
  const removeDup = new Set(arr);
  if (removeDup.size > 1) {
    return false;
  }
  return true;
}

areEqual([1, 1, 2, 3, 5]);

function eqAll(iterable) {
  const it = iterable[Symbol.iterator]();
  const first = it.next();

  if (first.done) return true;

  const ref = first.value;
  for (let next = it.next(); !next.done; next = it.next()) {
    if (next.value !== ref) return false;
  }
  return true;
}

// Object.defineProperty(Array.prototype, "eqAll", {
//   value: function() {
//     return eqAll(this);
//   },
//   enumerable: false
// });

// Object.defineProperty(String.prototype, "eqAll", {
//   value: function() {
//     return eqAll(this);
//   },
//   enumerable: false
// });
