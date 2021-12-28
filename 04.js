let list = {
    head: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5
                    }
                }
            }
        }
    }
}


// test

const middleNode = (head) => {
    let p = head
    let sum = 1
    while(p.next !== undefined) {
        console.log(p.next.val)
        sum++
        p = p.next
    }
    return sum
}

let ans = middleNode(list.head)
console.log('ans: ', ans)