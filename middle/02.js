
// solution 1
const findMin = (nums) => {
    let min = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    return min
}

// solution 2
const findMin_02 = (nums) => {
    let left = 0, right = nums.length - 1
    while (left < right) {
        let mid = left + ((right - left) >> 1)
        if (nums[mid] < nums[right]) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return nums[left]
}

// test

let nums = [3, 4, 5, 1, 2]
nums = [4,5,6,7,0,1,2]

let res

res = findMin(nums)
console.log('res: ', res) // all kill

res = findMin_02(nums)
console.log('res_02: ', res) // all kill


// solution 1
const findPeakElement = (nums) => {
    let maxIdx = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[maxIdx]) {
            maxIdx = i
        }
    }
    return maxIdx
}

// solution 2
const findPeakElement_02 = (nums) => {
    return nums.indexOf(Math.max(...nums))
}

// solution 3
const findPeakElement_03 = (nums) => {
    let left = 0, right = nums.length - 1
    while(left < right) {
        let mid = left + ((right - left) >> 1)
        if(nums[mid] > (nums[mid + 1] || -1)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}

// test 
nums = [1,2,1,3,5,6,4]
nums = [1,2,3]
nums = [3,2,1]

res = findPeakElement(nums) // all kill
console.log('__res: ', res)
res = findPeakElement_02(nums) // all kill
console.log('__res_02: ', res)
res = findPeakElement_03(nums)
console.log('__res_03: ', res) // all kill