// 429. N叉树的层序遍历

var levelOrder = function(root) {
    let queue = [], res = [];

    if(!root) return queue;

    queue.push(root);

    while(queue.length > 0) {
        let curLength = queue.length;
        let curLevel = []; 
        for(let i = 0; i < curLength; i++) {
            let node = queue.shift();
            curLevel.push(node.val);

            // 遍历的是children 而不是是left 和 right 孩子了
            for(let item of node.children) {
                item && queue.push(item);
            }
        }

        res.push(curLevel);
    }

    return res;
};