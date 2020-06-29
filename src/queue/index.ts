import LinkedListNode from '../linked-list/linked-list-node';

export default class Queue<T = number> {
  private front: LinkedListNode<T> | null;

  private rear: LinkedListNode<T> | null;

  private length: number;

  /**
   * Implemention of queue (FIFO)
   */
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  /**
   * Adds an element at the back of the queue
   */
  enqueue(element: T): void {
    const temp = new LinkedListNode(element);
    this.length++;

    // If queue is empty, then new node is front and rear both
    if (this.rear === null) {
      this.front = this.rear = temp;
      return;
    }

    // Add the new node at the end of queue and change rear
    this.rear.next = temp;
    this.rear = temp;
  }

  /**
   * Removes the front element of the queue
   */
  dequeue(): void {
    // If queue is empty, return null
    if (this.front === null) {
      return;
    }

    // Store previous front and move front one node ahead
    //const temp = this.front;
    this.front = this.front.next;

    this.length--;

    // If front becomes NULL, then change rear also as NULL
    if (this.front === null) {
      this.rear = null;
    }
  }

  /**
   * Peeks on the front element of the queue
   */
  peek(): T | null {
    return this.front ? this.front.val : null;
  }

  /**
   * Returns the number of elements in the queue
   */
  size(): number {
    return this.length;
  }

  /**
   * Checks whether the queue is empty
   */
  isEmpty(): boolean {
    return this.rear === null;
  }

  /**
   * Copies contents of queue into an array
   */
  toArray(): T[] {
    let pointer = this.front;
    const arr = [];

    while (pointer) {
      arr.push(pointer.val);
      pointer = pointer.next;
    }
    return arr;
  }

  /**
   * Clears all elements from the queue
   */
  clear(): void {
    this.front = this.rear = null;
    this.length = 0;
  }

  /**
   * Creates queue and enqueues values from existing array
   */
  static fromArray<T>(elements: T[]): Queue<T> {
    const queue = new Queue<T>();
    elements.forEach(el => queue.enqueue(el));
    return queue;
  }
}
