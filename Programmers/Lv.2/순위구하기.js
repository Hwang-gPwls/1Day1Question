function solution(grade) {
  let answer = [];

  const result = grade.map((value) => {
    const rank = grade.filter((num) => num > value).length + 1;
    return rank;
  });

  // const length = grade.length;
  // const result = new Array(length).fill(1);

  // for(let i = 1; i < length; i++){
  //     for(let j = 0; j < length; j++){
  //         if(grade[j] < grade[i])
  //         result[i]++;
  //     }
  // }

  // console.log(result);
}

solution([3, 2, 1, 2]);
