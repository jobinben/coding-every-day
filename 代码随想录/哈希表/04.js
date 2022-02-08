// 赎金信

// 解法1
var canConstruct = function (ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false;

    let arr = new Array(26).fill(0)

    for(const i of magazine) {
        arr[i.charCodeAt() - 'a'.charCodeAt()]++
    }

    for(const i of ransomNote) {
        if(arr[i.charCodeAt() - 'a'.charCodeAt()] === 0) return false;
        arr[i.charCodeAt() - 'a'.charCodeAt()]--
    }

    return true
};



// 解法2
var canConstruct_02 = function (ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false
    let m = new Map()
    for (let i = 0; i < magazine.length; i++) {
        if (m.has(magazine[i])) {
            m.set(magazine[i], m.get(magazine[i]) + 1)
        } else {
            m.set(magazine[i], 1)

        }
    }

    for(let i = 0; i < ransomNote.length; i++) {
        if(!(m.get(ransomNote[i]))) return false;
        m.set(ransomNote[i], m.get(ransomNote[i]) - 1)
    }

    return true
};