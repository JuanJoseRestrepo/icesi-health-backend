  function multiply(a, b) {
    return a * b;
  }
  function sum(a, b) {
    return a + b;
  }
  test('adds 5 + 9 to equal 14', () => {
    expect(sum(5, 9)).toBe(14);
  });
  
  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  
  test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  test('adds 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test('adds 0 * 0 to equal 0', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  test('adds -1 * 1 to equal -1', () => {
    expect(multiply(-1, 1)).toBe(-1);
  });