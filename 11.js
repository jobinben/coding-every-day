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

let nums = [1, 2, 3]

const permute = (nums) => {
    let res = [], path = []

    const permuteHelp = (n, k, used) => {
        if (path.length === k) {
            res.push([...path])
            console.log('path: ', path)
            return
        }
        for (let i = 0; i < k; i++) {
            if (used[i]) continue;
            path.push(n[i])
            console.log('push : ', path)
            used[i] = true
            console.log('used: ', used)
            permuteHelp(n, k, used)
            path.pop()
            console.log('pop : ', path)
            used[i] = false
            console.log('used: ', used)

        }
    }

    permuteHelp(nums, nums.length, [])

    console.log(res)
}

// permute(nums)

let S = "a1b2"

const letterCasePermutation = (S) => {
    let res = [], n = S.length
    console.log('n: ', n)
    const permutationHelp = (i, temp) => {
        console.log(temp)
        if(i === n) {
            res.push(temp)
            return
        }
        
        if(S[i] >= 'a' && S[i] <= 'z') {
            permutationHelp(i + 1, temp + S[i].toLowerCase())
            permutationHelp(i + 1, temp + S[i].toUpperCase())

        } else {
            permutationHelp(i + 1, temp + S[i])
        }
    }
    permutationHelp(0, '')
    console.log(res)
    
}

letterCasePermutation(S)