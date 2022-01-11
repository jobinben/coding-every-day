let nums = [-4, -1, 0, 3, 10]

const sortedSquares = (nums) => {
    let arr = nums.map(v => v * v)
    console.log('arr: ', arr)
    arr.sort((a, b) => a - b)
    console.log(arr)
}

sortedSquares(nums)