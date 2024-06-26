function solution(binomial) {
    const [a, ap, b] = binomial.split(" ")
    switch(ap){
        case '+':
            return Number(a) + Number(b);
            braek;
        case '-':
            return Number(a) - Number(b);
            break;
        case '*':
            return Number(a) * Number(b);
            break;
    }
}