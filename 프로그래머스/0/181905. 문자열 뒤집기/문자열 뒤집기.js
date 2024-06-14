function solution(my_string, s, e) {
    var answer = [...my_string].slice(s, e+1)
    answer.reverse()
    
    return my_string.slice(0, s) + answer.join('') + my_string.slice(e+1);
}