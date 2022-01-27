// solution 1

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const deleteDuplicates = (head) => {
    if(!head) return head
    let dummy = new ListNode(-1, head)
    let cur = dummy
    while(cur.next && cur.next.next) {
        if(cur.next.val === cur.next.next.val) {
            const node = cur.next.val
            while(cur.next && cur.next.val === node) {
                console.log('cur: ', cur)
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }

    return dummy.next
}


// test

let head = {val: 1,next: {val: 2,next: {val: 3, next: {val: 3,next: {val: 4,next: {val: 4,next: {val: 5}}}}}}}

let res = deleteDuplicates(head) // [1, 2, 5]

console.log('res: ', res)


// solution 1

const threeSum = (nums) => {
    let result = []
    nums.sort((a, b) => a - b)
    console.log('sort nums: ', nums)

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            return result
        }

        if( i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1
        let right = nums.length - 1

        while(left < right) {
            let res = nums[i] + nums[left] + nums[right]
            if(res > 0 ) {
                right--
            } else if(res < 0) {
                left++
            } else {
                result.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[right] === nums[right-1]) right--
                while(left < right && nums[left] === nums[left+1]) left++
                left++
                right--
            }
        }

    }

    return result
}

// test

let nums = [-1,0,1,2,-1,-4]

res = threeSum(nums)
console.log('threeSum res: ', res)