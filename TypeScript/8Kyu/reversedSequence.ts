export const reverseSeq = (n: number): number[] => {
  const myArr: number[] = [];
  for (let i = n; i > 0; i--) {
    myArr.push(i);
  }
  return myArr;
};
