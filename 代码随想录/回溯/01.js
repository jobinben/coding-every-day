// 77.组合 

var combine = function (n, k) {
    let path = [];
    let res = [];

    const combineBack = (n, k, startIndex) => {
        if (path.length === k) {
            res.push([...path]);
            return;
        }

        for (let i = startIndex; i <= n; i++) {
            path.push(i);
            combineBack(n, k, i + 1);
            path.pop();
        }
    }

    combineBack(n, k, 1);
    return res;
};

