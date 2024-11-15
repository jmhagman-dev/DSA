function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        [nums[j], nums[i]] = [nums[i], nums[j]]
      }
    }
  }
  return nums;
}

export default bubbleSort;