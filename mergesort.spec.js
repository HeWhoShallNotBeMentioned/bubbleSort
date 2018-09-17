describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([[1, 2, 3, 4], [5, 6, 7, 8]])
    expect(split([1, 2])).toEqual([[1], [2]])
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    // test the merging algorithm
    expect(merge([1], [2])).toEqual([1, 2]);
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('mergeSort function', function () {
  it('is able to sort an array', function () {
    // test the merging algorithm
    expect(mergeSort([2,1])).toEqual([1, 2]);
    expect(mergeSort([3,4,6,5,2,1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSort([3,4,5,2,1])).toEqual([1, 2, 3, 4, 5]);
  });
});
