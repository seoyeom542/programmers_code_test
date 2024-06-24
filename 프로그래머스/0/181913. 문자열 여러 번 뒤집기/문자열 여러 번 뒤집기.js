function solution(my_string, queries) {
    queries.forEach((queries) => {
        let answer = '', temp = '';
        const [s, e] = queries;
        answer = my_string.slice(0, s);
        temp =  my_string.slice(s, e+1).split("").reverse();
        answer += temp.join('');
        answer += my_string.slice(e+1);
        my_string = answer;
    })
    return my_string;
}