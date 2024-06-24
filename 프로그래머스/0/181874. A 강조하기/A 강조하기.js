function solution(myString) {
    let answer = '';
    [...myString].forEach((d, i) => {
        if(d == 'a') answer += d.toUpperCase()
        else if(d == 'A') answer += d
        else if(/^[A-Z]+$/.test(d)) answer += d.toLowerCase()
        else answer += d
    })
    return answer;
}