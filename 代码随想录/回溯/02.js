// 216. 组合总和 III

var combinationSum3 = function (k, n) {

    let path = [];
    let res = [];

    const combineBack = (targetSum, k, startSum, startIndex) => {
        if (path.length === k) {
            if (targetSum === startSum) res.push([...path]);
            return;
        }

        for (let i = startIndex; i <= 9; i++) {
            startSum = startSum + i;
            path.push(i);
            combineBack(n, k, startSum, i + 1);
            startSum = startSum - i;
            path.pop();
        }
    }

    combineBack(n, k, 0, 1);
    return res;
};