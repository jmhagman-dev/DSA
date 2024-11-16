function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let currentValue = nums[i]
    let j = i - 1
    while (j >= 0 && nums[j] > currentValue) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = currentValue
    
  }
  return nums;
}

export default insertionSort
