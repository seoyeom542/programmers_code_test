function solution(my_string, index_list) {
    var answer = [];
    index_list.forEach((i) => {
        answer.push(my_string[i])
    })
    return answer.join('');
}