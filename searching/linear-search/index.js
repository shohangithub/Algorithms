// Implement Linear Search Algorithm
// Consider an array arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, and the target = 23.

function linear_search(array, target) {
  if (array.length < 1) return "Element is not present in array!";
  if (!target) return "Searching target is undefined !";

  let i = array.length - 1;

  while (i >= 0) {
    if (array[i] == target) return "Element is present at index " + i;
    i--;
  }
  return "Element is not present in array!";
}

export function main() {
  console.log("input: " + [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]);
  const result = linear_search([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23);
  console.log("output: " + result);
}

/*
Time Complexity:

Best Case: O(1)
Average Case: O(N)
Worst Case: O(N)
Auxiliary Space: O(1), as except for the variable to iterate through the list, no other variable is used. 


Applications of Linear Search Algorithm:
    Unsorted Lists: When we have an unsorted array or list, linear search is most commonly used to find any element in the collection.
    Small Data Sets: Linear Search is preferred over binary search when we have small data sets with
    Searching Linked Lists: In linked list implementations, linear search is commonly used to find elements within the list. Each node is checked sequentially until the desired element is found.
    Simple Implementation: Linear Search is much easier to understand and implement as compared to Binary Search or Ternary Search.


Advantages of Linear Search Algorithm:
    Linear search can be used irrespective of whether the array is sorted or not. It can be used on arrays of any data type.
    Does not require any additional memory.
    It is a well-suited algorithm for small datasets.

    
Disadvantages of Linear Search Algorithm:
    Linear search has a time complexity of O(N), which in turn makes it slow for large datasets.
    Not suitable for large arrays.

When to use Linear Search Algorithm?
    When we are dealing with a small dataset.
    When you are searching for a dataset stored in contiguous memory.
  */
