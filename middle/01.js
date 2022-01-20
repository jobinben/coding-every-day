
// solution 1
const searchRange = (nums, target) => {
    let start = -1, end = -1
    start = nums.indexOf(target)
    end = nums.lastIndexOf(target)
    return [start, end]
}

// solution 2
const searchRange_02 = (nums, target) => {
    let left = 0, right = nums.length - 1;
    let start = end = -1
    let ans = [start, end]
    while(left <= right) {
        let mid = (left + ((right - left) >> 1))
        if(nums[mid] <= target) {
            end = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    left = 0, right = nums.length - 1
    while(left <= right) {
        let mid = (left + ((right - left) >> 1))
        if(nums[mid] >= target) {
            start = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    if(start <= end && end < nums.length && nums[start] === target && nums[end] === target) {
        ans = [start, end]
    }
    return ans
}

// test
let nums = [5,7,7,8,8,10], target = 6

let res = searchRange(nums, target) // AK all kill
console.log('res: ', res)

res = searchRange_02(nums, target) // all kill
console.log('res_02: ', res)




// solution 1
const search = (nums, target) => {
    return nums.indexOf(target)
}

// solution 2
const search_02 = (nums, target) => {
    let left = 0, right = nums.length - 1
    while(left <= right) {
        let mid = left + ((right - left) >> 1)
        if(nums[mid] === target) return mid

        if(nums[0] <= nums[mid]) { // 正常升序
            if(nums[0] <= target && nums[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else { // 倒序 乱序的情况
            if(nums[mid] < target && target <= nums[nums.length - 1]){
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return -1
}

// test
nums = [4,5,6,7,0,1,2], target = 0

res = search(nums, target)
console.log('search res:　', res) // all kill

res = search_02(nums, target)
console.log('search_02 res: ', res) // all kill


// solution 1

const searchMatrix = (matrix, target) => {
    let n = matrix.length, m = matrix[0].length
    for(let i = 0; i < n; i++) {
        if( target >= matrix[i][0] && target <= matrix[i][m-1]) {
            let left = 0, right = m - 1
            while(left <= right) {
                let mid = left + ((right - left) >> 1)
                if(matrix[i][mid] === target){
                    return true
                } else if(matrix[i][mid] > target) {
                    right = mid - 1
                } else if (matrix[i][mid] < target) {
                    left = mid + 1
                }
            }
        }
    }

    return false
}

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 16

res = searchMatrix(matrix, target)
console.log('searchMatrix res:', res)