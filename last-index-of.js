function lastIndexOf(numArray,num) {
  let lastIndex = 0;

  if (numArray.length > 0) {
    for (let i = numArray.length - 1; i >= 0; i--) {
      if (num === numArray[i]) {
        lastIndex = i;
        break;
      } else {
        lastIndex = -1;
      }
    }
  } else {
    lastIndex = -1;
  } return lastIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);