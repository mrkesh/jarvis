import chai from 'chai';
import Stack from '.';

describe('Stack', function() {
  let stack: Stack;

  beforeEach(function() {
    stack = new Stack();
  });

  describe('push', function() {
    it('push elements', function() {
      stack.push(10);
      stack.push(20);
      stack.push(30);

      chai.assert.strictEqual(stack.size(), 3);
      chai.assert.strictEqual(stack.peek(), 30);
    });
  });

  describe('pop', function() {

    it('should return null when popping from an empty stack', function() {

      // assert
      chai.assert.isNull(stack.pop());
      chai.assert.strictEqual(stack.size(), 0);
    });

    it('should remove the element at the top of the stack', function() {

      // arrange
      stack.push(10);
      stack.push(20);
      stack.push(30);

      // act
      stack.pop();

      // assert
      chai.assert.strictEqual(stack.size(), 2);
      chai.assert.strictEqual(stack.peek(), 20);
    });
  });

  describe('size', function() {
    it('should check that stack size is correct', () => {
      // act
      stack.push(10);
      stack.push(20);

      // assert
      chai.assert.strictEqual(stack.size(), 2);

      // act
      stack.pop();

      // assert
      chai.assert.strictEqual(stack.size(), 1);
    });
  });

  describe('clear', function() {
    it('should check that stack is cleared', () => {

      // arrange
      stack.push(10);
      stack.push(20);
      stack.push(30);

      // act
      stack.clear();

      // assert
      chai.assert.strictEqual(stack.size(), 0);
    });
  });

});