import chai from 'chai';
import Queue from './queue';

describe('Queue', function() {
  let queue: Queue;

  beforeEach(function() {
    queue = new Queue();
  });

  describe('enqueue', function() {
    it('enqueue elements', function() {
      queue.enqueue(1);
      queue.enqueue(2);

      chai.assert.strictEqual(queue.size(), 2);
      chai.assert.strictEqual(queue.peek(), 1);
    });
  });

  describe('dequeue', function() {
    it('should check that dequeueing from empty queue does not throw an error', function() {
      // act
      queue.dequeue();

      // assert
      chai.assert.strictEqual(queue.size(), 0);
    });

    it('should check that dequeueing elements from queue decreases its size', function() {
      // arrange
      queue.enqueue(1);
      queue.enqueue(2);

      // assert
      chai.assert.strictEqual(queue.size(), 2);
      chai.assert.strictEqual(queue.peek(), 1);

      // act
      queue.dequeue();

      // assert
      chai.assert.strictEqual(queue.size(), 1);
      chai.assert.strictEqual(queue.peek(), 2);
    });
  });

  describe('peek', function() {
    it('should get the front element of the queue', () => {
      // act
      queue.enqueue(1);
      queue.enqueue(2);

      // assert
      chai.assert.strictEqual(queue.peek(), 1);

      // act
      queue.dequeue();

      // assert
      chai.assert.strictEqual(queue.peek(), 2);
    });
  });

  describe('size', function() {
    it('should check that queue size is correct', () => {
      // act
      queue.enqueue(1);
      queue.enqueue(2);

      // assert
      chai.assert.strictEqual(queue.size(), 2);

      // act
      queue.dequeue();

      // assert
      chai.assert.strictEqual(queue.size(), 1);
    });
  });

  describe('clear', function() {
    it('should check that queue is cleared', () => {
      // arrange
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      // act
      queue.clear();

      // assert
      chai.assert.strictEqual(queue.size(), 0);
    });
  });

  describe('toArray', function() {
    let arr: number[];

    it('should convert empty queue to empty array', () => {
      // act
      arr = queue.toArray();

      // assert
      chai.assert.lengthOf(arr, 0);
    });

    it('should convert queue to array in right order', () => {
      // arrange
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      // act
      arr = queue.toArray();

      // assert
      chai.assert.deepEqual(arr, [1, 2, 3]);
    });
  });

  describe('fromArray', function() {
    it('should convert empty array to empty queue', () => {
      // act
      const q = Queue.fromArray([]);

      // assert
      chai.assert.strictEqual(q.size(), 0);
    });

    it('should convert array to queue in right order', () => {
      // act
      const q = Queue.fromArray([1, 2, 3]);

      // assert
      chai.assert.strictEqual(q.size(), 3);
      chai.assert.strictEqual(q.peek(), 1);
    });
  });

  describe('Queues with other types', function() {
    it('should enqueue string elements into queue', () => {
      // arrange
      const q = new Queue<string>();

      // act
      q.enqueue('abc');
      q.enqueue('def');

      // assert
      chai.assert.strictEqual(q.size(), 2);
      chai.assert.strictEqual(q.peek(), 'abc');
    });
  });
});
