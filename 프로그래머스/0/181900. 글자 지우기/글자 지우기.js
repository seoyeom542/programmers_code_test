function solution(my_string, indices) {
    my_string = my_string.split('');

    indices.forEach((i) => {
        my_string[i] = ''
    })

    
    return my_string.join('')
}