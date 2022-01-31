// solution 1 深度优先搜索

const numIslands = (grid) => {

    let n = grid.length, m = grid[0].length

    let count = 0

    const dfs = (i, j) => {
        if(i < 0 || i >= n || j < 0 || j>= m || grid[i][j] === '0') return 0;
        grid[i][j] = '0'
        dfs(i, j - 1)
        dfs(i, j + 1)
        dfs(i - 1, j)
        dfs(i + 1, j)
        return 1
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j <m;j++) {
             if(grid[i][j] === '1') {
                 count += dfs(i, j)
             }
        }
    }
    return count
};


