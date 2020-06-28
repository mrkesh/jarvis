import chai from 'chai';
import LinkedList from './linked-list';

describe('LinkedList', function() {
  let list: LinkedList;

  beforeEach(function() {
    list = new LinkedList();
  });

  describe('add', function() {
    it('enqueue elements', function() {
      list.add(1);
      list.add(2);

      chai.assert.strictEqual(list.size(), 2);
    });
  });

  describe('remove', function() {
    it('should check that removing from empty list doesn\'t throw an error', function() {
      // act
      list.remove(1);

      // assert
      chai.assert.strictEqual(list.size(), 0);
    });

    it('should check that removing elements from list decreases its size', function() {
      // arrange
      list.add(1);
      list.add(2);

      // assert
      chai.assert.strictEqual(list.size(), 2);

      // act
      list.remove(2);

      // assert
      chai.assert.strictEqual(list.size(), 1);
    });
  });

  describe('size', function() {
    it('should check that list size is correct', () => {
      // act
      list.add(1);
      list.add(2);

      // assert
      chai.assert.strictEqual(list.size(), 2);

      // act
      list.remove(1);

      // assert
      chai.assert.strictEqual(list.size(), 1);
      chai.assert.deepEqual(list.toArray(), [2]);
    });
  });

  describe('toArray', function() {
    let arr: number[];

    it('should convert empty list to empty array', () => {
      // act
      arr = list.toArray();

      // assert
      chai.assert.lengthOf(arr, 0);
    });

    it('should convert list to array in right order', () => {
      // arrange
      list.add(1);
      list.add(2);
      list.add(3);

      // act
      arr = list.toArray();

      // assert
      chai.assert.deepEqual(arr, [1, 2, 3]);
    });
  });

  describe('fromArray', function() {
    it('should convert empty array to empty queue', () => {
      // act
      const ll = LinkedList.fromArray([]);

      // assert
      chai.assert.strictEqual(ll.size(), 0);
    });

    it('should convert array to queue in right order', () => {
      // act
      const q = LinkedList.fromArray([1, 2, 3]);

      // assert
      chai.assert.strictEqual(q.size(), 3);
    });
  });

  describe('LinkedList with other type', function() {
    it('should enqueue string elements into queue', () => {
      // arrange
      const ll = new LinkedList<string>();

      // act
      ll.add('abc');
      ll.add('def');

      // assert
      chai.assert.strictEqual(ll.size(), 2);
    });
  });
});
