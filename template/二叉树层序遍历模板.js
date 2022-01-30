// 二叉树的层序遍历，就是图论中的广度优先搜索在二叉树中的应用，需要借助队列来实现（此时又发现队列的一个应用了）。

// 一个打十个的模板

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