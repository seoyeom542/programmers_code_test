function solution(num_list) {
    var answer = 0;
    if(num_list.length > 10) {
        num_list.forEach(i => {
            answer += i
        })
    }
    else {
        answer = 1
        num_list.forEach(i => {
            answer = answer * i
        })
    }
    return answer;
}