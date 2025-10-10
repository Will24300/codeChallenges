function gimme(triplet) {
  const copyArr = [...triplet];
  const filteredArr = triplet.sort((a, b) => a - b);
  return copyArr.indexOf(filteredArr[1]);
}
