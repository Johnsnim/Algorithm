function solution(N, road, K) {
  const dijstra = (list) => {
    let time = Array(N + 1).fill(500001);
    time[1] = 0;

    while (queue.length !== 0) {
      let { end } = queue.pop();
      list[end].forEach((nextEl) => {
        if (time[nextEl.end] > time[end] + nextEl.distance) {
          time[nextEl.end] = time[end] + nextEl.distance;
          queue.push(nextEl);
        }
      });
    }
    return time;
  };

  const list = Array.from(Array(N + 1), () => []);

  road.forEach((el) => {
    let [start, end, distance] = el;
    list[start].push({ end: end, distance: distance });
    list[end].push({ end: start, distance: distance });
  });

  let queue = [{ end: 1, distance: 0 }];
  let result = dijstra(list);

  return result.filter((el) => el <= K).length;
}
