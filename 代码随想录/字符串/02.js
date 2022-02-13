// 反转字符串2
// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

const swap = (s, start, end) => {
    while (start < end) {
        [s[start++], s[end--]] = [s[end], s[start]];
    }
}
var reverseStr = function (s, k) {
    let arr = s.split('');
    for (let i = 0; i < s.length; i += 2 * k) {
        if (i + k <= s.length) {
            swap(arr, i, i + k - 1);
            continue;
        }

        swap(arr, i, s.length - 1);
    }

    return arr.join('');
};