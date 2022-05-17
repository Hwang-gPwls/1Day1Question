// people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]

/**
 * @param {number[][]} people
 * @return {number[][]}
 */

/**
 Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
 Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
 Explanation:
 Person 0 has height 5 with no other people taller or the same height in front.
 Person 1 has height 7 with no other people taller or the same height in front.
 Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.
 Person 3 has height 6 with one person taller or the same height in front, which is person 1.
 Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.
 Person 5 has height 7 with one person taller or the same height in front, which is person 1.
 Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue.
 */

 var reconstructQueue = function(people) {
    people = people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

    let result = [];

    for (let i = 0; i < people.length; i++) {
        result.splice(people[i][1], 0, people[i]);
    }

    return result;
};

reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]);
