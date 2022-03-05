// 199.二叉树的右视图

// 层次遍历

var rightSideView = function(root) {
    let queue = [], res = [];

    if(!root) return queue;

    queue.push(root);

    while(queue.length > 0 ) {
        let curLength = queue.length;
        
        for(let i = 0; i < curLength; i++) {
            let node = queue.shift();
            if(i === curLength - 1) {
                res.push(node.val)
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }

    return res;
};