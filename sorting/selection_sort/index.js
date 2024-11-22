/* Implementation of the selection sort.*/

// Examples:

// Input: arr[] = [20,91,20,78,98,95,99]
// Output: [20,20,78,91,95,98,99]

function selectioSort(array) {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length - 1; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    if (i != minIndex) {
      const temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }
  }

  return array;
}

export function main() {
  console.log("input: " + [20, 91, 20, 78, 98, 95, 99]);
  const result = selectioSort([20, 91, 20, 78, 98, 95, 99]);
  console.log("output: " + result);
}

/*
Time Complexity: O(n2) ,as there are two nested loops:

One loop to select an element of Array one by one = O(n)
Another loop to compare that element with every other Array element = O(n)
Therefore overall complexity = O(n) * O(n) = O(n*n) = O(n2)
Auxiliary Space: O(1) as the only extra memory used is for temporary variables.

Advantages of Selection Sort
Easy to understand and implement, making it ideal for teaching basic sorting concepts.
Requires only a constant O(1) extra memory space.
It requires less number of swaps (or memory writes) compared to many other standard algorithms. Only cycle sort beats it in terms of memory writes. Therefore it can be simple algorithm choice when memory writes are costly.
Disadvantages of the Selection Sort
Selection sort has a time complexity of O(n^2) makes it slower compared to algorithms like Quick Sort or Merge Sort.
Does not maintain the relative order of equal elements.
Does not preserve the relative order of items with equal keys which means it is not stable.
Applications of Selection Sort
Perfect for teaching fundamental sorting mechanisms and algorithm design.
Suitable for small lists where the overhead of more complex algorithms isn’t justified.
Ideal for systems with limited memory due to its in-place sorting capability.
Used in simple embedded systems where resource availability is limited and simplicity is important.
*/
