function solution(n, control) {
    [...control].forEach((i) => {
        switch (i) {
            case 'w':
                n += 1;
                break;
            case 's':
                n -= 1;
                break;
            case 'd':
                n += 10;
                break;
            case 'a':
                n -= 10;
                break;
            default:
                break;
        }
    })
    
    return n;
}