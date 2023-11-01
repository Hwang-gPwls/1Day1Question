function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = new Array(bridge_length).fill(0);
  let curWeight = 0;

  while (bridge.length) {
    curWeight -= bridge.shift();

    if (truck_weights.length) {
      const truck = truck_weights.shift();

      if (curWeight + truck <= weight) {
        bridge.push(truck);
        curWeight += truck;
      } else {
        truck_weights.unshift(truck);
        bridge.push(0);
      }
    }

    answer++;
  }

  return answer;
}
