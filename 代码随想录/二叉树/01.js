// 广度优先搜索 层序遍历

const bfs = (root) => {
    let res = [], queue = []
    if(root === null) return res
    queue.push(root)

    while(queue.length !== 0) {
        let curLength = queue.length
        let curLevel = []
        for(let i = 0; i < curLength; i++) {
            let node = queue.shift()
            curLevel.push(node.val)

            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(curLevel)
    }

    return res
}