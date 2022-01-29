// solution 1

const findAnagrams = (s, p) => {

    let result = []
    let n = s.length, m = p.length
    if (n < m) return result
    let s1 = new Array(26).fill(0)
    let s2 = new Array(26).fill(0)

    for (let i = 0; i < m; i++) {
        s1[s[i].charCodeAt() - 'a'.charCodeAt()]++
        s2[p[i].charCodeAt() - 'a'.charCodeAt()]++
    }
    if (s1.toString() == s2.toString()) {
        result.push(0)
    }

    for (let i = m; i < n; i++) {
        s1[s[i].charCodeAt() - 'a'.charCodeAt()]++
        s1[s[i - m].charCodeAt() - 'a'.charCodeAt()]--


        if (s1.toString() === s2.toString()) {
            result.push(i - m + 1)
        }

    }

    return result

}


// test

let s = "cbaebabacd", p = "abc"

let res = findAnagrams(s, p)

console.log('res: ', res)


// solution 1

const numSubarray = (nums, k) => {
    if (k === 0) return 0
    let ans = 0
    let left = 0, right = nums.length - 1
    let pre = 0
    let temp = 1
    while (pre <= right) {
        if (temp * nums[left] < k) {
            temp = temp * nums[left]
            ans++
            left++
        } else {
            left = ++pre
            temp = 1
        }
    }
    return ans

}

// solution 2 暴力破解

const numSubarray_02 = (nums, k) => {
    if (k === 0) return 0
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        let product = 1
        for (let j = i; j < nums.length; j++) {
            product *= nums[j]
            if (product < k) {
                ans++
            } else {
                break;
            }
        }
    }
    return ans
}

// solution 3 滑动窗口

const numSubarray_03 = (nums, k) => {
    if(k === 0) return 0
    let ans = 0
    let start = 0, end = 0
    let product = 1
    while(end < nums.length) {
        product *= nums[end]
        while(product >= k) {
            product = product / nums[start]
            start++
        }
        ans = ans + end - start + 1
        end++
    }
    return ans < 0 ? 0 : ans
}


// test

let nums = [10, 5, 2, 6], k = 100
// nums = [1, 2, 3], k = 0

res = numSubarray(nums, k) // [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]

console.log('numSubarray res: ', res)

res = numSubarray_02(nums, k) 

console.log('numSubarray_02 res: ', res)

res = numSubarray_03(nums, k) 

console.log('numSubarray_03 res: ', res)


// solution 1 暴力破解

const minSubArrayLen = (target, nums) => {
    if (nums.length === 0) return 0

    const MAX_VALUE = 999999999
    let ans = MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (sum >= target) {
                ans = Math.min(ans, j - i + 1)
                break;
            }
        }
    }

    return ans === MAX_VALUE ? 0 : ans
}

// solution 2 滑动窗口
const minSubArrayLen_02 = (target, nums) => {
    if (nums.length === 0) return 0
    const MAX_VALUE = 9999999
    let ans = MAX_VALUE

    let start = 0, end = 0, length = nums.length - 1
    let sum = 0
    while (end <= length) {
        sum += nums[end]
        while(sum >= target) {
            ans = Math.min(ans, end - start + 1)
            sum = sum - nums[start]
            start++
        }
        end++
    }
    return ans === MAX_VALUE ? 0 : ans
}

let target = 7
nums = [2, 3, 1, 2, 4, 3]
// target = 4, nums = [1, 4, 4]
// target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1]

res = minSubArrayLen(target, nums)

console.log('minLen: ', res)

