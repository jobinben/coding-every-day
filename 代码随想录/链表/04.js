// 删除链表的倒数第N个结点

const removeNthFromEnd = (head, n) => {
    let dummy = new ListNode(-1, head)
    let cur = dummy
    for(let i = 0; i < n; i++) {
        head = head.next
    }
    while(head) {
        cur = cur.next
        head = head.next
    }
    cur.next = cur.next.next
    return dummy.next
};


// 删除倒数第N个结点，ListNode(x) {this.x = x; this.next = null;}

const removeNthFromEnd_2 = (head, n) => {
    let dummy = new ListNode(-1)
    dummy.next = head;
    let cur = dummy;
    for(let i = 0; i < n; i++) {
        head = head.next;
    }
    while(head) {
        cur = cur.next;
        head = head.next;
    }
    cur.next = cur.next.next;
    return dummy.next;
};