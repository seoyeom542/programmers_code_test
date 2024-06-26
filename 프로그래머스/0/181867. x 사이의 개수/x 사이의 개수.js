function solution(myString) {
    var answer = [], sum = 0;
    [...myString].forEach((d, i) => {
        if(d == 'x') {
            answer.push(sum)
            sum = 0;
        }
        else sum++;
    })
    answer.push(sum)
    return answer;
}