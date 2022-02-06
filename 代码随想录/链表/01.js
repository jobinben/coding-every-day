// 移除元素

const removeElements = (head, val) => {
    let dummy = new ListNode(-1, head)
    let cur = dummy

    while (cur.next !== null) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return dummy.next
};