// let arr = [0, 1, 0, 3, 12]
// [1,0,3,12,0]

// const moveZeroes = (nums) => {
//     let p = 0
//     let help = new Array(nums.length).fill(0)
//     console.log('help: ', help)
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             help[p++] = nums[i]
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = help[i]
//     }
// }
let arr = [0, 1, 0, 3, 12]
const moveZeroes = (nums) => {
    let left = 0,
        right = 0
    while(right < nums.length) {
        if(nums[right]) {
            swap(nums, left, right)
            left++
        }
        right++
    }
}

const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


moveZeroes(arr)

console.log(arr)