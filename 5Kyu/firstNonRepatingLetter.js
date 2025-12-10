function firstNonRepeatingLetter(s) {
  const lowerStr = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const lowerChar = lowerStr[i];

    if (lowerStr.indexOf(lowerChar) === lowerStr.lastIndexOf(lowerChar)) {
      return char;
    }
  }

  return "";
}
