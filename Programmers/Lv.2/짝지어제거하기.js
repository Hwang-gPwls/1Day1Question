// 효율성 테스트 통과 못함
// function solution(s)
// {
//     let answer = 0;
//     let index = 0;
//     let stringArr = s.trim().split("");

//     for(let i = 0; index < stringArr.length; i++){
//         if(stringArr[index] === stringArr[index + 1]){
//             stringArr.splice(index, 2);
//             index = 0;

//             if(stringArr.length === 0){
//                 answer = 1;
//                 break;
//             }
//         }else{
//             index = index + 1;
//         }
//     }
//     return answer;
// }

//통과 => 한 번의 for문으로 성공
function solution(s) {
  const stack = [];

  for (let i = 0, len = s.length; i < len; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length ? 0 : 1;
}

solution("baabaa");

//testcase
// "baabaa" 1
// "cdcd" 0
