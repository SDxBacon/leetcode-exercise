class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let currNode = head;
  let prevNode = null;
  let entryNode = head;

  while (currNode) {
    /**
     * if nextNode exist, starting swap procedure
     */
    if (currNode.next) {
      const nextNode = currNode.next;

      /** currNode 是 head, 調整 entry node */
      if (currNode === head) entryNode = nextNode;

      const doubleNextNode = nextNode.next;

      /** swapping node link */
      nextNode.next = currNode;
      currNode.next = doubleNextNode;

      /** relink prevNode.next */
      if (prevNode) {
        prevNode.next = nextNode;
      }

      /** shifting pointer */
      prevNode = currNode;
      currNode = doubleNextNode;
    } else break;
  }

  return entryNode;
}
