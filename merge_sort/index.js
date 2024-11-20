/* Implementation of the merge sort.*/

// Examples:

// Input: arr[] = [20, 91, 20, 78, 98, 95, 99]
// Output: [20, 20, 78, 98, 97, 98, 99]

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  console.log("result: " + result);
  console.log("left: " + left);
  console.log("right: " + right);

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

export function main() {
  console.log("input: " + [20, 91, 20, 78, 98, 95, 99]);
  const result = mergeSort([20, 91, 20, 78, 98, 95, 99]);
  console.log("output: " + result);
}

/*
Time Complexity: O(n2)
Auxiliary Space: O(1)

Advantages of Bubble Sort:
Bubble sort is easy to understand and implement.
It does not require any additional memory space.
It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order in the sorted output.
Disadvantages of Bubble Sort:
Bubble sort has a time complexity of O(n2) which makes it very slow for large data sets.
Bubble sort is a comparison-based sorting algorithm, which means that it requires a comparison operator to determine the relative
order of elements in the input data set. It can limit the efficiency of the algorithm in certain cases.
*/
