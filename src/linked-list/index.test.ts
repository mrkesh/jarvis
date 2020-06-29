import chai from 'chai';
import LinkedList from '.';

describe('LinkedList', function() {
  let list: LinkedList;

  beforeEach(function() {
    list = new LinkedList();
  });

  describe('add', function() {
    it('should add elements to the end of the list', function() {
      list.add(1);
      list.add(2);
      list.add(3);

      chai.assert.strictEqual(list.size(), 3);
      chai.assert.deepEqual(list.toArray(), [1, 2, 3]);

    });
  });

  describe('addFirst', function() {
    it('should add elements in the proper order', function() {
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      chai.assert.strictEqual(list.size(), 3);
      chai.assert.deepEqual(list.toArray(), [3, 2, 1]);
    });

    it('should check that head and tail are correct after adding items to the start of the list', function() {
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);

      chai.assert.strictEqual(list.peek(), 3);
      chai.assert.strictEqual(list.peekLast(), 1);
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

  describe('removeFirst', function() {
    it('should check that removing first element from empty list does nothing', function() {
      // act
      list.removeFirst();

      // assert
      chai.assert.strictEqual(list.size(), 0);
    });

    it('should check that it removes the first element from the list', function() {
      // arrange
      list.add(1);
      list.add(2);

      // assert
      chai.assert.strictEqual(list.size(), 2);

      // act
      list.removeFirst();

      // assert
      chai.assert.strictEqual(list.size(), 1);
      chai.assert.deepEqual(list.toArray(), [2]);
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
