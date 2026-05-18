function cookie(x) {
  let name;

  if (typeof x === "string") {
    name = "Zach";
  } else if (typeof x === "number") {
    name = "Monica";
  } else {
    name = "the dog";
  }

  return `Who ate the last cookie? It was ${name}!`;
}