const smartGarbage = function (trash, bins) {
  if (trash === "waste") {
    bins.waste++;
  } else if (trash === "recycling") {
    bins["recycling"]++;
  } else {
    bins.compost ++;
  } return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

/* The smartGarbage function should return the object:

{
  waste: 4,
  recycling: 3,
  compost: 5
} */