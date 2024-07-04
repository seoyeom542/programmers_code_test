function solution(arr, flag) {
    var X = [];
    flag.forEach((d, i) => {
        let a = arr[i];    
        
        if(d === true) {
            for(let i = 0; i < a*2; i++) {
                X.push(a)
            }
        }
        else X = X.slice(0, a*-1)
    })
    return X;
}