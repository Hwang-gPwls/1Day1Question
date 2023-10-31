function solution(orders) {
  let userOrders = {};
  let answer = [];

  for (let i = 0; i < orders.length; i++) {
    const [user, ...foods] = orders[i].split(" ");

    if (!userOrders[user]) {
      userOrders[user] = new Set(foods);
    } else {
      foods.forEach((food) => userOrders[user].add(food));
    }
  }

  let maxCnt = 0;

  for (let i = 0; i < userOrders.length; i++) {
    console.log(userOrders[i].size);
    const cnt = userOrders[i].size;

    if (cnt > maxCnt) {
      maxCnt = cnt;
      answer = [];
      answer.push(userOrders[i]);
    } else if (cnt === maxCnt) answer.push(userOrders[i]);
  }

  if (answer.length !== 0) answer.sort();

  console.log(answer);
}

solution([
  "alex pizza pasta",
  "alex pizza pizza",
  "alex noodle",
  "bob pasta",
  "bob noodle sandwich pasta",
  "bob steak noodle",
]);

//주문한 음식
