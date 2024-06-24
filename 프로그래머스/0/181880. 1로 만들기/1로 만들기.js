function solution(num_list) {
    var answer = 0;
    num_list.forEach((i) => {
        while(i > 1){
            if(i % 2 == 0){
                i = i / 2
                answer++;
            }
            else {
                i = (i - 1) / 2;
                answer++
            }
        }
    })
    return answer;
}