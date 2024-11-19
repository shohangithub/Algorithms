/* Given an array of size n, the task is to check if it is sorted in ascending order or not. 
 Equal values are allowed in an array and two consecutive equal values are considered sorted.*/

// Examples:

// Input: arr[] = [20, 21, 45, 89, 89, 90]
// Output: Yes

// Input: arr[] = [20, 20, 45, 89, 89, 90]
// Output: Yes

// Input: arr[] = [20, 20, 78, 98, 99, 97]
// Output: No

function checkIfAnArrayIsSorted(arr) {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0 || arr.length === 1) return true;
    if (i == 0) continue;

    if (arr[i - 1] > arr[i]) {
      result = false;
      break;
    }
  }
  return result;
}

export function main() {
  console.log("input: " + [20, 21, 45, 89, 89, 90]);
  const result = checkIfAnArrayIsSorted([20, 21, 45, 89, 89, 90]);
  console.log("output: " + (result ? "Yes" : "No"));
}

/*
Recursive approach – O(n) Time and O(n) Space
The basic idea for the recursive approach:  

If size of array is zero or one, return true.
Check last two elements of array, if they are sorted, perform a recursive call with n-1 else, return false.


Time Complexity: O(n) 
Auxiliary Space: O(n) for Recursion Call Stack.
*/
