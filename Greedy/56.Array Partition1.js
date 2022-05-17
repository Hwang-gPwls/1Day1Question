//nums = [1,4,3,2]

/**
 * @param {number[]} nums
 * @return {number}
 */

 var arrayPairSum = function(nums) {
    nums = nums.sort((a,b) => a - b);

    let maxSum = 0;

    for(let i=0; i < nums.length; i = i + 2){
        maxSum += nums[i];
    }

    return maxSum;
};

arrayPairSum([1,4,3,2]);