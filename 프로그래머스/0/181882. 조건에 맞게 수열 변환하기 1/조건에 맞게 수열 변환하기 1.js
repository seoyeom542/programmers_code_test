function solution(arr) {
    let answer = []
    arr.forEach((i, index) => {
        if(i >= 50 && i % 2 == 0) answer.push(i / 2)
        else if(i < 50 && i % 2 != 0) answer.push(i * 2)
        else answer.push(i)
    })
    
    return answer;
}