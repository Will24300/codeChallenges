function openOrSenior(data) {
  return data.map((arr) => (arr[0] >= 55 && arr[1] > 7 ? "Senior" : "Open"));
}
