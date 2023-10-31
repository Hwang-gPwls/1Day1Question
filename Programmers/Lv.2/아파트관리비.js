function solution(day, k) {
  let answer = [];
  const Months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let sumDays = 0;

  for (let i = 0; i < Months.length; i++) {
    if (i != 0) sumDays += Months[i - 1];
    else sumDays = day + k - 1;

    let curDay = sumDays % 7;

    if (curDay === 5 || curDay === 6) answer.push(1);
    else answer.push(0);
  }
  return answer;
}

//아파트 관리비
