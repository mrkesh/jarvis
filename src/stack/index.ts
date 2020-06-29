export default class Stack<T = number> {

  private items: T[] = [];

  /**
   * Implemention of stack (LIFO)
   */
  constructor() {
    this.items = [];
  }

  /**
   * Adds an element to the end of the array
   */
  push(element: T): void {
    this.items.push(element);
  }

  /**
   * Removes the last element of the array
   */
  pop(): T | null {
    const popped = this.items.pop();
    return popped || null;
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }

  size(): number {
    return this.items.length;
  }

}
