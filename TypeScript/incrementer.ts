export function incrementer(nums: number[]) : number[] {
  const myArr : number[] = []
     for (let i = 1; i <= nums.length; i++){
       let incrementer = nums[i - 1] + i;
       if (incrementer > 10){
         myArr.push(incrementer % 10)
       } else {
         myArr.push(incrementer % 10)
       }
     }
    return myArr;
}
