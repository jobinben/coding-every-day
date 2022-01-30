// 二叉树的深度优先搜索， 前序遍历：DLR ，中序遍历：LDR ， 后序遍历： LRD 。

const DLR = (root) => {
    let res = []

    const dfs = (root) => {
        if(root === null) return res
        res.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return res
}

const LDR = (root) => {
    let res = []

    const dfs = (root) => {
        if(!root) return res
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return res
}

const LRD = (root) => {
    let res = []
    const dfs = (root) => {
        if(!root) return res
        dfs(root.left)
        dfs(root.right)
        res.push(root.val)
    }
    dfs(root)
    return res
}