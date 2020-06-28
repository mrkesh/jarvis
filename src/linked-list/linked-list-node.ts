export default class LinkedListNode<T> {
  public val: T;

  public next: LinkedListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}
