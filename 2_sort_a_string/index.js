/* Sorting a string.*/

// Examples:

// Input : "geeksforgeeks"
// Output : "eeeefggkkorss"

function sortStingQuickSort(str) {
  const array = str.split("");
  if (array.length <= 1) return array;

  const pivot = array[array.length - 1];
  let left = "";
  let right = "";

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) {
      left += array[i];
    } else {
      right += array[i];
    }
  }
  return sortStingQuickSort(left) + pivot + sortStingQuickSort(right);
}

export function main() {
  console.log("input: geeksforgeeks");
  const result = sortStingQuickSort("geeksforgeeks");
  console.log("output: " + result);
}

/*
  Time Complexity:
  
  Best Case: (Ω(n log n)), Occurs when the pivot element divides the array into two equal halves.
  Average Case (θ(n log n)), On average, the pivot divides the array into two parts, but not necessarily equal.
  Worst Case: (O(n²)), Occurs when the smallest or largest element is always chosen as the pivot (e.g., sorted arrays).
  Auxiliary Space: O(n), due to recursive call stack
  
  
  
  Advantages of Quick Sort
  It is a divide-and-conquer algorithm that makes it easier to solve problems.
  It is efficient on large data sets.
  It has a low overhead, as it only requires a small amount of memory to function.
  It is Cache Friendly as we work on the same array to sort and do not copy data to any auxiliary array.
  Fastest general purpose algorithm for large data when stability is not required.
  It is tail recursive and hence all the tail call optimization can be done.
  
  
  Disadvantages of Quick Sort
  It has a worst-case time complexity of O(n2), which occurs when the pivot is chosen poorly.
  It is not a good choice for small data sets.
  It is not a stable sort, meaning that if two elements have the same key, their relative order will not be preserved in the sorted output in case of quick sort, because here we are swapping elements according to the pivot’s position (without considering their original positions).
  
  
  Applications of Quick Sort
  Efficient for sorting large datasets with O(n log n) average-case time complexity.
  Used in partitioning problems like finding the kth smallest element or dividing arrays by pivot.
  Integral to randomized algorithms, offering better performance than deterministic approaches.
  Applied in cryptography for generating random permutations and unpredictable encryption keys.
  Partitioning step can be parallelized for improved performance in multi-core or distributed systems.
  Important in theoretical computer science for analyzing average-case complexity and developing new techniques.
  */
