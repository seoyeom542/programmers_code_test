function solution(arr) {
    let stk = [], i = 0;
    if(stk.length === 0) {
        stk.push(arr[i]);
        i++;
    }
    while(i < arr.length) {
        if(stk[stk.length - 1] == arr[i]) stk.pop();
        else stk.push(arr[i]);
        i++;
    }
    return stk.length === 0 ? [-1] : stk;
}