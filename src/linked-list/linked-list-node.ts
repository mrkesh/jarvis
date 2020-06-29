export default class LinkedListNode<T> {

  public val: T;

  /**
   * Reference to the next node of the list
   */
  public next: LinkedListNode<T> | null;

  /**
   * Reference to the previous node of the list
   */
  public previous: LinkedListNode<T> | null;

  /**
   *
   * @param val
   */
  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}
