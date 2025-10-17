var capitals = function (word) {
  const indexes = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      indexes.push(i);
    }
  }
  return indexes;
};
capitals("CodEWaRs");
