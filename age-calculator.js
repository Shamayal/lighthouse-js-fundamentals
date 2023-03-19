function ageCalculator (name, yearOfBirth, currentYear) {
  var num = currentYear - yearOfBirth;
  return (name + " is " + num + " years old.");
}

console.log(ageCalculator("Suzie",1983,2015));
console.log(ageCalculator("Miranda", 1999, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
