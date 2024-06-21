function solution(names) {
    const answer = names.filter((_, index) => index % 5 === 0)
    return answer;
}