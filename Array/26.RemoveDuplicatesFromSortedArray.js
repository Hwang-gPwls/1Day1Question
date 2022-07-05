/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
    let length = nums.length;
    let i = 0;
    let k = 0;

    while ((k + i) !== length) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            k++;
        } else {
            i++;
        }
    }

    return nums.length;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);