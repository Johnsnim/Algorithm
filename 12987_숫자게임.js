/*
function solution(A, B) {
    var answer = 0;
    
    A.sort((a,b) => {
        return a - b
    })

    B.sort((a,b) => {
        return a - b
    })

    for(let i=0; i<A.length; i++){
         for(let j=0; j<B.length; j++) {
             if(A[i] < B[j]) {
                 answer++
                 B.splice(j, 1)
                 break;
             }
         }
    }
    
    return answer;
}
*/

/*

function solution(A, B) {
    var answer = 0;
    
    A.sort((a,b) => {
        return a - b
    })
  

    B.sort((a,b) => {
        return a - b
    })
   

    for(let i=0; i<A.length && B.length != 0; i++){
         for(let j=0; j<B.length; j++) {
             if(A[i] < B[j]) {
                 answer++
                 B.splice(0, j+1)
                 break;
             }
         }
    }
    
    return answer;
}
*/

function solution(A, B) {
  let answer = 0;
  let index = 0;
  let start = 0;

  A.sort((a, b) => {
    return a - b;
  });

  B.sort((a, b) => {
    return a - b;
  });

  for (let i = start; i < B.length; i++) {
    if (A[index] < B[i]) {
      answer++;
      start = i;
      index++;
    }
  }
  return answer;
}
