function betterThanAverage(classPoints, yourPoints) {
  const classResult = classPoints.reduce((acc, elt) => acc + elt);
  return classResult / classPoints.length < yourPoints;
}
