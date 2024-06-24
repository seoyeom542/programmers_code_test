function solution(x1, x2, x3, x4) {
    let answer = true
    x1 == true || x2 == true ? x1 = true : x1 = false;
    x3 == true || x4 == true ? x3 = true : x3 = false;
    x1 == true && x3 == true ? answer : answer = false;
    return answer;
}