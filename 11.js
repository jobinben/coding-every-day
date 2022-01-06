let n = 4, k = 2
let res = []
let path = []
const combine = (n, k) => {
    combineHelp(n, k, 1)
}

const combineHelp = (n, k, startIndex) => {
    if (path.length === k) {
        console.log('path: ', path)
        res.push([...path])
        return
    }
    for (let i = startIndex; i <= n; i++) {
        // for(let i = startIndex; i <= n - (k - path.length) + 1; i++) { // 剪枝优化版 去掉最后一个数 不用操作
        path.push(i)
        console.log('push : ', path)
        combineHelp(n, k, i + 1)
        path.pop()
        console.log('pop : ', path)
    }
}

combine(n, k)