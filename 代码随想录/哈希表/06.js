// 四数之和  用双指针法

var fourSum = function(nums, target) {

    let len = nums.length;
    if(len < 4) return [];

    // 1. 先排序
    nums.sort((a, b) => a - b);
    let res = [];
    for(let i = 0; i < len; i++) {
        // 去重 i
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        for(let j = i + 1; j < len; j++) {
            // 去重 j
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            
            let left = j + 1, right = len - 1;

            // 进入left 和 right

            while(left < right) {

                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if(sum > target) {
                    right--;
                } else if(sum < target) {
                    left++;
                } else {
                    // sum 等于 target目标值
                    res.push([nums[i], nums[j], nums[left], nums[right]]);

                    // 去重 right 和 left 下 同样的值
                    while(left < right && nums[left] === nums[left + 1]) left++;
                    while(left < right && nums[right] === nums[right - 1]) right--;

                    // 进入下一轮

                    left++;
                    right--;
                }
            }

        }

    }

    return res;
};