function solution(l, r) {
    let answer = [], regx = /^[0,5]*$/;
    
    for(let i = l; i <= r; i++){
        if(regx.test(i)) answer.push(i)
    }
    if (answer.length == 0) answer.push(-1)
    
    return answer;
}