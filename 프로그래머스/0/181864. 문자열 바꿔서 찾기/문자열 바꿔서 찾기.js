function solution(myString, pat) {
    let arr = myString.split('')
    arr.forEach((d, i) => {
        if(d == 'A') arr.splice(i, 1, "B")
        else arr.splice(i, 1, 'A')
    })

    return arr.join('').indexOf(pat) != -1 ? 1 : 0;
}