// 两两交换链表中的节点

const swapPairs = (head) => {
    let dummy = new ListNode(-1, head)
    let cur = dummy

    while (cur.next !== null && cur.next.next !== null) {
        let temp = cur.next
        let temp2 = cur.next.next.next

        cur.next = cur.next.next  // 步骤1
        cur.next.next = temp     // 步骤2
        cur.next.next.next = temp2 // 步骤3

        cur = cur.next.next // 一轮交换后移动两步
    }

    return dummy.next
};