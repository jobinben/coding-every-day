// 有效的字母异位词

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    let arr = new Array(26).fill(0);

    for (const i of s) {
        arr[i.charCodeAt() - 'a'.charCodeAt()]++;
    }

    for (const j of t) {
        if (!arr[j.charCodeAt() - 'a'.charCodeAt()]) return false;
        arr[j.charCodeAt() - 'a'.charCodeAt()]--
    }

    return true

};

console.log(isAnagram('anagram', 'nagaram'))