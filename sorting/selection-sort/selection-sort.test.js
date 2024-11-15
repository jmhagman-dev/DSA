import selectionSort from './selection-sort';
import 'jest-extended'

it('should sort an array of integers', () => {
  const result = selectionSort([10, 4, 8, 2, 1, 9, 3]);
  expect(result).toEqual([1, 2, 3, 4, 8, 9, 10]);

});
