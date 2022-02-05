// 平衡二叉树

// 后序遍历

const isBalanced = (root) => {
    if (root === null) return true

    const getHeight = (root) => {
        if (root === null) return 0

        let leftHeight = getHeight(root.left) // 左
        if (leftHeight === -1) return -1
        let rightHeight = getHeight(root.right) // 右
        if (rightHeight === -1) return -1

        if (Math.abs(leftHeight - rightHeight) > 1) { // 中
            return -1
        } else {
            // 以当前节点为根节点的树的最大高度
            return 1 + Math.max(leftHeight, rightHeight)
        }

    }

    return !(getHeight(root) === -1)
}