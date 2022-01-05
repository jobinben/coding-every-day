const reverseList = (head) => {
    let pre = null
    let cur = head
    while(cur) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur.next = next
    }
    return pre
}

