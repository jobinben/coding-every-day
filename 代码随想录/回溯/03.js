
// 39.组合总和 

var combinationSum = function(candidates, target) {
    
    let path = [];
    let res = [];

    const combineBack = (n, target, sum, startIndex) => {
        if(sum > target) return;

        if(target === sum) {
            res.push([...path]);
            return;
        }

        for(let i = startIndex; i < n; i++) {
            sum += candidates[i];
            path.push(candidates[i]);
            combineBack(n, target, sum, i);
            sum -= candidates[i];
            path.pop();
        }
    }

    combineBack(candidates.length, target, 0, 0);
    return res;
};