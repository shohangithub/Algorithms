/* Implementation of the bubble sort.*/

// Examples:

// Input: arr[] = [20, 91, 20, 78, 98, 95, 99]
// Output: [20, 20, 78, 98, 97, 98, 99]

function bubbleSort(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;

  let temp;
  for (let i = 0; i < arr.length; i++) {
    //for (let j = 0; j < arr.length; j++) {  // find last element undefind causes : arr[j + 1]
    // for (let j = 0; j < arr.length-1; j++) { // looping all the element every time.
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // after sort an item goes decrease array length.
      // console.log('J=>' +j +'=>' +arr[j + 1]) // for showing effect of commented j length
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

export function main() {
  console.log("input: " + [20, 91, 20, 78, 98, 95, 99]);
  const result = bubbleSort([20, 91, 20, 78, 98, 95, 99]);
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
