// nums = [2,3,1,1,4]

/**
    Input: nums = [1,4,3,2]
    Output: 4
    Explanation: All possible pairings (ignoring the ordering of elements) are:
    1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
    2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
    3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
    So the maximum possible sum is 4.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 var canJump = function (nums) {    
    if (!nums) return false;

    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if(max < i) return false;

        max = Math.max(nums[i] + i, max);
    }

    return true;
};

canJump([3, 2, 1, 0, 4]);