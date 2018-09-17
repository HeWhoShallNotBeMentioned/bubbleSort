
function swap(array, index){
  if (array[index + 1] < array[index]){
   [array[index], array[index + 1]] = [array[index + 1], array[index]];
  }
  return array;
}

function bubbleSort(array) {
 // console.log(`before ${array}`);
  // for(let i = 0; i < array.length - 1; i++) {
  //   for(let j = 0; j < array.length - 1; j++) {
  //     console.log(`inner ${array}`);
  //     swap(array, j);
  //   }
  //   console.log(`outer ${array}`);

  let counter = 0;
  while (counter < array.length - 1) {
    for(let i = 0; i < array.length - 1; i++) {
    swap(array, i);
    }
    counter++;
  }
  return array;
}


