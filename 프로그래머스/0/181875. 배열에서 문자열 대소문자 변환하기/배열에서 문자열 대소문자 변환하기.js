function solution(strArr) {
    strArr.forEach((d, i) => {
        if(i % 2 == 0){
            strArr.splice(i, 1, d.toLowerCase())
        }
        else {
            strArr.splice(i, 1, d.toUpperCase())
        }
    })
    return strArr;
}