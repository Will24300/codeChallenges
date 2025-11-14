// const a1 = ["arp", "live", "strong"];
const a1 = ["live", "strong", "lyal", "lysh", "arp"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

function inArray(array1, array2) {
  const str = array2.join("-");
  const result = [];

  for (const word of array1) {
    if (str.includes(word)) {
      result.push(word);
    }
  }
  return result.sort();
}

console.log(inArray(a1, a2));
