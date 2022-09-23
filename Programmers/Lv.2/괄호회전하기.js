function solution(s) {
  if (s.length % 2 === 1) return 0;
  const sLength = s.length;
  let answer = 0;

  for (let i = 0; i < sLength; i++) {
    let str = s.slice(i) + s.slice(0, i);
    let isRight = true;
    const stack = [];

    for (let c of str) {
      if (c === "(" || c === "{" || c === "[") {
        stack.push(c);
      } else {
        const bracket = stack.pop();
        if (c === ")" && bracket === "(") continue;
        if (c === "}" && bracket === "{") continue;
        if (c === "]" && bracket === "[") continue;

        isRight = false;
        break;
      }
    }

    if (isRight) answer++;
  }
  return answer;
}

//testcase
// "[](){}"	3
// "}]()[{"	2
// "[)(]"	0
// "}}}"	0
