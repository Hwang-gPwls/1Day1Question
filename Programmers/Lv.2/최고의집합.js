function solution(n, s) {
  if (s < n) return [-1];
  const mid = Math.floor(s / n);
  const answer = new Array(n).fill(mid);

  for (let i = 0; i < s % n; i++) {
    answer[answer.length - i - 1]++;
  }

  return answer;
}

//testcase
// 2	9	[4, 5]
// 2	1	[-1]
// 2	8	[4, 4]
