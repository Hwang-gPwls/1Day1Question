/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 var threeSum = function(nums) {
    let result = [];
    let midResult = [];
    let sum = 0;
    let cnt = 0;

    for(let i=0; i < nums.length; i++){
        sum += nums[i];
        cnt++;

        midResult.push(nums[i]);

        if(cnt === 3 || i === nums.length - 1){
            if(sum === 0 && cnt === 3) {
                midResult.push(nums[i]);
            }
            
            midResult = [];
            cnt = 0;
            
        }
    }

    return result
};

threeSum([-1,0,1,2,-1,-4]);

//Input: nums = [-1,0,1,2,-1,-4]
//Output: [[-1,-1,2],[-1,0,1]]