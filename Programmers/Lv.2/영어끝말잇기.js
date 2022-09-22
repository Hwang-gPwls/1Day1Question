function solution(n, words) {
  let answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let member = (i % n) + 1;
    let turn = Math.ceil((i + 1) / n);

    if (i > 0) {
      let last = words[i - 1].substring(words[i - 1].length - 1);

      if (i > words.indexOf(word) || last !== words[i].substring(0, 1)) {
        answer = [member, turn];
        break;
      }
    }
  }

  return answer;
}

solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);

//testcase
// 3	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	[3,3]
// 5	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	[0,0]
// 2	["hello", "one", "even", "never", "now", "world", "draw"]	[1,3]
