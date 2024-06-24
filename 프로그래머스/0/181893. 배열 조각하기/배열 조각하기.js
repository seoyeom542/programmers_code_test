function solution(arr, query) {
    let answer = []
    
    query.forEach((d, i) => {
        if(i % 2 == 0){
            answer = arr.slice(0, query[i] + 1)
        }
        else {
            answer = arr.slice(query[i])
        }
        arr = answer
    })
    return arr;
}