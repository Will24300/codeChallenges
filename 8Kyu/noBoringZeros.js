function noBoringZeros(n) {
  let str = String(n);
  let reversed = str.split('').reverse().join('');
  let indx;
  if (str.endsWith('0')){
    for (let i = str.length - 1; i >= 0; i--){
        if (str[i] > 0){
            indx = reversed.indexOf(str[i]);
            break;
        }
    }
  return Number(str.slice(0, str.length - indx));
  }
  return n;
}
