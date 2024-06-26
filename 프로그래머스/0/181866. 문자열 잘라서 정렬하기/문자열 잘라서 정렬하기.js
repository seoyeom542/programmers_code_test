function solution(myString) {  
    return myString.split('x').filter((d) => d != '').sort()
}