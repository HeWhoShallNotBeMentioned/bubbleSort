function swap(array, index){
  if (array[index + 1] < array[index]){
   [array[index], array[index + 1]] = [array[index + 1], array[index]];
  }
  return array;
}

//hi
