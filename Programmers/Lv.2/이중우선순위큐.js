function solution(operations) {
  var answer = [];

  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i].split(" ");

    if (operation[0] === "I") {
      answer.push(operation[1]);
    } else {
      if (Number(operation[1]) > 0) {
        const max = Math.max.apply(null, answer);
        answer.splice(answer.indexOf(max.toString()), 1);
      } else {
        const min = Math.min.apply(null, answer);
        answer.splice(answer.indexOf(min.toString()), 1);
      }
    }
  }

  answer = answer.length ? answer : [0, 0];
  answer.sort((a, b) => b - a);
  return [Number(answer[0]), Number(answer[answer.length - 1])];
}

//test case
// ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]	[0,0]
// ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]	[333, -45]
