// 三数之和， 用的是双指针
// 1. 先排序
// 2. 去重

var threeSum = function (nums) {
    let len = nums.length;
    if (len < 3) return [];
    // 先排序
    nums.sort((a, b) => a - b);
    let res = []
    for (let i = 0; i < len; i++) {
        // 排序之后第一个数大于0，直接返回。
        if (nums[i] > 0) return res;

        // 去重同样的i目标下的值, 不用走下面的while。
        if(i > 0 && nums[i] === nums[i - 1]) continue;


        let left = i + 1, right = len - 1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if(sum > 0) {
                right--;
            } else if(sum < 0) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]])
                // 去重left和right目标下同样的值。， [0, 0, 0, 0] 或者 [0,1,1,2,2]
                while(left　< right && nums[left] === nums[left + 1]) left++;
                while(left < right && nums[right] === nums[right - 1]) right--;
                // 进入下一轮
                left++;
                right--;
            }
        }

    }
    return res;
};