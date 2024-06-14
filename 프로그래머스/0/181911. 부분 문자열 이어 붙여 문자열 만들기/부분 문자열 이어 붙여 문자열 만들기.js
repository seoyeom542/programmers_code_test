function solution(my_strings, parts) {
    var answer = '';
    parts.forEach((i, idx) => {
        const [a, b] = i;
        answer += my_strings[idx].slice(a, b+1);
    })
    return answer;
}