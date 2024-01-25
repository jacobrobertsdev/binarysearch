const nums = [5, 18, 2, 3, 9, 4, 7, 10, 100, 34];

const sortedNums = nums.sort((a, b) => a - b);

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      return `Found your number at index ${middle}`;
    } else if (target > array[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return "Did not find your number in the array";
}

console.log(binarySearch(sortedNums, 200));
