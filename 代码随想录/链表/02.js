// 翻转链表

const reverseList = function(head) {
    let cur = head
    let pre = null

    while(cur) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
};

// 翻转

const reverseList = (head) => {
    let pre = null;
    let cur = head;

    while(cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }

    return pre;
}