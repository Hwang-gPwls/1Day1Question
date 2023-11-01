function solution(priorities, location) {
  let answer = 0;
  let queue = priorities.map((process, idx) => {
    return { process, idx };
  });

  while (queue.length) {
    const element = priorities.shift();

    if (queue.some((value) => value.process > element.process)) {
      queue.push(element);
    } else {
      answer++;

      if (element.idx === location) break;
    }
  }

  return answer;
}

solution([2, 1, 3, 2], 2);
