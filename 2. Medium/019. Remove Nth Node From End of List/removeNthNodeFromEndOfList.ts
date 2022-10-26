/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * My answer goes here
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let currNode = head;
  let listLength = 0;
  const hash = new Map<number, ListNode>();

  /**
   * traversal linked-list
   */
  while (currNode !== null) {
    // increasing listLength
    listLength += 1;

    // add into hashmap
    hash.set(listLength, currNode);

    // move on
    currNode = currNode.next;
  }

  // handling removal
  const indexToRemovedNode = listLength - n + 1;

  const prevNode = hash.get(indexToRemovedNode - 1);
  const nextNode = hash.get(indexToRemovedNode + 1);

  // if user is trying to remove headNode
  if (indexToRemovedNode === 1) {
    return head.next ?? null;
  }

  // if user is trying to remove lastNode
  if (indexToRemovedNode === listLength) {
    hash.get(indexToRemovedNode - 1).next = null;
    return head;
  }

  // else, user is trying to remove node that in the middle of list
  const prevNode = hash.get(indexToRemovedNode - 1);
  prevNode.next = hash.get(indexToRemovedNode + 1);
  return head;
}
