function solution(num_list) {
    let evenNum = '', oddNum = '';

    num_list.forEach((i, idx) => {
        if(i % 2 != 0) {
            oddNum += String(i)
        }
        else {
            evenNum += String(i)
        }
            
    })        

    return Number(evenNum)+Number(oddNum)
    
}