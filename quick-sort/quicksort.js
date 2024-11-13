
function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, start, end)
    // left side
    quicksort(arr, left, pivotIndex + 1)
    
    quicksort(arr, right, pivotIndex - 1)
  }
  return arr;
}