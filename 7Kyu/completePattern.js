function pattern(n){
    const arr = [];
    if (n <= 0 || n ==="") return "";
    for (let i = 1; i <= n; i++){
        arr.push(String(i));
    }
    const result = [];
    for (let i = 1; i <= n; i++){
        result.push( arr.join(''));
        let shifted = arr.shift();
        arr.push(shifted);
    }
    return result.join('\n');
}
