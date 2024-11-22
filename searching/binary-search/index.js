// Implement Binary Search Algorithm
// Consider an array arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, and the target = 23.

function binary_search(array, target) {
  if (array.length < 1) return "Array is empty!";
  if (!target) return "Searching target is undefined !";

  let lower = 0,
    higher = array.length - 1,
    mid;

  while (higher >= lower) {
    mid = lower + Math.floor((higher - lower) / 2);

    if (array[mid] == target) return "Element is present at index " + mid;

    if (array[mid] > target) higher = mid - 1;
    else lower = mid + 1;
  }
  return "Element is not present in array!";
}

export function main() {
  console.log("input: " + [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]);
  const result = binary_search([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 355);
  console.log("output: " + result);
}

/*
Time Complexity:

Best Case: O(1)
Average Case: O(log N)
Worst Case: O(log N)
Auxiliary Space: O(1), If the recursive call stack is considered then the auxiliary space will be O(logN).


Applications of Binary Search Algorithm:
  Binary search can be used as a building block for more complex algorithms used in machine learning, such as algorithms for training neural networks or finding the optimal hyperparameters for a model.
  It can be used for searching in computer graphics such as algorithms for ray tracing or texture mapping.
  It can be used for searching a database.

Advantages of Binary Search:
  Binary search is faster than linear search, especially for large arrays.
  More efficient than other searching algorithms with a similar time complexity, such as interpolation search or exponential search.
  Binary search is well-suited for searching large datasets that are stored in external memory, such as on a hard drive or in the cloud.

Disadvantages of Binary Search
  The array should be sorted.
  Binary search requires that the data structure being searched be stored in contiguous memory locations. 
  Binary search requires that the elements of the array be comparable, meaning that they must be able to be ordered. 
  */
