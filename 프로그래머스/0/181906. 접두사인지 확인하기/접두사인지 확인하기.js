function solution(my_string, is_prefix) {
    let str = [];
    for(let i = 0; i < my_string.length; i++){
        str.push(my_string.slice(0, i))
    }
    
    return str.includes(is_prefix) ? 1 : 0;
}