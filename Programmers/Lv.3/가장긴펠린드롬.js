//이거 잘 모르게씀

const isPalindrome = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }

  return true;
};

function solution(s) {
  let count = s.length;

  while (count > 0) {
    for (let i = 0; i < s.length - count; i++) {
      let curString = s.substring(i, count + i);

      if (isPalindrome(curString)) {
        return curString.length;
      }
    }
  }
}

solution("abacde");

//testcase
// "abcdcba"	7
// "abacde"	3
