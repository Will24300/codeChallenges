function remove(string) {
  const strArr = string.split(" ");
  for (let row of strArr) {
    let newSplit = row.split("");
    if (newSplit[newSplit.length - 1] === "!") {
      let reversed = newSplit.reverse();
    }
  }
}
remove("!!!Hi !!hi!!! !hi");
// console.log(remove("Hi! Hi!"));
