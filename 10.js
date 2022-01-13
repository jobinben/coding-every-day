const list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

const list1 = JSON.parse(JSON.stringify(list))
const list2 = JSON.parse(JSON.stringify(list))

const reverseList = (head) => {
    let pre = null
    let cur = head
    while(cur) {
        let next = cur.next // 保存下一个结点
        cur.next = pre   // 进行翻转
        console.log('cur: ', cur)
        pre = cur  // 更新pre指针
        cur = next // 更新cur指针
        console.log('pre: ', pre)
    }
    return pre
}

reverseList(list)


const reverseList02 = (head) => {
    if(!head) return head;
    let pre = null
    let cur = head
    while(cur) {
        const temp = cur.next // 保存下一个结点
        cur.next = pre // 翻转
        pre = cur // 更新pre指针
        cur = temp // 更新cur指针
    }
    return pre
}

const reverseList03 = (head) => {
    if(!head) return head;

    const reverseHelp = (pre, cur) => {
        if(cur === null) return pre;
        const temp = cur.next
        cur.next = pre
        return reverseHelp(cur, temp) // 递归的操作是这两步: pre = cur, cur = temp
    }

    return reverseHelp(null, head)
}

console.log('02: ' ,reverseList02(list1))
console.log('03: ', reverseList03(list2))

