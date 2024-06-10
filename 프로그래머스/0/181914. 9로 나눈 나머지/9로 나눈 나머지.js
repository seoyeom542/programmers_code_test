function solution(number) {
    var answer = 0, num = 0;
    [...number].forEach((i) => {
        num += Number(i)
    })
    answer = num % 9;
    
    return answer;
}