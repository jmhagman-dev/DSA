
### Insertion Sort Solution and Explanation

```function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let currentValue = arr[i];
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--
    }
    arr[j + 1] = currentValue
  }
  return arr;
}
```

Insertion sort is a fundamental sorting algorithm that sorts an array by storing the value at ```arr[i]``` in a variable, and comparing that value to each element to the left of it until it reaches the beginning of the array or if the value on the left is less than the value stored at ```currentValue```. 

Insertion sort moves elements of greater value to the right until it reaches the index in the array where currentValue would be if the array were fully sorted.

Insertion sort is a slower, two pass sorting algorithm that has a time complexity of O(n^2) and space complexity of 0(1)

While not ideal for large static arrays or dynamic arrays with no size constraint, it can be a viable choice when dealing with smaller arrays due to its low memory overhead.

Let's take a look at the code and see how it works.

```
function insertionSort(arr)
  for (let i = 1; i < arr.length; i++) {...}
```


Here we start iterating over the given array at index 1 and end at the last element.

We could start at 0 but it would be an unnecessary iteration because ```j = i - 1``` will cause the while loop to be skipped and we would replace the value at ```arr[j + 1]``` with the same value, essentially wasting an operation.

Since insertion short requires us to compare the value at ```arr[i]``` with the previous value, it makes sense to start at 1.

```
let j = i - 1;
let currentValue = arr[i];
while (j >= 0 && arr[j] > currentValue) {
  arr[j + 1] = arr[j];
  j--
}
```

It’s easiest to explain the code above by showing a few visual examples of how our pointers move and how values are changed in the array.

For demonstrative purposes, this algorithm makes the most sense when starting with all elements previously sorted except the last element.

Given the following array with all elements previously sorted and with  ```i = 3```.


```
[3, 10, 12, 2]  currentValue = 2
         j  i
```

We first check to see if we meet the conditions for executing the code inside the while loop.


```
while (j >= 0 && arr[j] > currentValue)
       2 >= 0 && 12 > 2
```

Since both statements are currently true, we will enter the while loop and execute the code.

```
arr[j + 1] = arr[j];
arr[3] = 12
```

The first thing we do is set the value at ```arr[3]``` to ```12```, giving us the following:


```
[3, 10, 12, 12] currentValue = 2
         j  i
```

We have compared two adjacent values and changed the value on the right to the value on the left, usually the first part of a swap.

You might think the next step is to change the value at ```arr[2]``` to ```2```, but we are going to do something slightly different.

Remember we have compared ```arr[j]``` with the value stored in currentValue. 

If we scan the array we can easily see that ```2``` needs to be inserted att ```arr[0]```.

To do this we need to continue to compare ```currentValue``` to the value at ```arr[j]``` and decrement ```j``` until ```j < 0``` or ```arr[j] < currentValue```.  In this case our while loop will terminate once ```j = - 1```.

Let’s decrement j and check our while loop condition again.

```j--```

```
[3, 10, 12, 12] currentValue = 2
    j       i
```

```
while (j >= 0 && arr[j] > currentValue)
       1 >= 0 && 10 > 2
```

Looks like we meet both conditions and can execute the while loop code block again.


```
arr[j + 1] = arr[j];
arr[2] = 10
```
Again we move the value at ```arr[j]``` to ```arr[j + 1]``` giving us:



```
[3, 10, 10, 12] currentValue = 2
    j       i
```

And again we decrement j.
```
j--
```
Giving us:


```
[3, 10, 10, 12] currentValue = 2
 j           i
```
Once more we check our conditions.


```
while (j >= 0 && arr[j] > currentValue)
       0 >= 0 && 3 > 2
```

Both conditions are true so we execute the code in the while loop again.

```
arr[j + 1] = arr[j];
arr[1] = 3
```

Again we move the value at ```arr[j]``` to ```arr[j + 1]``` giving us:


```
[3, 3, 10, 12] currentValue = 2
 j         i
```
We decrement j again.
```
j--
```
And when we check our conditions.


```
while (j >= 0 && arr[j] > currentValue)
       -1 >= 0 && 3 > 2
```

We can see that the left side is false, terminating our while loop leaving is with:

```
  [3, 3, 10, 12] currentValue = 2
j            i
```

We have terminated our while loop but still haven’t finshing sorting the array.

Now that j has reached the index of insertion we can place it at the correct index with the following code:


```
arr[j + 1] = currentValue
arr[0] = 2
```

Resulting in:
```
return arr
return [2, 3, 10, 12]
```
Our array is sorted and our outer loop no longer meets the condition  ```i < arr.length``` 

We can now exit and return our sorted array!