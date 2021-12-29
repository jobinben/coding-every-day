let mat = [[0,0,0],[0,1,0],[1,1,1]]

const updateMat = (mat) => {
    if (!mat) return [];
    let m = mat.length
    let n = mat[0].length
    let ans = new Array(m)
    for (let i = 0; i < m; i++) {
        ans[i] = new Array(n).fill(n + m)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                ans[i][j] = 0
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            i - 1 >= 0 && (ans[i][j] = Math.min(ans[i][j], ans[i - 1][j] + 1))
            j - 1 >= 0 && (ans[i][j] = Math.min(ans[i][j], ans[i][j - 1] + 1))
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            i + 1 < m && (ans[i][j] = Math.min(ans[i][j], ans[i + 1][j] + 1))
            j + 1 < n && (ans[i][j] = Math.min(ans[i][j], ans[i][j + 1] + 1))
        }
    }

    console.log(ans)
    return ans
    
}

// updateMat(mat)

// 橘子

let grid = [[2,1,1],[1,1,0],[0,1,1]]
// grid = [[2,1,1],[0,1,1],[1,0,1]]

const orangesRotting =  (grid) => {

    let m = grid.length
    let n = grid[0].length

  
    

    // 是否还有新鲜橘子
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1
            }
        }
    }

};

let res = orangesRotting(grid)
console.log(res)
