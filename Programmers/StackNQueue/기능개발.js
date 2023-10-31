function solution(progresses, speeds) {
  let answer = [];
  let max = Math.ceil((100 - progresses[0]) / speeds[0]);
  let cnt = 1;

  for (let i = 1; i < progresses.length; i++) {
    const workingDay = Math.ceil((100 - progresses[i]) / speeds[i]);

    if (workingDay <= max) {
      cnt++;
    } else {
      answer.push(cnt);
      max = workingDay;
      cnt = 1;
    }
  }

  answer.push(cnt);

  return answer;
}

// function solution(progresses, speeds) {
//     let answer = [0];
//     let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//     let maxDay = days[0];

//     for(let i = 0, j = 0; i< days.length; i++){
//         if(days[i] <= maxDay) {
//             answer[j] += 1;
//         } else {
//             maxDay = days[i];
//             answer[++j] = 1;
//         }
//     }

//     return answer;
// }

solution([99, 99, 99, 99, 99], [99, 99, 99, 99, 99]);
