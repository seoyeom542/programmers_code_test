function solution(q, r, code) {
    var answer = '';
    [...code].forEach((i, idx) => {
        if(idx % q == r) answer += i
    })
    
    return answer;
}