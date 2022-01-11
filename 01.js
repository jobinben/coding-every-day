/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0,
        right = nums.length - 1
    while (left < right) {
        let mid = left + ((right - left) >> 1)
        if (target > nums[mid]) {
            left = mid + 1
        } else if (target < nums[mid]) {
            right = mid - 1
        } else if (target === nums[mid]) {
            return mid
        }
    }

    return -1
};

let nums = [-1, 0, 3, 5, 9, 12], target = 9, target2 = 2


let res = search(nums, target)
let res2 = search(nums, target2)

// console.log(res)
// console.log(res2)

var searchInsert = function (nums, target) {

    let left = 0,
        right = nums.length - 1,
        ans = nums.length
    let mid
    while (left <= right) {
        mid = left + ((right - left) >> 1)
        if (target <= nums[mid]) {
            ans = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    console.log('mid: ', mid)
    return ans

};

nums = [1, 3, 5, 7]
target = 4

res = searchInsert(nums, target)
console.log(res)

const searchInsert02 = (nums, target) => {
    let left = 0, right = nums.length - 1
    let insertIndex = nums.length
    while (left <= right) {
        let mid = left + ((right - left) >> 1)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            console.log('left mid: ', mid)
            left = mid + 1
        } else if (nums[mid] > target) {
            console.log('right mid : ', mid)
            insertIndex = mid
            right = mid - 1
        }
    }
    return insertIndex
}

searchInsert02(nums, target)
