// solution 1

const backspacecompare = (s, t) => {
    if (s === t) return true

    while (s.indexOf('#') > -1) {
        let index = s.indexOf('#')
        s = s.split('')
        if(index - 1 < 0) {
            s.splice(index, 1)
        } else {
            s.splice(index - 1, 2)
        }
        s = s.join('')
    }

    console.log('s: ', s)

    while (t.indexOf('#') > -1) {
        let index = t.indexOf('#')
        t = t.split('')
        if(index - 1 < 0) {
            t.splice(index, 1)
        } else {
            t.splice(index - 1, 2)
        }
        t = t.join('')
    }

    console.log('t: ', t)

    return s === t

}

// solution 2

const backspacecompare_02 = (s, t) => {
    if(s === t) return true
    let a = [], b = []

    for(let i = 0; i < s.length; i++) {

        s[i] === '#' ? a.pop() : a.push(s[i])
    }
    for(let j = 0; j < t.length; j++) {
        t[j] === '#' ? b.pop() : b.push(t[j])
    }

    return a.join('') === b.join('')
}

// test

let s = "ab#c", t = "ad#c"
s = "ab##", t = "c#d#"
s = "a##c", t = "#a#c"
s = "a#c", t = "b"
s ="y#fo##f",t = "y#f#o##f"

let res = backspacecompare(s, t)
console.log('res: ', res)

res = backspacecompare_02(s, t)
console.log('res_02: ', res)



// solution 1

const maxArea = (height) => {
    let left = 0, right = height.length - 1
    let ans = 0

    while(left < right) {
        let area = Math.min(height[left], height[right]) * (right - left)
        ans = Math.max(ans, area)
        if(height[left] <= height[right]) {
            left++
        }else {
            right--
        }
    }

    return ans
}

// test 

let height = [1,8,6,2,5,4,8,3,7]

res = maxArea(height)

console.log('maxArea res: ', res)