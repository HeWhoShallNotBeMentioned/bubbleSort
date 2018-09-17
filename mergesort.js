function split (wholeArray) {

  const len = Math.floor(wholeArray.length/2);
  const firstHalf = wholeArray.slice(0, len);
  const secondHalf = wholeArray.slice(len);

  return [firstHalf, secondHalf]
}
