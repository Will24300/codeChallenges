function incrementer(nums) { 
  const arr = [];
  for (let i = 1; i <= nums.length; i++){
      arr.push(i + nums[i - 1]);
  }
  return arr;
}
