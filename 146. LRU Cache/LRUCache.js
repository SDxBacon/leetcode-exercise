var TNode = function (key, value) {
  this.key = key;
  this.value = value;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.hashMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.hashMap.has(key)) {
    const refNode = this.hashMap.get(key);
    this.shiftNodeToFirstPos(refNode);
    return refNode.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const currentSize = this.hashMap.size;
  const isAlreadyCached = this.hashMap.has(key);

  // if `key` is already cached, update value and move reference
  // node to the first position of list.
  if (isAlreadyCached) {
    const node = this.hashMap.get(key);
    node.value = value;
    this.shiftNodeToFirstPos(node);
    return;
  }

  // cache is fulled, need to evict the last item of linked list and remove from hash map
  if (currentSize >= this.capacity) {
    this.hashMap.delete(this.last.key);
    this.removeNode(this.last);
  }

  // Then, put node into the first position of double linked-list and memorized in hash map
  const newNode = new TNode(key, value);
  this.hashMap.set(key, newNode);
  this.addToFirst(newNode);

  return;
};

LRUCache.prototype.shiftNodeToFirstPos = function (key) {
  // if node is already the head of doubly linked-list
  if (node === this.head) return;

  // Before we popping node to the first position,
  // we have to connect between previous node and next node.
  node.prev.next = node.next;
  if (node === this.last) {
    this.last = node.prev;
  } else {
    // node is
    node.next.prev = node.prev;
  }

  // Now, we can pop target node to the first position.
  this.head.prev = node;
  node.next = this.head;
  node.prev = null;
  this.head = node;
};

LRUCache.prototype.removeNode = function (node) {
  // handle previous node
  if (node.prev) {
    node.prev.next = node.next;
  }
  // handle next node
  if (node.next) {
    node.next.prev = node.prev;
  }

  // handle if node is this.head
  if (this.head === node) {
    this.head = node.next;
  }
  // handle if node is this.last
  if (this.last === node) {
    this.last = node.prev;
  }
};

LRUCache.prototype.addToFirst = function (node) {
  // if the doubly linked-list is empty, node should become the first node of the list
  if (!this.head && !this.last) {
    this.head = node;
    this.last = node;
    return;
  }

  // 1st node will become the 2nd node in the doubly linked-list
  node.next = this.head;
  this.head.prev = node;
  // replacing 1st node
  this.head = node;
};
