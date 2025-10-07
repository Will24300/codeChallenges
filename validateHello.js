function validateHello(greetings) {
  const greet = ["hello", "cia", "salut", "hallo", "hola", "ahoj", "czesc"];
  for (const word of greet) {
    let strArr = greetings.split(" ").join("").toLowerCase();
    if (strArr.includes(word)) return true;
  }
  return false;
}
