// 对称二叉树
// 递归
const isSymmetric = (root) => {
    if (root === null) return true

    const dfs = (left, right) => {
        if (left !== null && right === null) {
            return false
        } else if (left === null && right !== null) {
            return false
        } else if (left === null && right === null) {
            return true
        } else if (left.val !== right.val) {
            return false
        }

        let outSide = dfs(left.left, right.right)
        let inSide = dfs(left.right, right.left)

        return outSide&&inSide
    }

    return dfs(root.left, root.right)
}

// 队列

const isSymmetric_02 = (root) => {
    let queue = []
    if(root === null) return true
    queue.push(root.left)
    queue.push(root.right)

    while(queue.length !== 0) {
        let leftNode = queue.shift()
        let rightNode = queue.shift()
        
        if(leftNode === null && rightNode === null) {
            continue
        }

        if(leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
            return false
        }
        queue.push(leftNode.left)
        queue.push(rightNode.right)
        queue.push(leftNode.right)
        queue.push(rightNode.left)
    }

     return true
}