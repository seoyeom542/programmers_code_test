function solution(str_list) {    
    if(str_list.indexOf('l') == -1 && str_list.indexOf('r') == -1) return []
    
    let indexL = str_list.indexOf('l') == -1 ? 21 : str_list.indexOf('l');
    let indexR = str_list.indexOf('r') == -1 ? 21 : str_list.indexOf('r');
    
    if(indexL < indexR) {
        return str_list.slice(0, indexL);
    }
    else {
        return str_list.slice(indexR + 1);
    }
}