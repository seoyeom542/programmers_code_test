function solution(code) {
    let ret = '';
    let mode = true;
    
    [...code].forEach((i, idx) => {
        if(i === '1'){
            mode = !mode;
        }
        else {
            if(mode && idx % 2 === 0) {
                ret += i;
            }
            else if(!mode && idx % 2 != 0) {
                ret += i;
            }
        }
    })
    
    return ret.length === 0 ? 'EMPTY' : ret;
}