/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    let result = 0;
    let sum = 0;
    let max = 0;
    let min = 0;

    nums.sort((a, b) =>  a - b);

    result = nums[0] + nums[1] + nums[2];
    
    for(let i = 0; i < nums.length - 2; i++) {
        max = nums.length - 1;
        min = i + 1;

        while(min < max) {
            sum = nums[min] + nums[i] + nums[max];

            if(Math.abs(sum - target) < Math.abs(result - target)){
                result = sum;
            }

            if(sum === target) return sum;

            if(sum > target) max--;
            else min++;
        }
    }

    return result;
};

threeSumClosest([-1,2,1,-4], 1);