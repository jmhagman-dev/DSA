import bubbleSort from './bubble-sort'

it ('should sort an array of integers in ascending order', () => {
  const result = bubbleSort([4, 10, 1, 12, 202, 100, 101])
  expect(result).toEqual([1, 4, 10, 12, 100, 101, 202])
})