function getCount(str) {
  const vowels = "aeiou";
  let v = [];
  for (const char of str){
      if (vowels.includes(char)){
          v.push(char);
      }
  }
  return v.length;
}
