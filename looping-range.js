function range(start, end, step) {
  let numbersArray = []
  if (end >= start && step > 0) {
    for (var i = start; i <= end; i += step) {
      numbersArray.push(i);
    } return numbersArray;
  } else {
    return numbersArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));