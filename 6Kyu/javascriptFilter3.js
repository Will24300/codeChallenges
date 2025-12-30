function searchNames(logins) {
  const arrs = [];
  const arr = logins.filter((a) => a.startsWith(".") || a.endsWith("."));
  for (let i = 0; i < arr.length; i++) {
    arrs.push(logins[logins.indexOf(arr[i]) + 1]);
  }
  return arrs;
}
// searchNames([ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ])
searchNames([
  "foo",
  "foo@foo.com",
  "bar.",
  "bar@bar.com",
  "foobar",
  "hello@dot.com",
  ".barfoo",
  "barfoo@t.com",
]);
