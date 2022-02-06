// 链表相交


const getIntersectionNode = (headA, headB) => {

    let curA = headA
    let curB = headB
    let aLen = 0, bLen = 0

    while (headA) {
        aLen++
        headA = headA.next
    }
    while (headB) {
        bLen++
        headB = headB.next
    }

    // 不能放在一起进行这样子的数组交换
    // 在同一个作用域的情况下，上面的值会被下面替换
    // if (aLen < bLen) {
    //     [curA, curB] = [curB, curA] 
    //     [aLen, bLen] = [bLen, aLen]  
    // }
    if (aLen < bLen) {
        [curA, curB] = [curB, curA]
    }
    if (aLen < bLen) {
        [aLen, bLen] = [bLen, aLen]
    }

    let len = aLen - bLen
    while (len > 0) {
        len--
        curA = curA.next
    }

    while (curA && curA !== curB) {
        curA = curA.next
        curB = curB.next
    }
    return curA

};