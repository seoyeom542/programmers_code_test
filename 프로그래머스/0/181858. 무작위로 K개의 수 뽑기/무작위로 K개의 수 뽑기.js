function solution(arr, k) {
    var answer = [];
    arr.forEach((d, i) => {
        if(answer.length === k) return answer
        if(answer.indexOf(d) === -1) answer.push(d)
    })
    
    if(answer.length < k) {
        for(let i = answer.length; i < k; i++){
            answer.push(-1)
        }
    }
    
    return answer;
}