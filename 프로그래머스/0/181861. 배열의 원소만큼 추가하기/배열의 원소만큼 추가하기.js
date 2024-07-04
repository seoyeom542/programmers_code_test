function solution(arr) {
    var X = [];
    arr.forEach((d) => {
        for(let i = 0; i < d; i++) {
            X.push(d)
        }
    })
    return X;
}