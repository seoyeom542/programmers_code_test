function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach((i) => {
        str = Number(i.slice(s,s+l));
        if(str > k) answer.push(str)
    })
    return answer;
}