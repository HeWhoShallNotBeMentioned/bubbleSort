beforeAll(function () {
  spyOn(array, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it('getting to the center of tootsiepop involves exactly three licks', function () {
  array.bubbleSort();
  expect(bubbleSort.swap.calls.count()).toEqual(3);
});


describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function () {
  it('handles an array with one element', function () {
    expect(bubbleSort([1])).toEqual([1]);
  });
});

describe('Bubble Sort', function () {
  it('handles an array with multiple elements', function () {
    expect(bubbleSort([2,1])).toEqual([1,2]);
    expect(bubbleSort([0,-1,42,23,-4,7])).toEqual([-4,-1,0,7,23,42]);
  });
});

