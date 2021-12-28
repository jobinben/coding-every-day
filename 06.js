const lengthOfLongestSubstring = function (s) {
    if (!s.length) return 0

    let m = new Map(),
        n = s.length,
        ans = 0

    for (let end = 0, start = 0; end < n; end++) {
        if (m.has(s[end])) {
            start = Math.max(m.get(s[end]), start)
        }

        ans = Math.max(ans, end - start + 1)
        m.set(s[end], end + 1)
        console.log(m)
    }
    return ans
};

// test 
let s = 'abcabcbb'
s = 'dvdf'

let res = lengthOfLongestSubstring(s)

console.log(res)

// const checkInclusion = (s1, s2) => {
//     let res = s2.includes(s1)
//     let reverseRes = s2.split('').reverse().join('').includes(s1)

//     return res || reverseRes
// }

const checkInclusion = (s1, s2) => {
    let n = s1.length, m = s2.length
    if (n > m) {
        return false
    }

    let cnt1 = new Array(26).fill(0)
    let cnt2 = new Array(26).fill(0)
    for (let i = 0; i < n; i++) {
        cnt1[s1[i].charCodeAt() - 'a'.charCodeAt()]++
        cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
    }
    if(cnt1.toString() === cnt2.toString()) {
        return true
    }

    for (let i = n; i < m; ++i) {
        ++cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()];
        --cnt2[s2[i - n].charCodeAt() - 'a'.charCodeAt()];
        console.log('cnt2: ', cnt2)
        if (cnt1.toString() === cnt2.toString()) {

            return true;

        }
    }

}

// test
let s1 = 'ab', s2 = 'eidbaooo'
s2 = 'eidboaoo'
res = checkInclusion(s1, s2)
console.log(res)