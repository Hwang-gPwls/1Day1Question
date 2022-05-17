//nums = [2,3,1,1,4]
/**
 * @param {number[]} nums
 * @return {number}
 */

 var jump = function(nums) {
    if (!nums) return false;

    let jumpCnt = 0;
    let max = 0;
    let oldMax = 0;

    for(let i = 0; i < nums.length - 1; i++){
        max = Math.max(nums[i] + i, max);

        if(i === oldMax){
            jumpCnt++;
            oldMax = max;
        }
    }

    return jumpCnt;
};

jump([3, 2, 1, 0, 4]);