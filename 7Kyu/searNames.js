function searchNames(logins) {
  const arrs = [];
  for (const arr of logins) {
    if (arr[0].endsWith("_")) {
      arrs.push(arr);
    }
  }
  return arrs;
}
