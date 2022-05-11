// gas = [1,2,3,4,5], cost = [3,4,5,1,2]

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    if (!gas || !cost) return false;

    let startingIdx = 0;
    let remainGas = 0;
    let totalGas = 0;

    for (let i = 0; i < gas.length; i++) {
        remainGas += gas[i] - cost[i];
        totalGas += gas[i] - cost[i];

        if (remainGas < 0) {
            remainGas = 0;
            startingIdx = i + 1;
        }
    }

    return totalGas < 0 ? -1 : startingIdx;
};

canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]);

