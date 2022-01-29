// solution 1 滑动窗口 + hash

const lengthOfLongestSubstring = (s) => {
    let m = new Map()
    let start = 0
    let ans = 0
    for(let end = 0; end < s.length; end++) {
        if(m.get(s[end])) {
            start = Math.max(m.get(s[end]), start)
        }
        ans = Math.max(ans, end - start + 1)
        m.set(s[end], end + 1)
    }

    return ans
}


let s = 'abcabcbb'

console.log('length: ', lengthOfLongestSubstring(s))


// solution 2 滑动窗口

const checkInclusion = (s1, s2)  => {
    let n = s1.length, m = s2.length
    if(n > m) return false
    let arr1 = new Array(26).fill(0)
    let arr2 = new Array(26).fill(0)

    for(let i = 0; i < n; i++) {
        arr1[s1[i].charCodeAt() - 'a'.charCodeAt()]++
        arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
    }

    if(arr1.toString() === arr2.toString()) return true

    for(let i = n; i < m; i++) {
        arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
        arr2[s2[i - n].charCodeAt() - 'a'.charCodeAt()]--

        if(arr1.toString() === arr2.toString()) {
            return true
        }
    }

    return false
}