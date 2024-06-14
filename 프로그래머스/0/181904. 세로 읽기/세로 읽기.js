function solution(my_string, m, c) {
    var answer = '';
    for(let i = 0; i < my_string.length / m; i++){
        let str = my_string.slice(i*m, m*(i+1));
        answer += str[c-1];
    }
    return answer;
}