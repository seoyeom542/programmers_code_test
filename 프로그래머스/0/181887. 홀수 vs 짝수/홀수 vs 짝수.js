function solution(num_list) {
    var oddNum = 0, evenNum = 0;
    
    for(let i = 0; i < num_list.length; i++){
        let j = i + 1;
        if(j % 2 != 0) oddNum += num_list[i];
        else evenNum += num_list[i];
    }
    return oddNum > evenNum ? oddNum : evenNum;
}