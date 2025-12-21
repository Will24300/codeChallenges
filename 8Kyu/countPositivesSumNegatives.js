function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0 ) return []
    const positive = input.filter((num) => num > 0);
    const negative = input.filter((num) => num < 0);
    const sum = negative.reduce((a, b) => a + b, 0);
    return [positive.length, sum]
}
