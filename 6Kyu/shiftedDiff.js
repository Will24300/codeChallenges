function shiftedDiff(first,second){
    if (first.length !== second.length) return -1;
    return (second + second).indexOf(first);
}

// function shiftedDiff(first,second){
//     let count = 0;
//     const firstArr = first.split("");
//     if (first === second) return count;
//     if (first.split("").sort().join("") === second.split("").sort().join("")){
//         for (let i = 0; i < firstArr.length; i++){
            
//         count ++;
//         const poped = firstArr.pop();
//         firstArr.unshift(poped)
//         if (firstArr.join("") === second){
//             return count;
//         }
//         }
//     }
//     return -1;
    
// }
