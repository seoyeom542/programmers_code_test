function solution(numbers, n) {
    var answer = 0;
    
    for(let i in numbers){
        answer += numbers[i];
        if(answer > n) return answer;
    }
    
}