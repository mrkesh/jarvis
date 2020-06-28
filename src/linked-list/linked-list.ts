import LinkedListNode from './linked-list-node';

export default class LinkedList<T = number> {
  private head: LinkedListNode<T> | null;

  private tail: LinkedListNode<T> | null;

  private length: number;

  /**
   * Implemention of linked list
   */
  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }

  /**
   * Adds and element to the end of the list
   */
  add(element: T): void {
    const temp = new LinkedListNode(element);
    this.length++;

    if (this.tail === null) {
      this.head = this.tail = temp;
      return;
    }

    if (this.head?.next === null) {
      this.head.next = temp;
    }

    const previousTail = this.tail;
    this.tail = temp;
    previousTail.next = this.tail;
  }

  /**
   * Removes an element from the list
   */
  remove(element: T): void {
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    let pointer = this.head;
    let previous: LinkedListNode<T> | null = null;

    while (pointer) {
      if (pointer.val === element) {
        if (pointer === this.head) {
          this.head = pointer.next;
        } else if (pointer === this.tail) {
          this.tail = previous;
          this.tail!.next = null;
        } else {
          previous!.next = pointer.next;
        }
        this.length--;
        break;
      }
      previous = pointer;
      pointer = pointer.next;
    }
  }

  /**
   * Clears linked list
   */
  clear(): void {
    this.head = this.tail = null;
    this.length = 0;
  }

  /**
   * Returns the number of elements (nodes) in the linked list
   */
  size(): number {
    return this.length;
  }

  /**
   * Checks whether linked list is empty
   */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * Copies contents of linked list into an array
   */
  toArray(): T[] {
    let pointer = this.head;
    const arr = [];

    while (pointer) {
      arr.push(pointer.val);
      pointer = pointer.next;
    }
    return arr;
  }

  /**
   * Creates linked list and adds values from existing array
   */
  static fromArray<T>(elements: T[]): LinkedList<T> {
    const ll = new LinkedList<T>();
    elements.forEach(el => ll.add(el));
    return ll;
  }
}
