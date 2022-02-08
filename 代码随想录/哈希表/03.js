// 四数相加

var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let len = nums1.length;
    let twoSumMap = new Map();
    let count = 0;

    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            let sum = nums1[i] + nums2[j]
            twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1)
        }
    }

    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            let sum = nums3[i] + nums4[j]
            count = count + (twoSumMap.get(0 - sum) || 0) 
        }
    }
    return count
};