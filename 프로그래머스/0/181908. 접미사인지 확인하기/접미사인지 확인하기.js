function solution(my_string, is_suffix) {
    let str = [];
    for(let i = 0; i <= my_string.length; i++){
        str.push(my_string.slice(i));
    }
    
    return str.includes(is_suffix) ? 1 : 0;
    
}