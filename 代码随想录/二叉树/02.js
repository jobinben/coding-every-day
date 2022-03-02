// 深度优先搜索

const dfs = (i, j) => {
    if (i < 0 || i >= n || j < 0 || j >= m || nums[i][j] === 0) return 0;
    nums[i][j] = 1
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
}

