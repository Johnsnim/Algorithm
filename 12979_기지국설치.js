function solution(n, stations, w) {
  var answer = 0;
  let check = 1;
  let index = 0;

  while (check <= n) {
    if (check >= stations[index] - w && check <= stations[index] + w) {
      check = stations[index] + w;
      index++;
      check++;
    } else {
      answer++;
      check = check + w + w;
      check++;
    }
  }
  return answer;
}
