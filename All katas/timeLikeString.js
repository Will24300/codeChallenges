function solution(hour) {
  if (hour > 99 && hour < 9999) {
    const str = String(hour);
    if (str.length === 3) {
      return `${str.slice(0, 1)}:${str.slice(1)}`;
    } else {
      return `${str.slice(0, 2)}:${str.slice(2)}`;
    }
  } else {
    throw new Error();
  }
}
