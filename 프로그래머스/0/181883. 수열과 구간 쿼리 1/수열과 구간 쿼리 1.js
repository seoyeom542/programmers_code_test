function solution(arr, queries) {
    queries.forEach((query) => {
        const [a, b] = query;
        for(let i = a; i <= b; i++){
            arr[i]++
        }
    })
    
    return arr;
}