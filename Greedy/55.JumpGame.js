// nums = [2,3,1,1,4]
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