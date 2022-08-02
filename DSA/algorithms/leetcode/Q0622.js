class MyCircularQueue {
  k = 0;
  start = 0;
  end = 0; // 待插入元素位置
  nums = [];
  constructor(k) {
    this.k = k;
    this.nums = new Array(this.k);
  }
  enQueue(value) {
    if (this.isFull()) return false;
    this.nums[this.end % this.k] = value;
    return this.end++ >= 0;
  }
  deQueue() {
    if (this.isEmpty()) return false;
    return this.start++ >= 0;
  }
  Front() {
    return this.isEmpty() ? -1 : this.nums[this.start % this.k];
  }
  Rear() {
    return this.isEmpty() ? -1 : this.nums[(this.end - 1) % this.k];
  }
  isEmpty() {
    return this.start == this.end;
  }
  isFull() {
    return this.end - this.start == this.k;
  }
}

export { MyCircularQueue };
