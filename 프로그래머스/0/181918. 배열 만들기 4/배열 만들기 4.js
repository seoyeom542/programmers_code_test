function solution(arr) {
    let stk = [], i = 0;
    


    
    while(i < arr.length) {
        if(stk.length === 0){
            stk.push(arr[i]);
            i += 1;
        }
        
        if(arr[i] > stk[stk.length - 1]){
            stk.push(arr[i]);
            i += 1;
        }
        else if(arr[i] <= stk[stk.length - 1]){
            stk.splice(stk.length - 1, 1);
        }    
    }
    
    return stk;
}