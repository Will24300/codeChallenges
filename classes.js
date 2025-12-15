function countRepeats(str) {
    const res = [];
    for (let i = 0; i < str.length; i++){
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
            res.push(str[i])
        }
    }
    const minus = [...new Set(res)].length;
    return res.length - minus;
}
