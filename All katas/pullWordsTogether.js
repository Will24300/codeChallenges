function sentencify(words) {
  const first = words[0][0].toUpperCase() + words[0].slice(1);
  words[0] = "";
  return first + words.join(" ") + ".";
}

console.log(
  sentencify(["i'm", "afraid", "I", "can't", "let", "you", "do", "that"])
);
