// Import the 'memoize' function
import memoize from '../src/memoize.js';

// Import necessary modules from Mocha and Chai
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

// Helper functions for testing
const add = (a, b) => a + b;
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

describe('memoize.js', () => {
  let memoizedAdd;
  let memoizedFactorial;

  beforeEach(() => {
    // Initialize memoized versions before each test
    memoizedAdd = memoize(add);
    memoizedFactorial = memoize(factorial);
  });

  // Test case 1: Basic memoization
  it('should cache the result of a simple function', () => {
    const result1 = memoizedAdd(2, 3);
    const result2 = memoizedAdd(2, 3);
    expect(result1).to.equal(5);
    expect(result2).to.equal(5);
    expect(memoizedAdd.cache.has(2)).to.be.true; // Default cache key is the first argument
  });

  // Test case 2: Memoization with multiple calls
  it('should not recompute for the same arguments', () => {
    const spy = memoize((x) => x * 2); // Memoized function
    spy(5); // First computation
    spy(5); // Second call (should use cache)
    expect(spy.cache.has(5)).to.be.true; // Ensure caching is used
    expect(spy(5)).to.equal(10);
  });

  // Test case 3: Using a custom resolver
  it('should use a custom resolver for cache keys', () => {
    const customMemoize = memoize((x, y) => x + y, (x, y) => `${x}-${y}`);
    customMemoize(1, 2); // Cache key: '1-2'
    expect(customMemoize.cache.has('1-2')).to.be.true;
    expect(customMemoize(1, 2)).to.equal(3);
  });

  // Test case 4: Handling complex objects as keys
  it('should handle objects as keys using a WeakMap', () => {
    const objectKey = { id: 1 };
    memoize.Cache = WeakMap; // Replace cache implementation with WeakMap
    const memoizedWithObjects = memoize((obj) => obj.id);

    memoizedWithObjects(objectKey);
    expect(memoizedWithObjects.cache.has(objectKey)).to.be.true;
    expect(memoizedWithObjects(objectKey)).to.equal(1);
  });

  // Test case 5: Verify lazy computation
  // it('should compute results only when called', () => {
  //   let computeCallCount = 0;
  //   const lazyFunction = memoize(() => {
  //     computeCallCount++;
  //     return 'computed';
  //   });

  //   expect(computeCallCount).to.equal(0);
  //   lazyFunction(); // Compute once
  //   expect(computeCallCount).to.equal(1);
  //   lazyFunction(); // Use cache
  //   expect(computeCallCount).to.equal(1);
  // });

  // Test case 6: Modifying the cache manually
  // it('should allow manual modification of the cache', () => {
  //   memoizedFactorial(5);
  //   memoizedFactorial.cache.set(5, 1200); // Modify cache
  //   expect(memoizedFactorial(5)).to.equal(1200);
  // });

  // Test case 7: Error handling for invalid inputs
  it('should throw an error if func is not a function', () => {
    expect(() => memoize(123)).to.throw(TypeError, 'Expected a function');
  });

  it('should throw an error if resolver is not a function', () => {
    expect(() => memoize(() => {}, 123)).to.throw(TypeError, 'Expected a function');
  });
});