function solution(arr) {
    if(arr.indexOf(2) == -1) return [-1];
    
    let answer = [];
    arr.forEach((a, i) => {
        if(a == 2) answer.push(i)
    })
    
    if(answer.length == 1) return arr.splice(answer[0], 1)
    else{
        let end = answer[answer.length - 1] - answer[0] + 1;
        return arr.splice(answer[0], end)
    }
}