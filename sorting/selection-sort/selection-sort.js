// selection sort is a two pass sorting algorithm
// that compares each element in the array to the rest of the values to the right and
// keeps track of the index of the minimum value found in that iteration
// for each iteration i is the starting lowest index and is replaced as the index if nums[j] is less than the current min value/index
// once the inner loop has completed the lowest found value is swapped with the value at nums[i] unless it is the same value
function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[lowest]) {
        lowest = j;
      }
    }
    [nums[lowest], nums[i]] = [nums[i], nums[lowest]];
  }
  return nums;
}

// [10, 1, 2, 5, 9, 7, 4]
export default selectionSort;
