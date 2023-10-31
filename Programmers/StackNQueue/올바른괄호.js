function solution(s) {
  let answer = true;
  let array = [];
  const length = s.length;

  if (s[0] === ")") return false;

  for (let i = 0; i < length; i++) {
    if (s[i] === "(") array.push("(");
    else array.pop();
  }

  answer = array.length === 0 ? true : false;
  console.log(answer);

  return answer;
}

solution(")()(");
