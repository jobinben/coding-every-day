// 长度最小的子数组  滑动窗口解决

var minSubArrayLen = function (target, nums) {
    let len = nums.length;
    if(len === 0) return 0;
    let sum = 0;
    let start = 0, end = 0;
    let MAX_VALUE = 99999;
    let ans = MAX_VALUE
    while(end < len) {
        sum += nums[end]
        while(sum >= target) {
            ans = Math.min(ans, end - start + 1);
            sum -= nums[start++];
        }
        end++;
    }

    return ans === MAX_VALUE ? 0 : ans;
};