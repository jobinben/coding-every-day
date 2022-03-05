// 88. 合并两个有序数组
// 双指针

var merge = function (nums1, m, nums2, n) {
    let res = [];
    let i = 0;
    let p1 = 0;
    let p2 = 0;

    while (p1 < m && p2 < n) {
        res[i++] = nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++];
    }

    // p1 和 p2 两个指针有且只有一个必越界
    while (p1 < m) {
        res[i++] = nums1[p1++];
    }
    while (p2 < n) {
        res[i++] = nums2[p2++];
    }

    for (let i = 0; i < m + n; i++) {
        nums1[i] = res[i];
    }
};