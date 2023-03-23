const judgeVegetable = function (vegetables, metric) {
  let prizeVeg = vegetables[0];
  for (let i = 0; i < vegetables.length; i ++) {
    if (vegetables[i][metric] > prizeVeg[metric]) {
      prizeVeg = vegetables[i];
    }
  } return prizeVeg["submitter"];
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3
  }
]

console.log(judgeVegetable(vegetables, "redness"));

// should return "Old Man Franklin"