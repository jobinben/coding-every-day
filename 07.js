const maxAreaOfIsland = (grid) => {
    let row = grid.length, col = grid[0].length
    let count = 0
    const dfs = (i, j) => {
        if(i < 0 || i >= row || j < 0 ||  j >= col || grid[i][j] === 0) return 0;
        grid[i][j] = 0
        count = 1
        count += dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j + 1) + dfs(i, j - 1)
        console.log('count: ', count)
        return count
    }
    let maxNum = 0
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            maxNum = Math.max(maxNum, dfs(i, j))
        }
    }

    return maxNum
}

let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,1,1,0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,1,0,0,1,0,1,0,0],
            [0,1,0,0,1,1,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0]]

grid = [[1,1,0,0,0],
        [1,1,0,0,0],
        [0,0,0,1,1],
        [0,0,0,1,1]]

grid = [[0,1],
        [1,1]]

let ans = maxAreaOfIsland(grid)

console.log(ans)

