function solution(num_list) {
    var sum = 0, multi = 1;
    num_list.forEach((i) => {
        sum += i;
        multi *= i;
    })

    return multi > sum * sum ? 0 : 1;
}