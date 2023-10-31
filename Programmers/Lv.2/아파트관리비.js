// 유지비는 매달 k일에 청구됩니다. 그 날이 주말(토요일 & 일요일)이라면, 유지비는 제일 가까운 주말에 청구됩니다. 1월(매 연도의 첫 달)의 첫째 주 첫 날의 요일이 day로 주어지며, k는 매달 유지비를 지불해야 하는 날짜일 때 이러한 파라미터를 받아 1월부터 12월까지 k가 주말이면 0, 아니라면 1을 반환하는 배열을 반환하는 solution 함수를 작성하세요.
//1월 첫째주의 날짜는 다음과 같이 주어집니다.
// 월요일: 0, 화요일: 1, 수요일: 2, 목요일: 3, 금요일: 4, 토요일 5, 일요일 6
// k는 1과 28 사이의 자연수입니다.
// 각 달의 일수는 [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 입니다. 윤년 및 휴일은 고려하지 않습니다.

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
