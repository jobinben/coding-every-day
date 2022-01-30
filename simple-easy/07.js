// solution 1 深度优先搜索

const floodFill = (image, sr, sc, newColor) => {
    let n = image.length, m = image[0].length
    let oldColor = image[sr][sc]
    if (oldColor === newColor) return image
    const dfs = (i, j) => {
        if (i < 0 || i >= n || j < 0 || j >= m || image[i][j] !== oldColor) return;
        image[i][j] = newColor
        dfs(i, j - 1)
        dfs(i, j + 1)
        dfs(i - 1, j)
        dfs(i + 1, j)
    }

    dfs(sr, sc)

    return image
};


// solution 2 广度优先搜索 借助 栈

const floodFill_02 = (image, sr, sc, newColor) => {
    let n = image.length, m = image[0].length
    let oldColor = image[sr][sc]

    if (oldColor === newColor) return image
    const queue = [[sr, sc]]

    while (queue.length) {
        const [i, j] = queue.shift()
        image[i][j] = newColor
        if (i - 1 >= 0 && image[i - 1][j] === oldColor) queue.push([i - 1, j])
        if (i + 1 < n && image[i + 1][j] === oldColor) queue.push([i + 1, j])
        if (j - 1 >= 0 && image[i][j - 1] === oldColor) queue.push([i, j - 1])
        if (j + 1 < m && image[i][j + 1] === oldColor) queue.push([i, j + 1])
    }
    return image
}



// solution 1 深度优先搜索 

const maxAreaOfIsland = (grid) => {
    let n = grid.length, m = grid[0].length

    let count = 0

    const dfs = (i, j) => {
        if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] === 0) return 0;
        grid[i][j] = 0
        count = 1
        count = count + dfs(i, j - 1) + dfs(i, j + 1) + dfs(i - 1, j) + dfs(i + 1, j)
        return count
    }
    let maxNum = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j]) {
                maxNum = Math.max(maxNum, dfs(i, j))
            }
        }
    }

    return maxNum
};