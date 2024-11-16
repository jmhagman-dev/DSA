import insertionSort from './insertion-sort';

it('should sort an array of integers in non-descending order', () => {
  const result = insertionSort([2, 2, 10, 9, 3, 15, 22, 1, 1000, 989]);
  expect(result).toEqual([1, 2, 2, 3, 9, 10, 15, 22, 989, 1000]);
});

it('should return any empty array when nums is empty', () => {
  const result = insertionSort([]);
  expect(result).toEqual([]);
});
