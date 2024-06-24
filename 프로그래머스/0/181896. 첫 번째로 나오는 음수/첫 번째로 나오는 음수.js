function solution(num_list) {
    var answer = num_list.filter((i) => i < 0);
    return answer.length > 0 ? num_list.indexOf(answer[0]) : -1;
}