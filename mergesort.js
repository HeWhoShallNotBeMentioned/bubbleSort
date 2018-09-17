function split(wholeArray) {

  const len = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, len);
  const secondHalf = wholeArray.slice(len);

  return [firstHalf, secondHalf]
}

function merge(arrOne, arrTwo) {
  let masterArray = [];
  let first = arrOne[0];
  let second = arrTwo[0];

  //debugger;
  while (first || second) {
    if (!arrOne.length){
      masterArray = masterArray.concat(arrTwo)
      second = undefined;
    } else if (!arrTwo.length){
      masterArray = masterArray.concat(arrOne);
      first = undefined;
    }


    else if (first < second) {
      masterArray.push(arrOne[0]);
      arrOne.shift();
      first = arrOne[0];
    } else {
      masterArray.push(arrTwo[0]);
      arrTwo.shift();
      second = arrTwo[0];
    }

  }
  return masterArray;
}

// if (arr.length === 1 || arr.length === 0) {
//   return arr;
// }
