// solution 1

const search = (nums, target) => {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = left + ((right - left) >> 1)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

// test
let nums = [-1, 0, 3, 5, 9, 12], target = 9
nums = [-1, 0, 3, 5, 9, 12], target = 2

console.log('search: ', search(nums, target))



// solution 1

const searchInsert = (nums, target) => {
    let left = 0, right = nums.length - 1
    let ans = nums.length

    while (left <= right) {
        let mid = left + ((right - left) >> 1)

        if (target <= nums[mid]) {
            ans = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return ans
}

// test
           
nums = [1,3,5,6], target = 5
console.log('searchInsert: ', searchInsert(nums, target))

