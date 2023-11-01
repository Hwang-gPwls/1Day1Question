//Map
let max = new Map();

// set으로 맵 객체에 삽입
max.set('id', 0);
max.set('이름', '마이클');
​
// 이차원 배열로 넘겨주는 것도 가능합니다
let michael = new Map([
  ['id', 0],
  ['이름', '마이클'],
]);
​
// get으로 맵 객체 조회
max.get('이름'); // "마이클"
​
// delete로 삭제
max.delete('나이'); // 삭제가 성공하면 true를 반환
​
// clear로 맵 안의 프로퍼티 전부삭제
max.clear();







//Set (set 객체는 중복되지 않는 유일한 값들의 집합)
const set = new Set();
console.log(set); // Set(0) {}

const set1 = new Set([1, 2, 3, 3]);
console.log(set1); // Set(3) {1, 2, 3}

const set2 = new Set('hello');
console.log(set2); // Set(4) {"h", "e", "l", "o"}

//크기 확인
set.size

//요소 추가
const set3 = new Set();

set3.add(1).add(2).add(2); // 이렇게도 사용가능한데 중복된 값은 무시된다.
console.log(set3); // Set(2) {1, 2}


//요소 존재 여부 확인
const set4 = new Set([1, 2, 3]);

console.log(set4.has(2)); // true
console.log(set4.has(4)); // false

//요소 삭제
const set5 = new Set([1, 2, 3]);

// 요소 2를 삭제한다.
set5.delete(2);
console.log(set5); // Set(2) {1, 3}

//일괄 삭제
set.clear();

//요소 순회
const set6 = new Set([1, 2, 3]);

// 이터러블인 Set 객체는 for...of 문으로 순회할 수 있다.
for (const value of set) {
  console.log(value); // 1 2 3
}

// 이터러블인 Set 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...set6]); // [1, 2, 3]

// 이터러블인 Set 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [a, ...rest] = [...set6];
console.log(a, rest); // 1, [2, 3]




//Array
const array = [];

//.push() : 배열의 맨 끝에 값을 추가한다.
//.pop() : 배열의 맨 끝에 값을 제거한다.
//.shift() : 배열의 맨 앞에 값을 제거한다.
//.unshift() : 배열의 맨 앞에 값을 추가한다.

array.push(1);
array.push(2);
array.pop(); // 2
