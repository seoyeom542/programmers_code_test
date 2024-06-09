function solution(numLog) {
    let str = '', num = 0;
    
    [...numLog].forEach((i, idx) => {
        num = numLog[idx+1] - i;
        switch(num) {
            case 1:
                str += 'w';
                break;
            case -1:
                str += 's';
                break;
            case 10:
                str += 'd';
                break;
            case -10:
                str += 'a';
                break;
            default:
                break;  
        }
    })
    
    return str;
}