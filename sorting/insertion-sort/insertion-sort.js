function insertionSort(nums) {
  for (let r = 1; r < nums.length; r++) {
    let l = r - 1;
    let rightValue = nums[r];
    
    while (l >= 0 && nums[l] > rightValue) {
      let leftValue = nums[l]
      nums[l + 1] = leftValue;
      l--;
    }
    nums[l + 1] = rightValue;
  }
  return nums;
}

export default insertionSort;

// [2, 1, 5, 4] currentValue = 1
//  j  i 
// j >= 0 true
// nums[j] > currentValue
// 