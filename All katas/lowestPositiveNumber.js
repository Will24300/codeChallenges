function sumTwoSmallestNumbers(numbers) {
  return Number(
    numbers
      .sort((a, b) => a - b)
      .splice(0, 2)
      .reduce((acc, elmt) => acc + elmt)
  );
}
