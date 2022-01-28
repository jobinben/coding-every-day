// solution 1

const findAnagrams = (s, p) => {
    
    let result = []
    let n = s.length, m = p.length
    if(n < m) return result
    let s1 = new Array(26).fill(0)
    let s2 = new Array(26).fill(0)

    for(let i = 0; i < m; i++) {
        s1[s[i].charCodeAt() - 'a'.charCodeAt()]++
        s2[p[i].charCodeAt() - 'a'.charCodeAt()]++
    }
    if(s1.toString() == s2.toString())  {
        result.push(0)
    }

    for(let i = m; i < n; i++) {
        s1[s[i].charCodeAt() - 'a'.charCodeAt()]++
        s1[s[i-m].charCodeAt() - 'a'.charCodeAt()]--
        
        console.log('s1: ', s1)

        if(s1.toString() === s2.toString()) {
            result.push(i - m + 1)
        }

    }

    return result

}


// test

let s = "cbaebabacd", p = "abc"

let res = findAnagrams(s, p)

console.log('res: ', res)

