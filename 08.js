const t1 = {
    val: 1,
    left: {
        val: 3,
        left: {
            val: 5
        }
    },
    right: {
        val: 2
    }
}

const t2 = {
    val: 2,
    left: {
        val: 1,
        right: {
            val: 4
        }
    },
    right: {
        val: 3,
        right: {
            val: 7
        }
    }
}




const mergeTrees = (root1, root2) => {
    let t = []
    const DLR = (r1, r2) => {
        if (!r1 && !r2) return;
        if (r1 && r2) {
            t.push(r1.val + r2.val)
            DLR(r1.left, r2.left)
            DLR(r1.right, r2.right)
        } else if (r1 && !r2) {
            t.push(r1.val)
            DLR(r1.left)
            DLR(r1.right)
        } else {
            t.push(r2.val)
            DLR(r2.left)
            DLR(r2.right)
        }
    }

    DLR(root1, root2)

    console.log('t: ', t)
}

// mergeTrees(t1, t2)

let t3 = {
    val: 3,
    left: {
        val: 9
    },
    right: {
        val: 20,
        left: {
            val: 15
        },
        right: {
            val: 7
        }
    }
}

const levelOrderBottom = (root) => {
    let res = []
    if (!root) return res;
    let queue = []
    queue.push(root)
    console.log(queue)
    while (queue.length !== 0) {
        let curLength = queue.length
        let curNodes = [] // 存放每一层的结点
        for(let i = 0; i < curLength; i++) {
            let node = queue.shift()
            curNodes.push(node.val)
            // 存放下一层的结点
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        console.log('queue: ', queue)
        res.push(curNodes)
    }

    console.log('res: ', res)

}
// [ [3], [9, 20], [15, 7]]
levelOrderBottom(t3)