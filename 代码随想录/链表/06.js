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


// 判断链表是否相交

var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    // 1. 快指针不能等于空
    while(fast !== null && fast.next !== null) {
        // 2. 快慢指针走
        slow = slow.next;
        fast = fast.next.next;

        // 3. 当slow 和 fast 相等时，此时不一定是环的起点
        // 有环必定相遇
        if(slow === fast) {
            // 4. 下面是找出环的起点pos
            let index1 = fast;
            let index2 = head;

            while(index1 !== index2) {
                index1 = index1.next;
                index2 = index2.next;
            }

            return index2;
        }
    }

    return null;
};