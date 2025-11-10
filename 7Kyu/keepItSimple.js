function isKiss( words ){
    const wordList = words.split(" ")
  for (const word of wordList){
      if (word.length > wordList.length) return "Keep It Simple Stupid"
  }
  return "Good work Joe!";
}
