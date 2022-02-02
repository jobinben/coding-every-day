// 回溯 -> 组合

let path = []
let res = []

const combineHelp = (n, k, startIndex) => {
    if(path.length === k) {
        res.push([...path])
        return;
    }

    for(let i = startIndex; i <= n; i++) {
        path.push(i)
        combineHelp(n, k, i + 1)
        path.pop()
    }
}


const combine = (n, k) => {
    res = []
    combineHelp(n, k, 1)
    return res
}


var letterCombinations = function(digits) {
    const k = digits.length;
    const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    if(!k) return [];
    if(k === 1) return map[digits].split("");

    const res = [], path = [];
    backtracking(digits, k, 0);
    return res;

    function backtracking(n, k, a) {
        if(path.length === k) {
            res.push(path.join(""));
            return;
        }
        for(const v of map[n[a]]) {
            path.push(v);
            backtracking(n, k, a + 1);
            path.pop();
        }

    }
};

