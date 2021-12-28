let nums = [-4, -1, 0, 3, 10]

const sortedSquares = (nums) => {
    let arr = nums.map(v => v * v)
    if(nums === null || nums.length < 2) return arr

    for(let end = nums.length - 1; end > 0; end--) {
        for(let i = 0; i < end; i++) {
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i + 1)
            }
        }
    }
    return arr
}

const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(sortedSquares(nums))
console.log(nums)