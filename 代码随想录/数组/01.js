// 移除元素并返回新的长度 双指针法

var removeElement = function(nums, val) {
    let slow = 0;
    for(let fast = 0; fast < nums.length; fast++) {
        if(val !== nums[fast]) {
            nums[slow++] = nums[fast]
        }
    }
    return slow
};