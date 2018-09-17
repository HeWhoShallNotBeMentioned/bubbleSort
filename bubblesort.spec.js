beforeAll(function () {
  spyOn(array, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it('sorts things', function () {
  array.bubbleSort();
  expect(bubbleSort.swap.calls.count()).toEqual();
});

  it('swap was called', function () {
    expect(array.swap.calls.count()).toEqual();
  });

  spyOn(array, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });

    it('handles an empty array', function () {
      expect(bubbleSort([])).toEqual([]);
    });

    it('handles an array with one element', function () {
      expect(bubbleSort([1])).toEqual([1]);
    });

    it('handles an array with multiple elements', function () {
      expect(bubbleSort([2, 1])).toEqual([1, 2]);
      expect(bubbleSort([0, -1, 42, 23, -4, 7])).toEqual([-4, -1, 0, 7, 23, 42]);
    });
});
