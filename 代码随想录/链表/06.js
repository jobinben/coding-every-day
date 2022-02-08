// 判读环形链表 并返回进入环的第一个结点


const detectCycle = (head) => {

    if(head === null || head.next === null) return null;

    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            let index1 = fast;
            let index2 = head;
            while(index1 !== index2) {
                index1 = index1.next
                index2 = index2.next
            }
            return index2
        }
    }

    return null

};