// 螺旋矩阵生成

var generateMatrix = function (n) {
    let arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let startX = 0, startY = 0; // 起始位置
    let loop = Math.floor(n / 2); // 旋转圈数
    let mid = Math.floor(n / 2);  // 中间位置
    let offset = 1; // 控制每一层填充元素的个数
    let count = 1; // 更新填充数字


    while (loop--) {
        let row = startX, col = startY;

        // 上行从左到右(左闭右开)
        for (; col < startY + n - offset; col++) {
            arr[row][col] = count++;
        }

        // 右列从上到下(左闭右开)
        for (; row < startX + n - offset; row++) {
            arr[row][col] = count++;
        }

        // 下行从右到左
        for (; col > startX; col--) {
            arr[row][col] = count++;
        }

        // 左列从下到上
        for (; row > startY; row--) {
            arr[row][col] = count++;
        }

        // 更新起始位置
        startX++;
        startY++;

        // 更新offset
        offset += 2;
    }

    // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
    if (n % 2 === 1) {
        arr[mid][mid] = count;
    }

    return arr;
};