function makeLooper(str) {
    let count = -1;
    
    return function (){
        if (count < str.length -1 ){
        count += 1;
        return str[count];
        } else {
            count = 0;
            return str[count]
        }
    }
    
}
