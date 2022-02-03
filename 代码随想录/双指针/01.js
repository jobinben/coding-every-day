// 反转字符串

const swap = (s, start, end) => {
    while(start < end) {
        [s[start++], s[end--]] = [s[end], s[start]]
    }
}
var reverseString = function(s) {
    swap(s, 0, s.length - 1)
    return s
};