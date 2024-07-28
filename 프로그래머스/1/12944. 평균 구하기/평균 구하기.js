function solution(arr) {
    let sum = 0
    arr.forEach((d) => { sum = sum + d })
    var answer = sum / arr.length;
    return answer;
}