// happy 数

const getSum = (num) => {
    let sum = 0;
    while (num) {
        sum += (num % 10) * (num % 10)
        num = Math.floor(num / 10);
    }
    return sum;
}
var isHappy = function (n) {
    let s = new Set()
    while (true) {
        let sum = getSum(n)
        if (sum === 1) return true;
        if (s.has(sum)) {
            return false;
        } else {
            s.add(sum)
        }
        n = sum;
    }
};