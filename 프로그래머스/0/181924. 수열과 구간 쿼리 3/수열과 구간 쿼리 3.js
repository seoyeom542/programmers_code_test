function solution(arr, queries) {
    queries.forEach((i) => {
        let temp = 0;
        temp = arr[i[0]];
        arr[i[0]] = arr[i[1]];
        arr[i[1]] = temp;
    })
    
    return arr;
}