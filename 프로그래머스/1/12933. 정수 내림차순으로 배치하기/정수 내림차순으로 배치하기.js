function solution(n) {
    let str = String(n).split('')
    str.sort((a,b) => b - a)
    var answer = Number(str.join(''))
    return answer;
}