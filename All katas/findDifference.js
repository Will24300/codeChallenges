function differenceInAges(ages) {
  const max = Math.max(...ages);
  const min = Math.min(...ages);

  return [min, max, max - min];
}
