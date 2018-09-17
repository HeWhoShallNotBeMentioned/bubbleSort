describe('BubbleSort Tests', function () {
  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough();
  });

  it('swap spy is on', function () {
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one element', function () {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('handles an array with multiple elements', function () {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(window.swap.calls.count()).toEqual(1);
  });

  it('Extra', function () {
    expect(bubbleSort([0, -1, 42, 23, -4, 7])).toEqual([-4, -1, 0, 7, 23, 42]);
    expect(window.swap.calls.count()).toEqual(25);
  });
});
